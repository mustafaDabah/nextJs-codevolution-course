import React from 'react'

function NewsArticleList({articles}) {
  return (
    <>
        <div>News Article List</div>
        {articles.map((article) => (
            <h4 key={article.id}>{article.id} -- {article.title}</h4>
        ))}
    </>
  )
}

export default NewsArticleList;

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news');
    const data = await response.json();

    console.log('article list')

    return {
        props:{
            articles:data
        }
    }
}