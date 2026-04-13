import { MoveRightIcon } from "lucide-react"

const Card = ({width , start , para , hover}) => {
  return (
    <div className={`${width} ${hover} hover:p-6 transition-all  min-h-120 flex flex-col justify-between bg-stone-800 p-5 rounded-xl`}>
        <div className="w-full">
            <div className='w-full flex items-center justify-between'>
            <h1 className=""> {start? "Get In Touch":" Up Next: News"}  </h1>
            <MoveRightIcon size={12}/>

        </div>
        <h1 className="text-3xl font-medium mt-5">{start?"Let's get to it, together.":"Insights and behind the scenes"}</h1>
        </div>



        <div className="down w-full mt-60">
           {
            start && (
                <>
                 <h1 className="text-6xl font-semibold tracking-tight leading-none">Start a project</h1>
            <button className="rounded-full mt-5 py-2 px-5 border hover:bg-stone-800 border-zinc-50">Contact Us </button>
             </>
            ) 
            
        }
        {
            para &&(
        <p className="text-sm text-zinc-400 font-normal">Explore what drives our team.</p>

            )
        }
        </div>
    </div>
  )
}

export default Card