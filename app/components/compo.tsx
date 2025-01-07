import React from 'react'
import Image from 'next/image'
import { MainCarousel } from './main-carousal'
function Compo() {
  return (
    <main className="flex   ">
      <div className="flex-shrink-0 ">
      <div className="px-6 py-16 hidden sm:block" >
            <Image src="/ae.png" width={100} height={100} alt="Aesop logo" className='flex w-[10rem] h-[6rem] ' />
          </div>
      </div>
      <div className="flex flex-row">
        <MainCarousel />
      </div>
    </main>
  )
}

export default Compo
