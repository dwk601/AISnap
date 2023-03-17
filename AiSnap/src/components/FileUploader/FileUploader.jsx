import React from 'react';
import './FileUploader.css';
import Button from '@mui/material/Button';

const FileUploader = ({ onFileSelect }) => {
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <Button variant="contained" component="label">
      Upload File
      <input type="file" hidden accept="image/*" onChange={handleFileInput} />
    </Button>
  );
};

export default FileUploader;

