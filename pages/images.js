// import Image from 'next/image'
import React from 'react'
import img from '../public/2.png'

function images() {
  return (
    <div>
        {/* <Image src={img} placeholder='blur' blurDataURL='' alt='bb' width={200} height={200}  />
        {['1' , '1' , '1' , '1' ].map((path , index) => {
            return (
                <div key={index}>
                    <Image src={`/${path}.png`} alt='bb' width={200} height={200} />
                </div>
            )
        })} */}
    </div>
  )
}

export default images