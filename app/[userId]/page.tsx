"use-client"
import { ChakraProvider } from '@chakra-ui/react'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import EncryptionText from '@/components/EncryptText'
import SendFile from '@/components/SendFile';
import { redirect } from "next/navigation";
export default async function page() {
 
  console.log("hello");
  
  const supabase = createServerComponentClient({cookies});
  const {
    data:{session},
  } = await supabase.auth.getSession();
  
  const { data, error } = await supabase.auth.getSession();
  console.log("Session get "+data);
  console.log(error);
  console.log(data);
    
  if (!session) {
    redirect("/");
  }
  return (
    <ChakraProvider>
    <div>
        <h3>Hello {session?.user?.email}</h3>
        {/* <SendFile/> */}
        <EncryptionText userId={session?.user?.id} userMail={session?.user?.email}/>
    </div>
    </ChakraProvider>
  )
}
