import React from 'react'

function ArticleListByCategory({articles , category}) {
  return (
    <div>
        <h1>showing news for category <i>{category}</i></h1>
        {
            articles.map(item => (
                <div key={item.id}>
                    {item.title}
                </div>
            ))
        }
    </div>
  )
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
    const {params ,req , res ,query} = context;
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie' , ['name=mustafa'])
    const {category} = params;

    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();

    console.log('pre rendering news articles for category')

    return {
        props:{
            articles:data,
            category
        }
    }

}