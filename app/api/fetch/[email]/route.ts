import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";
import { useParams } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { domainToASCII } from "url";
export async function GET(req:Request){
    // const params = useParams();
    // console.log("Hello"+req);
    // return NextResponse.json({reqq:req.url})
    // const supabase = createServerComponentClient({cookies});
    // const {
    //     data:{session},
    // } = await supabase.auth.getSession();
    // const fetchedEmail = session?.user.email;
    // console.log(fetchedEmail);

    
    // const { data, error } = await supabase.auth.getSession();
    // let { data: User, error } = await supabase
    // .from('User')
    // .select('private_key')
    // // .eq('email',main)
    // // .neq('email',email)
    // console.log(error);
    
    return NextResponse.json({user:params,message:"data fetched"}) 

    // return NextResponse.json({session:session})
}
