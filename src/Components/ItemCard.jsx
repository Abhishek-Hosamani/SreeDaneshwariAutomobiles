import React from "react";

const ItemCard = (props) => {
  console.log(props.image);
  return (
    <>

      <div className="py-2">
        <div className="pd-2 sm:m-4 sm:p-4 bg-[#FFF]  h-auto flex flex-col jusitfy-around rounded-[5.602px] ">
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

          <div class="flex flex-row h-10 w-full relative">
            <button class="bg-blue-600 hover:bg-blue-400 text-center text-white font-semibold ml-2 mb-1 p-1.5 px-5 rounded text-xs  w-25">
              Add
            </button>
            <button data-action="decrement" class=" border-2 ml-4 mb-1 bg-white w-7 text-blue-600 border-blue-400 border-solid hover:text-gray-700 hover:bg-gray-400 rounded-l cursor-pointer ">
              <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <input type="number" class="outline-none focus:outline-none text-center w-10 mb-1 border-solid border-2 bg-white font-semibold text-md border-blue-400 hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-blue-700 " name="custom-input-number" value="1"></input>
            <button data-action="increment" class=" border-2 bg-white w-7 mb-1 text-blue-600 border-solid hover:text-gray-700 border-blue-400 hover:bg-gray-400 rounded-r cursor-pointer">
              <span class="m-auto text-2xl font-thin">+</span>
            </button>


            {/* <button data-action="decrement" class=" border-2 bg-white w-12 text-blue-600 border-blue-400 border-solid hover:text-gray-700 hover:bg-gray-400 rounded-l cursor-pointer ">
      <span class="m-auto text-2xl font-thin">−</span>
    </button>
    <input type="number" class="outline-none focus:outline-none text-center w-20 border-solid border-2 bg-white font-semibold text-md border-blue-400 hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-blue-700 " name="custom-input-number" value="1"></input>
  <button data-action="increment" class=" border-2 bg-white w-12 text-blue-600 border-solid hover:text-gray-700 border-blue-400 hover:bg-gray-400 rounded-r cursor-pointer">
    <span class="m-auto text-2xl font-thin">+</span>
  </button> */}
          </div>


        </div>
      </div>
    </>
  );
};

export default ItemCard;
