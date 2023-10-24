"use client";
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { Input,Button } from '@chakra-ui/react'
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
  const [fetchedPrivateKey,setFetchedPrivateKey] = useState([]);

    useEffect(() => {
      console.log(array);
      console.log(obj);
      console.log(fetchedPrivateKey);
      
    }, [array,obj,fetchedPrivateKey]);

    // useEffect(()=>{
    //   fetchingPrivateKey();
    // },[])

    const fetchingPrivateKey = async () => {
      try {
        const response = await fetch(`/api/fetch/${searchParams.userId}`); //have to make changes over here
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json(); // Assuming the API returns JSON
        setFetchedPrivateKey(data.user[0].private_key);
        console.log(data.user[0].private_key);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  
  const sendFile = ()=>{
    console.log("Clicked");
    
  }
    
  return (
    <>
      <div className="border-2 border-black">
        <h3>Hello</h3>
        <button onClick={fetchingPrivateKey}>Get my private key:</button>
        <p>Your private key is {fetchedPrivateKey}</p>
        <Input placeholder='Enter the reciever'/>
        <Button onClick={sendFile} colorScheme="blue">Send</Button>
      </div>
    </>
  );
}
