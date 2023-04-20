import React, { useState } from 'react';
import './FileUploader.css';
import Button from '@mui/material/Button';

const FileUploader = ({ onFileSelect }) => {
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileSelected(true);
      onFileSelect(file);
    }
  };

  return (
    <Button variant="contained" component="label" color="primary" style={{ backgroundColor: '#df6c79' }}>
    {fileSelected ? "Reupload File" : "Upload File"}
    <input type="file" hidden accept="image/*" onChange={handleFileInput} />
    </Button>
  );
};

export default FileUploader;

