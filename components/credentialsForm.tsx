"use client";
import { useRouter } from "next/navigation";
// import Router from "next/router";
import { useEffect, useState } from "react";

export function CredentialsForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [formData,setFormData] = useState({
    email:"",
    password:""
  });

  useEffect(()=>{
    console.log(formData);
  },[formData])

  const handleSubmit = async()=>{
    console.log("Submitted");
    try{
      await fetch("/api/auth",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })
      router.push("/asd");
      // if (response.ok) {
      //   console.log(response);
        
      // }
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
    <div className="w-full mt-8 text-xl text-black font-semibold flex flex-col">
      {error && (
        <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">
          {error}
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
        Log in
      </button>
    </div>
  );
}
