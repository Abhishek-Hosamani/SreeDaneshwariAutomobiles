import React from 'react'

const CategoryCard = (props) => {

    return (
        <>  <div className='py-2'>
            <div className='pd-2 sm:m-4 sm:p-4 bg-[#FFF] w-28 sm:w-48  h-44 sm:h-64 flex flex-col jusitfy-around rounded-[5.602px] '>
                <div className='overflow-hidden object-cover'>
                    <img src={props.image} alt="Not Found" className='w-[100] h-[100] sm:w-[120] sm:h-[175]' />
                </div>
                <div className='py-2.5 p-2'>
                    <h3 className='font-medium text-xs sm:font-medium sm:text-lg'>{props.Name}</h3>
                </div>
            </div>

        </div>
        </>
    )
}

export default CategoryCard;