import { MoveRight } from 'lucide-react'
import React from 'react'

const Button = () => {
  return (
    <div className='px-4 py-2 text-sm flex justify-between items-center gap-2 bg-white rounded-full text-black font-medium'>
        <span>Get Started</span>
      
          <MoveRight size={16}/>      
        
    </div>
  )
}

export default Button