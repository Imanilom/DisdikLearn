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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const CreateLesson = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const fileRef = useRef(null);
  const token = localStorage.getItem('token');

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, `lessons/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
        });
      }
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      handleFileUpload(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/courses/${courseId}/lessons`, {
        title,
        content,
        image: imageUrl
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/courses/${courseId}/lessons`);
    } catch (err) {
      console.error('Error creating lesson:', err);
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Create Lesson</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">Content</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            className="h-64"
            theme="snow"
          />
        </div>
        <div className="mb-4 flex flex-col items-center">
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
          <img
            src={imageUrl || 'https://via.placeholder.com/1200x400'}
            alt="Lesson"
            className="h-auto pt-10 w-auto cursor-pointer rounded object-cover"
            onClick={() => fileRef.current.click()}
          />
          <p className="text-sm mt-2">
            {imageError ? (
              <span className="text-red-700">
                Error uploading image (file size must be less than 2 MB)
              </span>
            ) : imagePercent > 0 && imagePercent < 100 ? (
              <span className="text-slate-700">{`Uploading: ${imagePercent}%`}</span>
            ) : imagePercent === 100 ? (
              <span className="text-green-700">Image uploaded successfully</span>
            ) : (
              ''
            )}
          </p>
        </div>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
          Create Lesson
        </button>
      </form>
    </div>
  );
};

export default CreateLesson;
