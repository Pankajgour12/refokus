import { motion } from "motion/react";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
  const products = [
    {
      title: "arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: false,
    },
    {
      title: "Rainfall",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quod ab veritatis, autem aliquam neque beatae ad? Beatae, nam aperiam",
      live: true,
      case: true,
    },
  ];

  const [pos ,setPos] = useState(0)

  const mover = (val)=>{
    setPos(val * 23)
  }


  return (
    <div className="relative mt-32 ">
      {products.map((item,idx)=>(
        <Product key={idx} count={idx} data={item} mover={mover} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none  ">

        <motion.div
        initial={{y:pos , x: "-50%"}}
        animate ={{y: pos + `rem`}}
         className="window absolute w-lg h-[23rem]  left-[44%] overflow-hidden">
          <div className="w-full h-full bg-sky-300"></div>
          <div className="w-full h-full bg-sky-400"></div>
          <div className="w-full h-full bg-sky-300"></div>
          <div className="w-full h-full bg-sky-800"></div>
          <div className="w-full h-full bg-sky-300"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
