import { useRouter } from "next/router";
import ArticleItem from "../../Components/ArticleItem";

function SinglePost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export default SinglePost;

export async function getStaticPaths() {
  const res = await fetch(
    "http://localhost:4000/posts"
  );
  const articles = await res.json();

  // const paths = articles.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths:[{params:{postId :'1'}}],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  console.log('generating / render productlist')
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/posts/${params.postId}`
  );
  const data = await response.json();

  console.log(`generating page for id  ${params.postId}`);

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
    revalidate:10
  };
}
// fallback true 
/*
import { useRouter } from "next/router";
import ArticleItem from "../../Components/ArticleItem";

function SinglePost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export default SinglePost;

export async function getStaticPaths() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const articles = await res.json();

  const paths = articles.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  console.log(`generating page for id  ${params.postId}`);

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
*/