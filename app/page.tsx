import EncryptText from "@/components/EncryptText";
import SendFile from "@/components/SendFile";
import { CredentialsForm } from "@/components/credentialsForm";
export default function Home() {
  
  
  return (
    <>
    {/* <SendFile/> */}
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">

    <div className="flex flex-col items-center mt-10 p-10 shadow-md">
    <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
    <CredentialsForm/>
    {/* <EncryptText/> */}
    {/* <SendFile/> */}
    </div>
    </div>
    </>
  );
}
