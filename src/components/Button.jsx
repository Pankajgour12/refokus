import { MoveRight } from 'lucide-react'
import React from 'react'

const Button = ({title = "Get Started"}) => {
  return (
    <button className='flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white hover:bg-gray-300 text-black rounded-full font-medium whitespace-nowrap shrink-0'>
      
      <span className='hidden sm:inline'>{title} </span>

      <MoveRight size={16} />

    </button>
  )
}

export default Button