import React from 'react';
import { redirect } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"
import Router from 'next/router';



function Profile() {
    const x = useSession();
    const isAuthenticated = x?.status;

    if (isAuthenticated==="unauthenticated"){
        Router.push('/login')  ;  
    }

    const LogOut = () => {
        signOut({redirect: false});
    };

    return (
        <>
        <h1>This is profile page</h1>
        <button onClick={LogOut}>Log Out</button>


        </>
    )
}


export default Profile