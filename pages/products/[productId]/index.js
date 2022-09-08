import { useRouter } from "next/router"

function ProductDetails() {
    const router = useRouter();
    console.log(router)

  return (
    <div>productDetails {router.query.productId} </div>
  )
}

export default ProductDetails