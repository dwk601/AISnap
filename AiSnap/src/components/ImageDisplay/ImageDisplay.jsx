import React from 'react';
import './ImageDisplay.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ImageDisplay = ({ imageSrc }) => {
  const imageClass = imageSrc ? 'shake' : ''; // Add 'shake' class if imageSrc exists

  return (
    <Box className="image-display">
      {imageSrc ? (
        <img src={imageSrc} alt="Uploaded" className={imageClass} />
      ) : (
        <Typography variant="body1">No image uploaded</Typography>
      )}
    </Box>
  );
};

export default ImageDisplay;