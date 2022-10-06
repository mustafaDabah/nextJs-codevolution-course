import { useSession } from 'next-auth/react'
import React from 'react'

function Home() {
  const { data: session, status } = useSession();
  console.log(session , status)
  return (
    <div>Home</div>
  )
}

export default Home