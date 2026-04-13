import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto  py-20 flex gap-2">
        <Card width={"basis-1/3"} start={false} para={true} />
        <Card width={"basis-2/3"} start={true} para={false}  hover={"hover:bg-violet-600"}/>

      </div>
    </div>
  );
};

export default Cards;
