import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ArticleList from '../Components/ArticleList'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  const router = useRouter();
  console.log(articles);

  const handleClick = () => {
    console.log('placing your order');
    router.push('./products')
  }

  return (
    <div>
     <ArticleList articles={articles} />
     <Link href='./blog'>
        blog page 
     </Link>
     <Link href='/products'>
        <a> products page</a>
     </Link>
     <button onClick={handleClick}>
       place order
     </button>
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  return {
    props:{
      articles
    }
  }
}
