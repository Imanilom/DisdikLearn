import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../firebase'; // Adjust the path if needed

const EditCourse = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const fileRef = useRef(null);
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/courses/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTitle(response.data.title);
        setDescription(response.data.description);
        setImageUrl(response.data.image || '');
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };
    fetchCourse();
  }, [id, token]);

  const handleFileUpload = async (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, `course/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

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
      setNewImage(file);
      handleFileUpload(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const courseData = { title, description, image: newImage ? imageUrl : imageUrl };
      await axios.patch(`http://localhost:3000/api/courses/${id}`, courseData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/courses');
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Course</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2 font-bold">Current Image</label>
          <div className="mb-2">
            <img
              src={imageUrl || 'https://via.placeholder.com/1200x400'}
              alt="Current Course"
              className="h-full w-full object-cover rounded"
            />
          </div>
          <label className="block mb-2 font-bold">New Image</label>
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
          <img
            src={newImage ? URL.createObjectURL(newImage) : 'https://via.placeholder.com/1200x400'}
            alt="New Course"
            className="h-60 w-full object-cover cursor-pointer rounded"
            onClick={() => fileRef.current.click()}
          />
          <p className="text-sm mt-2">
            {imageError ? (
              <span className="text-red-700">Error uploading image</span>
            ) : imagePercent > 0 && imagePercent < 100 ? (
              <span className="text-slate-700">{`Uploading: ${imagePercent}%`}</span>
            ) : imagePercent === 100 ? (
              <span className="text-green-700">Image uploaded successfully</span>
            ) : (
              ''
            )}
          </p>
        </div>
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
