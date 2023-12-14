import React from 'react'

const CategoryCard = (props) => {

    return (
        <>  <div className='py-2'>
            <div className='sm:m-4 sm:p-4 bg-[#FFF] w-28 sm:w-48  h-38 sm:h-64 flex flex-col jusitfy-around rounded-[5.602px] '>
                <div className='overflow-hidden '>
                    <img src={props.image} alt="Not Found" className='w-[100] h-[100] sm:w-[120] sm:h-[175] object-cover mix-blend-multiply' />
                </div>
                <div className='py-2.5 p-2'>
                    <h3 className='font-medium text-xs sm:font-medium sm:text-base'>{props.Name}</h3>
                </div>
            </div>

        </div>
        </>
    )
}

export default CategoryCard;