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
    
  const sendFile = ()=>{
    console.log("Clicked");
    
  }
    
  return (
    <>
      <div className="border-2 border-black">
        <h3>Hello</h3>
        <Input placeholder='Enter the reciever'/>
        <Button onClick={sendFile} colorScheme="blue">Send</Button>
      </div>
    </>
  );
}
