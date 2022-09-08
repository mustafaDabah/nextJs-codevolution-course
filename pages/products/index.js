import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div>
        <h1>
          <Link href='/products/1'>product 1</Link>
        </h1>
        <h1>
          <Link href='/products/2'>product 2</Link>
        </h1>
        <h1>
          <Link href='/products/3' replace>
            <a>product 3</a>
          </Link>
        </h1>
    </div>
  )
}

export default index