import React, { useState } from 'react'
import { Icon } from '@iconify/react';
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSearchBar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=''>
            <div className='flex flex-row  justify-around my-[1rem]'>
                <div className='w-10/12 sm:w-9/12 flex flex-row content-center content-center justify-between gap-x-[0.25rem] '>
                    <div className=' text-sm sm:text-xl font-semibold  flex-wrap '>Sree Daneshwari Automobiles</div>
                    <div className='flex flex-row content-center items-center content-center gap-x-[0.2rem] '>
                        <Icon onClick={toggleSearchBar} icon="gg:search" color="#0070cd" width="25" height="25" className='w-[30px] h-[15] sm:w-[50px] sm:h-[30px] ' />
                        <Icon icon="fluent:cart-16-regular" color="#0070cd" width="25" height="25" className='w-[30px] h-[18] sm:w-[50px] sm:h-[30px] ' />
                        <Icon icon="gg:profile" color="#0070cd" width="25" height="25" className='w-[30px] h-[15] sm:w-[50px] sm:h-[30px] ' />
                    </div>
                </div>
            </div>
            <div >
                {isOpen && (
                    <div className="m-5 rounded-sm text-center ">
                        <form action="">

                            <input
                                type="text"
                                placeholder="Search..."
                                className="border rounded px-3 py-1 text-sm sm:text-base"
                                name='Itemsearched'

                            />
                            <button className='text-[#FFF] bg-[#0070cd] px-2 py-1 mx-5 rounded-sm text-sm sm:text-base'>Search</button>
                        </form>
                    </div>
                )}
            </div>
        </div >
    )
}
