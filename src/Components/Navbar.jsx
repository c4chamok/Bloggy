

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default async function Navbar() {
    const { isAuthenticated, getUser } = getKindeServerSession()
    const isUserAuthenticated = await isAuthenticated()

    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">

                <a href="/" className="text-2xl font-bold">
                    Bloggy
                </a>

                <div className="flex items-center space-x-4">
                    <a href="/" className="hover:underline">
                        Home
                    </a>
                    <a href="/profile" className="hover:underline">
                        Profile
                    </a>
                </div>


                <div>
                    {isUserAuthenticated ? (
                        <LogoutLink>Sign Out</LogoutLink>
                    ) : (
                        <LoginLink>Sign in</LoginLink>
                    )}
                </div>
            </nav>
        </header>
    );
}
