import React from 'react'
import { comments } from '../../data/comments';

function SingleComment({comment}) {
  return (
    <div>
        <h1>id - {comment.id} - title - {comment.title}</h1>
    </div>
  )
}

export default SingleComment;

export async function getStaticPaths() {
    // const response = await fetch('/api/comments')
    // const date = await response.json();

    return {
        paths:[{params:{commentId:'1'}}],
        fallback:true
    }
}

export async function getStaticProps(context) {
    const { params } = context;

    const comment = comments.find((comment) => comment.id === parseInt(params.commentId));

    return {
        props:{
            comment
        }
    }
}