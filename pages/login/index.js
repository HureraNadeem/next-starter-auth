"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';

function Login() {
    const x = useSession();
    const { data } = x;

    const emailFromBackend = data?.user?.email;
    const isAuthenticated = x?.status;

    console.log(data);


    const dummyLoginCredentials = { email: "abc@gmail.com", password: "abc123" }

    const logIn = () => {
        signIn("credentials",
            {
                redirect: false,
                email: dummyLoginCredentials["email"],
                password: dummyLoginCredentials.password
            });
    };

    const LogOut = (e) => {
        e.preventDefault();
        signOut({ redirect: false });
    };


    return (
        <>
            {
                isAuthenticated == "unauthenticated" && (
                    <div>
                        <h1>Youre logged out!</h1>
                        <button onClick={logIn}>Login</button>
                    </div>

                )
            }
            {
                isAuthenticated == "authenticated" && (
                    <div>
                        <h1>already logged in</h1>
                        <button onClick={LogOut}>Log Out</button>
                        <br />
                        <Link href="/profile"><button>Go To Profile</button></Link>
                    </div>

                )
            }


        </>
    )
}

export default Login