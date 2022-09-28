import React from 'react'

function News({data}) {
  return (
   <>
      <h1>{data}</h1>
      <h2>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</h2>
   </>
  )
}

export default News;

export async function getStaticProps(context) {
  console.log('running getStaticProps' , context.previewData)

    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD

    console.log(user)

    return {
        props:{
            data:context.preview ? 'list of draft articles' :  'list of published articles'
        }
    }
}