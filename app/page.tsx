"use-client"
import { ChakraProvider } from '@chakra-ui/react'
import EncryptText from "@/components/EncryptText";
import SendFile from "@/components/SendFile";
import { SignUp } from "@/components/SignUp";
import {SignIN} from "@/components/SignIN";

export default function Home() {
  return (
    <ChakraProvider>
    <>
    <div className="w-full flex items-center justify-center min-h-screen py-2">
      <SignIN/>
      <h1 className="font-bold">OR</h1>
      <SignUp/>
    </div>
    </>
    </ChakraProvider>
  );
}
