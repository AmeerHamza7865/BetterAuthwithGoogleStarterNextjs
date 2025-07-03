import { Logout } from "@/components/logout";


export default function Dashboard() {
    // Get the logged-in user's name and display their initial
    // We'll use a client component and fetch the user from authClient
    // Since this is a server component, we need to use a client subcomponent for user info

   
    return (
        <div className="flex justify-end">
            <Logout />
           
        </div>
    )
}