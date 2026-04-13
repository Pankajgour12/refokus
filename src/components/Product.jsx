
import Button from "./Button"

const Product = ({data,mover , count}) => {
  return (
    <div className="w-full py-20 h-[23rem] text-white">
        <div onMouseEnter={()=>{mover(count)}} className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-6xl capitalize font-medium">{data.title}</h1>
            <div className="dets w-1/3 flex flex-col justify-between items-start gap-10">
                <p>{data.desc} </p>
                <div className="flex items-center gap-5">
                {data.live && <Button/>}
                {data.case && <Button title="Case Study" />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product