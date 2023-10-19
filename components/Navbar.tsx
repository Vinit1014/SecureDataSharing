"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
export default function Navbar() {
    const router = useRouter();
  const supabase = createClientComponentClient();
    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push("/");
      };
  return (
    <div className="flex gap-2">
        <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}
