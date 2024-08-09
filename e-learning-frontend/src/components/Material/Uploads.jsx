import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CourseMaterialManagement = () => {
    const { courseId } = useParams();
    const [materialFile, setMaterialFile] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

  const handleFileChange = (e) => {
    setMaterialFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('materials', materialFile);

    try {
      await axios.post(`http://localhost:3000/api/courses/${courseId}/materials`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
      });

      navigate(`/courses/${courseId}`);
      // Handle successful upload
    } catch (error) {
      console.error('Error uploading course material:', error);
      // Handle upload error
    }
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Course Material Management</h1>

      <div className="mb-4">
        <label htmlFor="materialFile" className="block font-medium mb-2">
          Upload Material:
        </label>
        <input
          type="file"
          id="materialFile"
          onChange={handleFileChange}
          className="border rounded-md px-3 py-2 w-full"
        />
      </div>

      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
      >
        Upload Material
      </button>
    </div>
  );
};

export default CourseMaterialManagement;