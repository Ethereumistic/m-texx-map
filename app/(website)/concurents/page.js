import React from 'react'
import Link from 'next/link'

const Concurents = () => {
  return (
    <div>
        
        <div className='text-4xl font-russo text-dgreen dark:text-white text-center'>Конкуренция</div>
        <div className='flex space-x-8 justify-center my-8'>
        <Link href="/concurents/greenway"><h4 className='font-osw text-xl text-center dark:text-lgreen'>Green Way</h4></Link>
        <Link href="/concurents/yellowchurch"><h4 className='font-osw text-xl text-center dark:text-lgreen'>Yellow Church</h4></Link>
        </div>
    </div>
  )
}

export default Concurents