import React, { useState } from 'react';
import FileUploader from './components/FileUploader/FileUploader';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import ClassificationResults from './components/ClassificationResults/ClassificationResults';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './App.css';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [classificationResults, setClassificationResults] = useState(null);

  const handleFileSelect = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    // Call your API for classification and update the classificationResults state here
  };

  return (
    <div className="app">
      <Box mb={2}>
        <FileUploader onFileSelect={handleFileSelect} />
      </Box>
      <ImageDisplay imageSrc={imageSrc} />
      <Box mt={2} mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!imageSrc}
        >
          Submit Image
        </Button>
      </Box>
      <ClassificationResults results={classificationResults} />
    </div>
  );
}

export default App;
