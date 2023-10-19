"use client";
import React, { useEffect, useState } from "react";
// import React from 'react'
import { useParams } from 'next/navigation';
export default function SendFile() {

  const searchParams = useParams();
  console.log(searchParams.userId);
  const [selectedFile, setSelectedFile] = useState(null);
  const [obj, setObj] = useState();
  const [array, setArray] = useState([
    // {
    //   fileName: "",
    //   fileContent: "",
    // },
  ]);
  const [fetchedUser,setFetchedUser] = useState([]);

    useEffect(() => {
      console.log(array);
      console.log(obj);
      console.log(fetchedUser);
      
    }, [array,obj,fetchedUser]);

    // useEffect(()=>{
    //   fetchingUser();
    // },[])

    // const fetchingUser = async () => {
    //   try {
    //     const response = await fetch(`/api/fetch/${searchParams.userId}`); //have to make changes over here
    
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    
    //     const data = await response.json(); // Assuming the API returns JSON
    //     setFetchedUser(data?.user);
    //     // console.log(data);
    //   } catch (error) {
    //     console.error("An error occurred:", error);
    //   }
    // };
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
    <>
    <div className="border-4 border-indigo-500/100 flex items-center justify-center shadow-md">
      <input
        className="w-96"
        type="file"
        accept=".pdf, .doc, .docx, .txt" // Define accepted file types
        onChange={handleFileSelect}
        />
      <button className="text-white rounded-md bg-green-600" onClick={handleFileSubmit}>Submit</button>
    </div>

    {/* Fetching data from supabase */}
    <div className="border-2 border-black">
      <h3>Hello</h3>
      {fetchedUser && fetchedUser.map((user,index)=>(
         <div key={index}> {/* Don't forget to add a unique key when using map */}
          <p>User Name: {user.email}</p>
         {/* Add other user-related information here */}
        </div>
      ))}
    </div>
    <hr></hr>
    <div>
      <input></input>
    </div>
    </>

  );
}
