import React from "react";
import ArticleList from "../../Components/ArticleList";

function PostsList({articles}) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export default PostsList;
// 
export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:4000/posts"
  );
  const articles = await res.json();

  console.log(articles);

  return {
    props: {
      articles,
    },
    revalidate:30
  };
};
