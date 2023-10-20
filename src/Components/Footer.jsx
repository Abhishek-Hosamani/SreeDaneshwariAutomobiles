import React from 'react'
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className='bg-[#F1F1F1] text-[#B7B7B7] h-auto'>

            <h1 className='text-center text-base sm:text-xl font-semibold my-4 p-4 sm:my-8 sm:p-6'>Sree Daneshwari Automobiles</h1>


            <div>
                <h4 className='text-center text-xs sm:text-base font-medium underline'>About Us</h4>
                <div className='my-8 sm:mt-16 pb-8 flex flex-col sm:flex sm:flex-row justify-around items-center content-center align-middle leading-8'>
                    <div >
                        <h4 className='text-[#0286D0] font-medium align-middle text-center'>Contact Us <span><Icon className="inline" icon="bxs:contact" color="#0286d0" height="20" /></span></h4>
                        <p> Nandish Koti  <a href='tel:+918710074699'>+91 8710074699</a></p>
                        <p> Telephone <a href='tel:0836-2252651'>0836-2252651</a></p>
                        <p> Haveri branch <a href='tel:9036511497'>9036511497</a></p>
                        <p>Email <a href='mailto:vbkoti@gmail.com'>vbkoti@gmail.com</a></p>
                    </div>
                    <div>
                        <h4 className='text-[#0286D0] font-medium align-middle text-center'>Address <span ><Icon className="inline" icon="entypo:address" color="#0286d0" /></span></h4>
                        <p>Shinde Complex, Neeligin Road</p>
                        <p> Hubli - Karnataka 580029</p>
                    </div>


                </div>
            </div>



        </div>
    )
}

export default Footer