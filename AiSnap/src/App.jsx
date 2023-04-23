import React, { useState } from "react";
import FileUploader from "./components/FileUploader/FileUploader";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import ClassificationResults from "./components/ClassificationResults/ClassificationResults";
//import ImgRecogServer from "./components/ImgRecogServer/ImgRecogServer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import "./App.css";

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
    const formData = new FormData();
    formData.append('file',imageSrc);
    console.log("hi")
    console.log(imageSrc)

    fetch("http://localhost:5001/predict", {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        console.log("We are in the JSON response")
        var jsonResponse = response.json();
        console.log(jsonResponse);


        // for (const obj in jsonResponse){
        //     for(const key in obj){
        //       classificationResults.append(obj[key]);
        //     }
        // }
        
      });

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
