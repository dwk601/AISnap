import { useState } from "react";
import aiSnapLogo from "./assets/result.png";
import FileUploader from "./components/FileUploader/FileUploader";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
// import classificationResultsd from './components/ClassificationResults/ClassificationResults'  //Commented out because this doesn't export anything yet
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <img src={aiSnapLogo} className="logo" />
        <div className="appName">
          <h1>AI Snap</h1>
          <h3>Image Classification</h3>
        </div>
      </div>
      <div>
        <FileUploader />
        <ImageDisplay />
      </div>
    </div>
  );
}

export default App;
