
const Stripe = ({ val, isLast, isFirst }) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-5 border-t border-b
      ${!isLast ? 'border-r' : ''} 
      ${!isFirst ? 'border-l' : ''}`}
    >
      
      <div className="w-32 flex items-center">
        <img
          src={val.url}
          alt="logo"
          className="h-8 object-contain"
        />
      </div>

      <span className='font-semibold text-lg'>
        {val.number}
      </span>

    </div>
  )
}

export default Stripe