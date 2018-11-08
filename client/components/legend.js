import React from 'react';

const Legend = () => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <span> Legend: </span>
      <div className="legend blue" />
      <span> Mining Node </span>
      <div
        className="legend white"
        style={{
          borderColor: '#000000',
          borderWidth: '1px',
          border: '1px solid',
        }}
      >
        {' '}
      </div>
      <span> Empty </span>
    </div>
  );
};

export default Legend;
