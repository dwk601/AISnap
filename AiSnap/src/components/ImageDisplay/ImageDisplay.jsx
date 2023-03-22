import React from 'react';
import './ImageDisplay.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ImageDisplay = ({ imageSrc }) => {
  return (
    <Box className="image-display">
      {imageSrc ? (
        <img src={imageSrc} alt="Uploaded" />
      ) : (
        <Typography variant="body1">No image uploaded</Typography>
      )}
    </Box>
  );
};

export default ImageDisplay;

