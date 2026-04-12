import Button from "./Button"

const Product = () => {
  return (
    <div className="w-full py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-6xl capitalize font-semibold">arqitel</h1>
            <div className="dets w-1/3 flex flex-col justify-between items-start gap-10">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quod ab veritatis, autem aliquam neque beatae ad? Beatae, nam aperiam.</p>
                <Button/>
            </div>
        </div>
    </div>
  )
}

export default Product