import React from 'react'
import Image from 'next/image'

function Front() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 via-cyan-700 to-cyan-900 shadow-md w-screen h-screen grid md:grid-cols-2'>
        <div className='flex justify-center items-center'>
        <div>
        <div class="py-10 bg-cover flex justify-center items-center bg-no-repeat bg-fixed">
          <div class="container m-auto text-center px-6 opacity-100">
          <div class="p-4">
              <div class="flex rounded-lg pb-6 pt-10 p-8 flex-col bg-white bg-opacity-60 backdrop-blur-md drop-shadow-md">
            <h1 class="text-4xl font-bold mb-4 text-black opacity-100">Welcome to The Legendary Predictor!!</h1>
            <h3 class="text-xl mb-8 text-slate-700 opacity-100">To check your loan eligibility, go to DASHBOARD.</h3>
            </div>
            </div>
          </div>
        </div>
      </div>
            
        </div>
        <div className='flex justify-center items-center'>
            <Image alt='Main front image!' src="/images/robot.gif" height={500} width={500}></Image>
        </div>
    </div>
  )
}

export default Front