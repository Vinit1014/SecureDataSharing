import { supabase } from "@/utils/supabase";
import {hash} from 'bcrypt';
import { NextResponse } from "next/server";

// export async function GET(req:Request, res:Response) {
// console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

    

// let { data: User, error } = await supabase
//   .from('User')
//   .select('*')
    
//     if (User) {
//         console.log(User);
//         return NextResponse.json({user:User})
//     }
//     else{
//         return NextResponse.json({msg:error})
//     }
// }

export async function POST(req:Request){
    try{
        const body = await req.json();
        const {email,password} = body;

        // check if email already exists
        let {data:User, error} = await supabase
        .from('User')
        .select('email')
        .eq('email',email)
        .eq('password',password)
        console.log(User);

       

        if (User.length>0) {
            return NextResponse.json({user:User,message:"Thank you"})   
        }
        
        // const hashPassword = await hash(password,10);
        
        let tempData = {
            created_at:new Date(),
            email:String(email),
            password:String(password)
        }
        const data = await supabase
            .from('User')
            .insert([tempData])
            .select()
        if (data) {
            return NextResponse.json({data:data,message:"User inserted successfully"},{status:201});
        }else{
            return NextResponse.json({"message":"Not inserted"},{status:400})
        }

    }catch(error){
        return NextResponse.json(error);
        // console.log(error);
    }
}