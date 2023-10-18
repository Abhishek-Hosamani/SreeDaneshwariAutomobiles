import React from 'react'
import { Icon } from '@iconify/react';
export const Header = () => {
    return (
        <div className=''>
            <div className='flex flex-row  justify-around my-[1rem]'>
                <div className='w-10/12 sm:w-9/12 flex flex-row content-center content-center justify-between gap-x-[0.25rem] '>
                    <div className=' text-sm sm:text-xl font-semibold  flex-wrap '>Sree Daneshwari Automobiles</div>
                    <div className='flex flex-row content-center items-center content-center gap-x-[0.2rem] '>
                        <Icon icon="gg:search" color="#0070cd" width="25" height="25" className='w-[30px] h-[15] sm:w-[50px] sm:h-[30px] ' />
                        <Icon icon="fluent:cart-16-regular" color="#0070cd" width="25" height="25" className='w-[30px] h-[18] sm:w-[50px] sm:h-[30px] ' />
                        <Icon icon="gg:profile" color="#0070cd" width="25" height="25" className='w-[30px] h-[15] sm:w-[50px] sm:h-[30px] ' />
                    </div>
                </div>
            </div>
        </div >
    )
}
