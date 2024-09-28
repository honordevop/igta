"use client"
// components/Editor.js
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Editor = ({ value, onChange }) => {

    const editorStyle = {
        height: '150px', // Set your desired height here
        marginBottom: '10px',
        // overflowY: 'auto', /* Ensure vertical scrolling */
      };
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      theme="snow" // You can choose a different theme if you prefer
    //   style={editorStyle} // Apply the style here
    />
  );
};

export default Editor;
