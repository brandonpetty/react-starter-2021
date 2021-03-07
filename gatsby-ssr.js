import React from 'react';
import './src/styles/global.css';

export const wrapPageElement = ({ element, props }) => {
  return (
    <div className="app">
      {element}
    </div>
  );
}