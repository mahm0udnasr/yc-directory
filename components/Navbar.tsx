import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth, signOut, signIn} from "@/auth";
import {Love_Ya_Like_A_Sister} from "next/dist/compiled/@next/font/dist/google";
import {sendError} from "next/dist/server/api-utils";
import {options} from "preact";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/public">
                    <Image src="/logo.png" alt="Logo" width={144} height={30}/>
                </Link>
                <div className="flex items-center gap-5">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <form action={async () => {
                                "use server";
                                await signOut({redirectTo: "/"});
                            }}>
                                <button type="submit">LogOut</button>
                            </form>
                            <Link href={`/user/${session?.user?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ): (
                        <form action={async () => {
                            "use server";
                            await signIn('github')
                        }}>
                            <button type="submit">
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default Navbar
