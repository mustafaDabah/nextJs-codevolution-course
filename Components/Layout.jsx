// import React from 'react'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Nav from './Nav'

function Layout({children}) {
  return (
   <>
     <Nav />
     <div className={styles.container}>
        <main className={styles.main}>
           <Header />
           {children}
        </main>
        Layout
    </div>
   </>
  )
}

export default Layout