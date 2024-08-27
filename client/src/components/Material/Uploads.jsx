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

const CourseMaterialManagement = () => {
  const { courseId } = useParams();
  const [materialFile, setMaterialFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setMaterialFile(file);
      setUploadError(null);
    } else {
      setUploadError('File size must be less than 2MB');
      setMaterialFile(null);
    }
  };

  const handleUpload = async () => {
    if (!materialFile) {
      setUploadError('Please select a valid file to upload');
      return;
    }

    const storage = getStorage(app);
    const fileName = `${new Date().getTime()}_${materialFile.name}`;
    const storageRef = ref(storage, `materials/${courseId}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, materialFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(Math.round(progress));
      },
      (error) => {
        setUploadError('Error uploading file');
        console.error('Firebase upload error:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          try {
            await axios.post(
              `/api/courses/${courseId}/materials`,
              { materialUrl: downloadURL },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
              }
            );
            navigate(`/courses/${courseId}`);
          } catch (error) {
            setUploadError('Error saving file URL to database');
            console.error('Error saving file URL:', error);
          }
        });
      }
    );
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Course Material Management</h1>

      <div className="mb-4">
        <label htmlFor="materialFile" className="block font-medium mb-2">
          Upload Material (PDF, max 2MB):
        </label>
        <input
          type="file"
          id="materialFile"
          ref={fileInputRef}
          accept="application/pdf"
          onChange={handleFileChange}
          className="border rounded-md px-3 py-2 w-full"
        />
      </div>

      {uploadError && (
        <p className="text-red-500 mb-4">{uploadError}</p>
      )}

      {uploadProgress > 0 && (
        <p className="text-blue-500 mb-4">{`Uploading: ${uploadProgress}%`}</p>
      )}

      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        disabled={!materialFile}
      >
        Upload Material
      </button>
    </div>
  );
};

export default CourseMaterialManagement;
