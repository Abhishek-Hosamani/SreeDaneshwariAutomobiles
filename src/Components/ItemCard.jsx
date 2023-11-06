import React, { useState } from "react";
import { Icon } from '@iconify/react';

const ItemCard = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const clearQuantity = () => {
    setQuantity(0); // You can set it to 1 if you want to reset it to 1 instead
  };
  return (
    <>


      <div className="p-4 mt-2 sm:m-4 sm:p-4 bg-[#FFF]  h-auto flex flex-col jusitfy-around rounded-[5.602px] ">
        <div className=" w-[80] h-[80] sm:w-[135] sm:h-[175]">
          <img src={props.image} alt="Image Not Found" />
        </div>
        <div className="py-2.5 p-2">
          <h2 className="font-semibold text-sm sm:font-medium sm:text-base">
            {props.Name}
          </h2>
        </div>
        <div className="py-2 p-2 ">
          <p className="font-small text-clip text-sm sm:font-small sm:text-base">
            Lorem ipsum dolor sit
          </p>
        </div>

        {/* <div className="py-3 p-2">
            <h4 className="font-semibold text-blue-600 text-sm sm:font-medium sm:text-base">
              Quantity:
            </h4>
          </div> */}

        <div class="flex flex-row h-10 mx-auto ">

          <button onClick={decrement} disabled={quantity === 1} className="border-2  mb-1 bg-white w-7 text-blue-600 border-blue-400 border-solid hover:text-gray-700 hover:bg-gray-400 rounded-l cursor-pointer">
            {quantity === 1 ? (
              <Icon icon="octicon:trash-24" color="#0286d0" onClick={clearQuantity} className="w-6 h-5" />
            ) : (
              '-'
            )}
          </button>
          <p className="outline-none px-3 focus:outline-none text-center w-10 mb-1 border-solid border-2 font-semibold text-md border-blue-400 hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-blue-700">{quantity}</p>
          <button onClick={increment} className="border-2 bg-white w-7 mb-1 text-blue-600 border-solid hover:text-gray-700 border-blue-400 hover:bg-gray-400 rounded-r cursor-pointer">+</button>

          <button class="bg-blue-600 hover:bg-blue-400 text-center text-white font-semibold ml-2 mb-1 p-1.5 px-5 rounded text-xs  w-25">
            Add to Cart
          </button>

        </div>


      </div>
    </>
  );
};

export default ItemCard;
