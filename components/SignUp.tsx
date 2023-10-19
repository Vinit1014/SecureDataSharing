"use client";
import { createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export  function SignUp() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [errorState, setErrorState] = useState("");
  const [formData,setFormData] = useState({
    email:"",
    password:""
  });
  const [userName,setUserName] = useState("");

  const signUp = async()=>{
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options:{
        emailRedirectTo:`${location.origin}/auth/callback`
      }
    })
    setErrorState("Incorrect "+error);
    console.log(data);
    console.log(error);
  }
  
  useEffect(()=>{
    console.log(formData);
    const removed = formData.email.split('@');
    if (removed.length === 2) {
      const username = removed[0]; // Get the part before the '@' symbol
      setUserName(username);
      console.log(username); // This will print "abc123" to the console
    } else {
      console.log("Invalid email format");
    }
  },[formData,userName])

  const handleSubmit = async()=>{
    console.log("Submitted");
    
    try{
      await fetch("/api/authe",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })
      signUp();
      router.push(`/${userName}`);
    }
    catch(error){
      console.log(error);
    }
  };
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col items-center mt-10 p-10 shadow-md">
      <h4>Create a new account</h4>
      <h2 className="mt-10 mb-4 text-4xl font-bold">Sign Up</h2>

    {/* For signUp */}
    <div className="w-full mr-8 mt-8 text-xl text-black font-semibold flex flex-col">
      {errorState && (
        <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">
          {errorState}
        </span>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
        />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={formData.password}
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
        />

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full h-12 px-6 mt-4 text-lg text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
        >
        Sign Up
      </button>
    </div>
  </div>

  );
}
