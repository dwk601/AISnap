import React from 'react';
import './ClassificationResults.css';

const ClassificationResults = ({ results }) => {
  return (
    <div className="classification-results">
      {results ? (
        results.map((result, index) => (
          <div key={index}>
            <span>{result.label}: </span>
            <span>{(result.probability * 100).toFixed(2)}%</span>
          </div>
        ))
      ) : (
        <p>No classification results available</p>
      )}
    </div>
  );
};


export default ClassificationResults;
