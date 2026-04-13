import { motion } from "framer-motion";
const Marquee = ({ images, direction }) => {
  return (
    <div className=" flex w-full scrollbar-hide select-none whitespace-nowrap overflow-hidden ">
      <motion.div
  initial={{ x: direction === "left" ? "0" : "-100%" }}
  animate={{ x: direction === "left" ? "-100%" : "0" }}
  transition={{
    ease: "linear",
    duration: 10, 
    repeat: Infinity,
  }}
  className="flex shrink-0 gap-15 py-10 pr-20"
>
        {images.map((img, index) => (
          <img
            src={img.url}
            alt="logo"
            key={index}
            className="w-[7vw] shrink-0"
          />
        ))}
      </motion.div>


       <motion.div
  initial={{ x: direction === "left" ? "0" : "-100%" }}
  animate={{ x: direction === "left" ? "-100%" : "0" }}
  transition={{
    ease: "linear",
    duration: 10, 
    repeat: Infinity,
  }}
  className="flex shrink-0 gap-15 py-10 pr-20"
>
        {images.map((img, index) => (
          <img
            src={img.url}
            alt="logo"
            key={index}
            className="w-[7vw] shrink-0"
          />
        ))}
      </motion.div>
      
    </div>
  );
};

export default Marquee;
