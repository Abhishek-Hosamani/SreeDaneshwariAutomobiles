import React, { useState } from "react";
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
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
  const dispatch = useDispatch();

  const handleAddToCart = () => {

    const cartitem = {
      Name: props.Name,
      image: props.image,
      qty: quantity,
    }
    dispatch(addToCart(cartitem));
    window.alert('Item Added to Cart !!')
  };
  return (
    <>

      <div className="flex flex-row flex-wrap">
        <div className="px-1 py-2 mt-2 sm:m-2 sm:p-3 bg-[#FFF]  h-auto flex flex-col jusitfy-around rounded-[5.602px] ">
          <div className="mx-auto overflow-hidden">
            <img className="w-32 h-28 sm:w-48 sm:h-48 rounded-sm object-cover" src={props.image} alt="Image Not Found" />
          </div>
          <div className="py-2.5 p-2">
            <h2 className="w-28 sm:w-48 font-semibold text-xs sm:font-medium sm:text-sm">
              {props.Name}
            </h2>
          </div>
          {/* <div className="py-2 p-2 w-48 overflow-hidden ">
            <p className="font-small text-clip text-sm sm:font-small sm:text-base">
              {props.desc}
            </p>
          </div> */}

          <div className=" flex items-center justify-center content-center py-2 p-1">
            <div className="font-semibold text-blue-600 text-xs sm:font-medium sm:text-sm">
              Qty:
            </div>
            <div className="flex flex-row h-8  mx-2">
              <button onClick={decrement} disabled={quantity === 1} className="border-2  mb-1 bg-white w-7 text-blue-600 border-blue-400 border-solid hover:text-gray-700 hover:bg-gray-400 rounded-l cursor-pointer">
                {quantity === 1 ? (
                  <Icon icon="octicon:trash-24" color="#0286d0" onClick={clearQuantity} className="w-4 h-3 sm:w-6 sm:h-5 mx-auto" />
                ) : (
                  '-'
                )}
              </button>
              <p className="outline-none px-3 focus:outline-none text-center w-10 mb-1 border-solid border-2 font-semibold text-xs sm:text-sm border-blue-400 hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-blue-700">{quantity}</p>
              <button onClick={increment} className="border-2 bg-white w-7  mb-1 text-blue-600 border-solid border-blue-400 hover:bg-gray-400 rounded-r text-center flex justify-center ">+</button>
            </div>
          </div>

          <div className="flex flex-col items-center mx-auto ">

            <button onClick={handleAddToCart} className="bg-blue-600 hover:bg-blue-400 text-center text-white font-semibold px-4 py-2 rounded text-xs w-auto">
              Add to Cart
            </button>

          </div>


        </div>
      </div>
    </>
  );
};

export default ItemCard;
