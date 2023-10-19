import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";
import { useParams } from "next/navigation";
export async function GET(){
    const fetchedEmail = useParams();
    const main = fetchedEmail.email+"@gmail.com";
    console.log(main);
    
    let { data: User, error } = await supabase
    .from('User')
    .select('email')
    // .neq('email',email)
    return NextResponse.json({user:User,message:"data fetched"}) 
}

