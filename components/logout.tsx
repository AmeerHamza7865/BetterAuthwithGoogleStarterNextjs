"use client"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { LogOutIcon } from "lucide-react"

export function Logout() {
    const router = useRouter()
    
    const handleLogout = async () => {
        await authClient.signOut()
        router.push("/login")
    }
    return (
        <div>
            <Button onClick={handleLogout}>Logout <LogOutIcon className="size-4" /></Button>
        </div>
    )
}
