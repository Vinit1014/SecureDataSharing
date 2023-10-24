import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";
import { useParams } from "next/navigation";
export async function GET(req:Request){
    // const fetchedEmail = req();
    // const main = fetchedEmail.email+"@gmail.com";
    // console.log(main);
    
    let { data: User, error } = await supabase
    .from('User')
    .select('private_key')
    // .eq('email',main)
    // .neq('email',email)
    console.log(error);
    
    return NextResponse.json({user:User,message:"data fetched"}) 
}
