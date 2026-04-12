import React from 'react'

const Stripe = ({val}) => {

     

  return (
    <div className='w-[16.66%] px-4 py-5 border-t border-r  border-b flex justify-between'>
      <img src={val.url} alt="img" />
      <span className='text-green-500 font-semibold'>{val.number}</span>
      

    </div>
  )
}

export default Stripe;