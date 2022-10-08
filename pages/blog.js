import { getSession } from 'next-auth/react'
import React from 'react'

function blog({data}) {
  return (
    <div>blog - {data}</div>
  )
}

export default blog

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if(!session) {
    return {
      redirect: {
        destination:'./api/auth/signin?callbackUrl=http://localhost:3000/blog',
        permanent:false
      }
    }
  }
  console.log(session)
  return {
    props:{
      data:session ? 'list of 100 data':'list of free blogs',
      session
    }
  }

}