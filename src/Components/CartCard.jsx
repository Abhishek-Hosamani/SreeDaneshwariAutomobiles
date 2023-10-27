import React from "react";
const CartCard = (props) => {
  console.log(props.image);
  return (
    <>
      {" "}
      <div className="py-2">
        <div className=" sm:w-[300] sm:h-[100]  sm:m-4 sm:p-4 bg-[#FFF]  h-auto flex flex-row  rounded-[5.602px] ">
        <div className=" p-2" >
        <img src={props.image} alt="Image Not Found" className='border-black-600 border-solid border-2 w-28 h-32 sm:w-64 sm:h-56 object-cover mix-blend-multiply' />
      </div>
      
      <div className=" flex flex-col  ">
      <div className=" flex flex-row  ">
          <div className="ml-4 pt-3 py-2.5 p-2 w-32 h-12">
            <h2 className="font-semibold text-g sm:font-medium sm:text-base">
              {props.Name}
            </h2>
          </div>
          
          <button class=" ml-16 h-12 i items-center  py-2 bg-white hover:bg-white text-gray-400 text-sm font-medium rounded-md">
	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	</svg>
  </button>
  </div>

  <div className="py-2 p-2 ml-4 ">
            <p className="font-small text-clip text-sm sm:font-small sm:text-base">
               Lorem ipsum dolor sit 
            </p>
          </div>

          <div class="flex flex-row h-10 w-full relative ml-2 mt-2">
            <button data-action="decrement" class=" border-2 ml-4 mb-1 bg-white w-7 text-blue-600 border-blue-400 border-solid hover:text-gray-700 hover:bg-gray-400 rounded-l cursor-pointer ">
        <span class="m-auto text-2xl font-thin">−</span>
      </button>
      <input type="number" class="outline-none focus:outline-none text-center w-10 mb-1 border-solid border-2 bg-white font-semibold text-md border-blue-400 hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-blue-700 " name="custom-input-number" value="1"></input>
      <button data-action="increment" class=" border-2 bg-white w-7 mb-1 text-blue-600 border-solid hover:text-gray-700 border-blue-400 hover:bg-gray-400 rounded-r cursor-pointer">
      <span class="m-auto text-2xl font-thin">+</span>
    </button>
  
    </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
