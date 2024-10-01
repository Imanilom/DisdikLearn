import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../firebase'; // Adjust the path if needed

const EditQuiz = () => {
  const { courseId, quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const fileRef = useRef(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`/api/courses/${courseId}/quizzes/${quizId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuiz(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch quiz details');
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [courseId, quizId, token]);

  const handleFileUpload = async (imageFile, qIndex) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, `quizzes/questions/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
        console.error('Upload failed:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const newQuestions = [...quiz.questions];
          newQuestions[qIndex].image = downloadURL;
          setQuiz({ ...quiz, questions: newQuestions });
          setImageUrl(downloadURL);
        });
      }
    );
  };

  const handleImageChange = (qIndex, e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      handleFileUpload(file, qIndex);
    }
  };

  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    const newQuestions = [...quiz.questions];
    newQuestions[index][name] = value;
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const handleOptionChange = (qIndex, oIndex, e) => {
    const { value } = e.target;
    const newQuestions = [...quiz.questions];
    newQuestions[qIndex].options[oIndex].option = value;
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const handleCorrectAnswerChange = (qIndex, oIndex) => {
    const newQuestions = [...quiz.questions];
    newQuestions[qIndex].correctAnswer = oIndex;
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const handleAddOption = (index) => {
    const newQuestions = [...quiz.questions];
    newQuestions[index].options.push({ option: '' });
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const handleAddQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [...quiz.questions, { question: '', options: [{ option: '' }], correctAnswer: 0 }],
    });
  };

  const handleDeleteQuestion = async (qIndex) => {
    try {
      const newQuestions = [...quiz.questions];
      newQuestions.splice(qIndex, 1);
      setQuiz({ ...quiz, questions: newQuestions });
    } catch (err) {
      setError(err.message || 'Failed to delete question');
    }
  };

  const handleDeleteQuiz = async () => {
    if (window.confirm('Are you sure you want to delete this quiz?')) {
      try {
        await axios.delete(`/api/courses/${courseId}/quizzes/${quizId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        navigate(`/courses/${courseId}/quizzes`);
      } catch (err) {
        setError(err.message || 'Failed to delete quiz');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`/api/courses/${courseId}/quizzes/${quizId}`, quiz, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/courses/${courseId}/quizzes`);
    } catch (err) {
      setError(err.message || 'Failed to update quiz');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto mt-4 p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Edit Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={quiz.title || ''}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        {quiz.questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-4">
            <label className="block text-gray-700">Question {qIndex + 1}</label>
            <input
              type="text"
              name="question"
              value={question.question || ''}
              onChange={(e) => handleQuestionChange(qIndex, e)}
              className="border rounded px-3 py-2 w-full"
              required
            />
            {question.image && (
              <div className="mb-2">
                <img
                  src={question.image}
                  alt={`Question ${qIndex + 1}`}
                  className="h-1/4 w-1/4 cursor-pointer rounded object-cover"
                />
              </div>
            )}
            <input
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
              onChange={(e) => handleImageChange(qIndex, e)}
            />
            <button
              type="button"
              onClick={() => fileRef.current.click()}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300 mt-2"
            >
              Upload Image
            </button>
            {imagePercent > 0 && imagePercent < 100 && (
              <p className="text-slate-700">{`Uploading: ${imagePercent}%`}</p>
            )}
            {imageError && (
              <p className="text-red-700">
                Error uploading image (file size must be less than 2 MB)
              </p>
            )}
            {question.options.map((option, oIndex) => (
              <div key={oIndex} className="mt-2 flex items-center">
                <input
                  type="text"
                  value={option.option || ''}
                  onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                  className="border rounded px-3 py-2 w-full"
                  required
                />
                <input
                  type="checkbox"
                  checked={question.correctAnswer === oIndex}
                  onChange={() => handleCorrectAnswerChange(qIndex, oIndex)}
                  className="ml-2"
                />
                <label className="ml-1">Correct Answer</label>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddOption(qIndex)}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300 mt-2"
            >
              Add Option
            </button>
            <button
              type="button"
              onClick={() => handleDeleteQuestion(qIndex)}
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 mt-2 ml-2"
            >
              Delete Question
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddQuestion}
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300 mr-4 mt-4"
        >
          Add Question
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-4 mt-4"
        >
          {loading ? 'Updating...' : 'Update Quiz'}
        </button>
        <button
          type="button"
          onClick={handleDeleteQuiz}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-4 mr-4 ml-2"
        >
          Delete Quiz
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default EditQuiz;
