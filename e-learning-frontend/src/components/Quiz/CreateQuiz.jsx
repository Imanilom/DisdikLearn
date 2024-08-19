import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../firebase'; // Adjust the path if needed

const CreateQuiz = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', options: [{ option: '' }], correctAnswer: 0, image: '' }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const fileRef = useRef(null);

  const token = localStorage.getItem('token');

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
          const newQuestions = [...questions];
          newQuestions[qIndex].image = downloadURL;
          setQuestions(newQuestions);
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
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, e) => {
    const { value } = e.target;
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex].option = value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (qIndex, oIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctAnswer = oIndex;
    setQuestions(newQuestions);
  };

  const handleAddOption = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].options.push({ option: '' });
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: [{ option: '' }], correctAnswer: 0, image: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`http://localhost:3000/api/courses/${courseId}/quizzes`, {
        title,
        questions,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/courses/${courseId}/quizzes`);
    } catch (err) {
      setError(err.message || 'Failed to create quiz');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-4 p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Create New Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-4">
            <label className="block text-gray-700">Question {qIndex + 1}</label>
            <input
              type="text"
              name="question"
              value={question.question}
              onChange={(e) => handleQuestionChange(qIndex, e)}
              className="border rounded px-3 py-2 w-full"
              required
            />
            {question.image && (
              <div className="mb-2">
                <img
                  src={question.image}
                  alt={`Question ${qIndex + 1}`}
                  className="h-full w-full cursor-pointer rounded object-cover"
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
                  value={option.option}
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
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
        >
          {loading ? 'Creating...' : 'Create Quiz'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default CreateQuiz;
