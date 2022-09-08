import { useRouter } from 'next/router'
import React from 'react'

function ReviewProduct() {
    const router = useRouter();
    const {productId , reviewId} = router.query

  return (
    <div>ReviewProduct productId {productId } reviewId {reviewId} </div>
  )
}

export default ReviewProduct