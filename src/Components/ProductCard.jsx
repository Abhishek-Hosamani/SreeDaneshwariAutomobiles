import React from "react";

const ProductCard = (props) => {
  console.log(props.image);
  return (
    <>
      <div className="w-90 h-[100] sm:w-[135] sm:h-[175]">
        <img src={props.image} alt="Image Not Found" />
      </div>

      <div className=" w-full h-25  m-5 ">
        <h1 className="font-bold  text-lg sm:font-bold sm:text-base">
          {props.Name}
        </h1>
        <p className=" mt-3 overflow-hidden font-small text-clip text-sm sm:font-small sm:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptate
          placeat officia, rerum, vero ducimus minus fugit rem recusandae quae
          earum laborum nam molestias eveniet aliquam iusto obcaecati ab
          exercitationem blanditiis eius possimus sit! Quisquam sit consequuntur
          impedit eaque, adipisci harum corporis minus velit praesentium rerum?
          Quaerat ipsum odit nemo!
        </p>
      </div>

      <div className=" w-full h-25  bg-white">
        <h3 className=" text-gray-600  font-semibold m-5"> Quantity : </h3>

        <div class="flex flex-row m-5 h-14 w-full relative">
          <button class="bg-blue-600 hover:bg-blue-400 text-center text-white font-semibold mb-1 p-1 rounded text-s  w-40">
            Add to Cart
          </button>
          <button
            data-action="decrement"
            class=" border-2 ml-7 mb-1 bg-white w-9 text-blue-600 border-blue-400 border-solid hover:text-gray-700 hover:bg-gray-400 rounded-l cursor-pointer "
          >
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            class="outline-none focus:outline-none text-center w-12 mb-1 border-solid border-2 bg-white font-semibold text-md border-blue-400 hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-blue-700 "
            name="custom-input-number"
            value="1"
          ></input>
          <button
            data-action="increment"
            class=" border-2 bg-white w-9 mb-1 text-blue-600 border-solid hover:text-gray-700 border-blue-400 hover:bg-gray-400 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
