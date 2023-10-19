import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");
    console.log("Code is "+code);
    
    if (code) {
        const supabase = createRouteHandlerClient({cookies});
        await supabase.auth.exchangeCodeForSession(code);
        console.log("Supabase is "+supabase);
        
    }
    return NextResponse.redirect(requestUrl.origin)
 
}