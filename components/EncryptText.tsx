"use client"
import { supabase } from '@/utils/supabase';
import { get } from 'http';
import React,{useState,useEffect} from 'react'

export default function EncryptText(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileArray,setFileArray] = useState([]);
  const [userId, setUserId] = useState('');

  const getUser = async () => {

    // try {
    //   const { data: { user } } = await supabase.auth.getUser()
    //   if (user !== null) {
    //     setUserId(user.id);
    //   } else {
    //     setUserId('');
    //   }
    // } catch (e) {
    // }
  }

  const handleFileSelect = async(e) => {
    const file = e.target.files[0];
    
    const {data,error} = await supabase
    .storage
    .from('files')
    .upload(props.userId+'/'+file.name,file)
    // console.log(data);
    // console.log(error);
  };

  const fetchFiles = async()=>{
    const { data, error } = await supabase
    .storage
    .from('files')
    .list('d84e58c5-09e8-4e12-aec0-564ce7be6cc0', {
    })
    
    if (data) {
      setFileArray(data[0]?.name);
      console.log(fileArray);
    }
    console.log(error);
    
  }

  const downloadFile = async()=>{
    const { data, error } = await supabase
    .storage
    .from('files')
    .download(props.userId+'/try.txt')
    console.log(data);
    console.log(error);
  }

  useEffect(()=>{
    getUser();
  },[userId])
  return (
    <div>
      <input
        className="w-96"
        type="file"
        accept=".pdf, .doc, .docx, .txt" // Define accepted file types
        onChange={handleFileSelect}
        />
      <hr></hr>
      <button onClick={fetchFiles}>List all files</button>
      <button onClick={downloadFile}>Download</button>
    </div>
  )
}
