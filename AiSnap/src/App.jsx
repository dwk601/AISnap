import React, { useState } from 'react';
import TitleLogo from './components/TitleLogo';
import FileUploader from './components/FileUploader/FileUploader';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import ClassificationResults from './components/ClassificationResults/ClassificationResults';
import BackgroundAnimation from './components/BackgroundAnimation';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
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

    const dataURLtoFile = (dataurl, filename) => {
      const arr = dataurl.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n) {
        u8arr[n - 1] = bstr.charCodeAt(n - 1);
        n -= 1; // to make eslint happy
      }
      return new File([u8arr], filename, { type: mime });
    };

    var formData = new FormData();
    var blob = dataURLtoFile(imageSrc);
    formData.append("image", blob);

    axios({
      method: "POST",
      url: "http://localhost:5001/predict",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      var responseData = response.data; //This should be the array where objects are.
      setClassificationResults(responseData);
    });
  };

  return (
    <div className="app">
      <BackgroundAnimation />
      <div className="container">
        <TitleLogo />
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
            className="submit-button"
          >
            Submit Image
          </Button>
        </Box>
        <ClassificationResults results={classificationResults} />
      </div>
    </div>
  );  
}

export default App;
