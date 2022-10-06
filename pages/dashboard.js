import React, { useEffect } from 'react'
import {  useSession , getSession, signIn } from "next-auth/react";
import { useState } from 'react';

function Dashboard(){
    const [loading, setLoading] = useState(true)  

    useEffect(() => {
      const securePage = async() => {
        const session = await getSession();

        if(!session) {
          signIn();
        } else {
          setLoading(false)
        }
      }

      securePage()

    } , [])

    if(loading) {
      return <h2>loading...</h2>
    }

    return(
        <>
            <h1>Protected page</h1>
            <p>You can view Dashboard Page, because you are Signed In</p>
        </>
    )
}

export default Dashboard;
