import React from 'react'
import { Header } from '../../Components/Header'
import TrolleyImg from '../../Assets/trolley Spares.png'
import Tubeimg from '../../Assets/TubelessTyre.png'
import Footer from '../../Components/Footer'
import ProductCard from '../../Components/ProductCard'

export const Product = () => {
    const Name="Trolley Spares";
    const Img= TrolleyImg;

    return (
        <div className=''>
            <Header />
            <div className='sm:mx-20 flex flex-row justify-around flex-wrap items-center '>
                {
                    <ProductCard Name={Name} image={Img} />
                }
            </div>
             
            <Footer />

        </div>
    )
}