"use client";
import React, { useEffect, useState } from "react";
// import React from 'react'

export default function SendFile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [obj, setObj] = useState();
  const [array, setArray] = useState([
    // {
    //   fileName: "",
    //   fileContent: "",
    // },
  ]);

    useEffect(() => {
      console.log(array);
      console.log(obj);
    }, [array,obj]);

  // Function to handle file selection
  
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    setObj(reader);
    setSelectedFile(file);
  };

  // Function to handle file submission
  const handleFileSubmit = () => {
    if (selectedFile) {
        console.log(obj.result);
      // You can perform actions with the selected file here.
      // For example, you can upload it to a server or process it in any way you like.
      // Here, we're just logging the file details.

    //   setArray(selectedFile.name);   
      setArray([...array,{fileName:selectedFile.name,fileContent:obj.result}])
    } else {
      alert("Please select a file first.");
    }
  };
  
  return (
    <div>
      <input
        type="file"
        accept=".pdf, .doc, .docx, .txt" // Define accepted file types
        onChange={handleFileSelect}
      />
      <button onClick={handleFileSubmit}>Submit</button>
    </div>
  );
}
