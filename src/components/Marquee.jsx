
const Marquee = ({images}) => {
  return (
    <div className=" flex w-full py-8 gap-12  scrollbar-hide select-none whitespace-nowrap overflow-hidden">
        {images.map((img, index)=>(
            <img src={img.url} alt="logo" key={index} className="w-[7vw] shrink-0" />
        ))}
        {images.map((img, index)=>(
            <img src={img.url} alt="logo" key={index} className="w-[7vw] shrink-0" />
        ))}
        
                
    </div>
  )
}

export default Marquee