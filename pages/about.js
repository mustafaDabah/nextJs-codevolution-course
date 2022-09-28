import Head from 'next/head'
import React from 'react'
import Footer from '@/layout/Footer'

function about() {
  return (
    <>
        <Head>
            <title>About codevolution</title>
            <meta name='description' content='hello world ' />
        </Head>
        <div>about23</div>
    </>
  )
}

export default about

about.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}