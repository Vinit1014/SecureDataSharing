"use client"
import { supabase } from '@/utils/supabase';
import { get } from 'http';
import React,{useState,useEffect} from 'react'
import { Button,Input } from '@chakra-ui/react'

export default function EncryptText(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileArray,setFileArray] = useState([]);
  const [userId, setUserId] = useState('');
  const [privateKey,setPrivateKey] = useState("");
  const [link,setLink] = useState("");
  const [isValid,setIsValid] = useState(false);
  const [enteredKey,setEnteredKey] = useState("");

  useEffect(()=>{
    console.log(privateKey);
  },[privateKey])
  
  useEffect(()=>{
    getPrivateKey();
    downloadFile();
  },[])
  
  useEffect(()=>{
    console.log(enteredKey);
  },[enteredKey])

  const getPrivateKey = async () => {
    let { data: User, error } = await supabase
    .from('User')
    .select('private_key')
    .eq('email',props.userMail)
    setPrivateKey(User[0]?.private_key); 
  }

  const handleFileSelect = async(e) => {
    const file = e.target.files[0];
    
    const {data,error} = await supabase
    .storage
    .from('files')
    .upload('d84e58c5-09e8-4e12-aec0-564ce7be6cc0'+'/'+file.name,file)
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
    const { data, error } = supabase
    .storage
    .from('files')
    // .download(props.userId+'/try.txt')
    // .download('d84e58c5-09e8-4e12-aec0-564ce7be6cc0'+'/try.txt')
    .getPublicUrl('d84e58c5-09e8-4e12-aec0-564ce7be6cc0'+'/try.txt',{
      download: true
    })

    if (data) {
      setLink(data.publicUrl)
    }
    console.log(data);
    console.log(error);
  }
    
  const checkPrivateKey = ()=>{
    if (enteredKey === privateKey) {
      setIsValid(true);
      setEnteredKey("");
    }

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valuee = e.target.value;
    setEnteredKey(valuee)
  };

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
      <br></br>
      <br></br>
      <Input placeholder='Enter private key to download file.' value={enteredKey} onChange={handleChange}/>
      <Button colorScheme='blue' onClick={checkPrivateKey}>Submit</Button>
      {isValid ? <Button colorScheme='blue'>
      <a href={link} download>Download</a>
      </Button> : <p>Enter correct private key to download</p>}
    </div>
  )
}
