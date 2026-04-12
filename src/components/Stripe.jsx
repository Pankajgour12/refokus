
const Stripe = ({ val, isLast, isFirst }) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-5 border-t border-b 
      ${!isLast ? 'border-r' : ''} 
      ${!isFirst ? 'border-l' : ''}`}
    >
      <img
        src={val.url}
        alt="logo"
        className="h-8 object-contain"
      />

      <span className='font-semibold text-lg'>
        {val.number}
      </span>
    </div>
  )
}

export default Stripe