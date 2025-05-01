// src/components/BackgroundRemover.js
import React, { useState } from 'react';
import axios from 'axios';

const BackgroundRemover = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [resultURL, setResultURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setPreviewURL(URL.createObjectURL(e.target.files[0]));
    setResultURL(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append('image', selectedFile);

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/remove-bg', formData, {
        responseType: 'blob',
      });

      const imageURL = URL.createObjectURL(response.data);
      setResultURL(imageURL);
    } catch (err) {
      console.error('Error uploading image:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Background Remover</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {previewURL && <img src={previewURL} alt="Original" width="300" />}
      <br />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Processing...' : 'Remove Background'}
      </button>
      <br />
      {resultURL && (
        <>
          <h3>Result:</h3>
          <img src={resultURL} alt="No background" width="300" />
        </>
      )}
    </div>
  );
};

export default BackgroundRemover;
