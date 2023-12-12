import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { removeFromCart } from '../actions/cartActions'
import { useDispatch } from 'react-redux';
const CartCard = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    setQuantity(props.qty);
  }, [props.qty]);

  const clearQuantity = () => {
    setQuantity(0); // You can set it to 1 if you want to reset it to 1 instead
  };
  const dispatch = useDispatch()
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(props.Name));
  };
  return (
    <>
      {" "}
      <div className="py-2">
        <div className=" sm:w-[300] sm:h-[100]  sm:m-4 sm:p-4 bg-[#FFF]  h-auto flex flex-row  rounded-[5.602px] ">
          <div className=" p-2" >
            <img src={props.image} alt="Image Not Found" className='rounded-sm w-28 h-32 sm:w-64 sm:h-56 object-cover mix-blend-multiply' />
          </div>

          <div className=" flex flex-col justify-around  ">
            <div className=" flex flex-row  ">
              <div className="ml-2 pt-3 py-2.5 p-2 w-32 h-12">
                <h2 className="font-semibold text-xs sm:font-medium sm:text-sm">
                  {props.Name}
                </h2>
              </div>

              <button onClick={handleRemoveFromCart} className=" ml-16 h-12  items-center  py-2 bg-white hover:bg-white text-gray-400 text-sm font-medium rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>

              </button>
            </div>



            <div className="flex flex-row h-10 w-full relative ml-4 mt-2">
              <button onClick={decrement} disabled={quantity === 1} className="border-2  mb-1 bg-white w-7 text-blue-600 border-blue-400 border-solid hover:text-gray-700 hover:bg-gray-400 rounded-l cursor-pointer">
                {quantity === 1 ? (
                  <Icon icon="octicon:trash-24" color="#0286d0" onClick={clearQuantity} className="w-6 h-5" />
                ) : (
                  '-'
                )}
              </button>
              <p className="outline-none px-3 focus:outline-none text-center w-10 mb-1 border-solid border-2 font-semibold text-md border-blue-400 hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-blue-700">{quantity}</p>
              <button onClick={increment} className="border-2 bg-white w-7 mb-1 text-blue-600 border-solid hover:text-gray-700 border-blue-400 hover:bg-gray-400 rounded-r cursor-pointer">+</button>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
