import React from 'react'

const CategoryCard = (props) => {
    console.log(props.image)
    return (
        <>  <div className='py-2'>
            <div className='pd-2 sm:m-4 sm:p-4 bg-[#FFF]  h-auto flex flex-col jusitfy-around rounded-[5.602px] '>
                <div className='w-[80] h-[80] sm:w-[135] sm:h-[175]'>
                    <img src={props.image} alt="Image Not Found" />
                </div>
                <div className='py-2.5 p-2'>
                    <h3 className='font-medium text-sm sm:font-medium sm:text-base'>{props.Name}</h3>
                </div>
            </div>

        </div>
        </>
    )
}

export default CategoryCard