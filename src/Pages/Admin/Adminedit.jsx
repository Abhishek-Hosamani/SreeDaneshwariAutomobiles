import React from 'react'
import { Icon } from '@iconify/react';

const Adminedit = () => {

    const categoryedit = [
        {
            Categoryname: "Tubless tyres",
            Products: [
                {
                    Productname: "prod1",
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                },
                {
                    Productname: "prod1",
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                },
                {
                    Productname: "prod1",
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                },
            ]
        },
        {
            Categoryname: "Lubricants",
            Products: [
                {
                    Productname: "prod1",
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                },
                {
                    Productname: "tire tubevalues",
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                },
                {
                    Productname: "prod1",
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                },
            ]
        },
        {
            Categoryname: "Machine Tools",
            Products: [
                {
                    Productname: "prod1",
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                },
                {
                    Productname: "prod1",
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                },
                {
                    Productname: "prod1",
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                },
            ]
        },
    ]
    return (
        <>

            <div className='w-3/4 mx-auto flex flex-col jusitfy-center'>
                {categoryedit.map((e) => {
                    return (

                        <div className='p-4 mx-2 '>
                            <h1 className='font-bold text-xl underline underline-offset-4'>{e.Categoryname}</h1>
                            <div className='border-2 border-[#0286D0] rounded-md mt-4 bg-[#F2F2F2]'>
                                {e.Products.map((p) => {
                                    return (

                                        <div className='flex flex-row jusitfy-between sm:p-4 p-1 '>
                                            <div className='mx-auto w-1/2'>
                                                <p className='font-medium text-xs sm:text-base overflow-hidden'>{p.Productname}</p>
                                            </div>

                                            <div className='flex flex-row justify-between mx-auto gap-x-4 align-middle'>
                                                <div><a href='/'><Icon icon="iconamoon:edit-duotone" color="#0286d0" className='w-5 h-5 sm:w-8 sm:h-8' /></a></div>
                                                <div><a href='/'><Icon icon="ic:baseline-delete" color="#0286d0" className='w-5 h-5 sm:w-8 sm:h-8' /></a></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    );
                })}
            </div>

        </>
    )
}

export default Adminedit