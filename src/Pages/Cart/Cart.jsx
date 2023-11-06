import React from 'react'
import Header from '../../Components/Header'
import TrolleyImg from '../../Assets/trolley Spares.png'
import Tubeimg from '../../Assets/TubelessTyre.png'
import Footer from '../../Components/Footer'
import CartCard from '../../Components/CartCard'
import Emptycart from '../../Assets/emptycart.png'
const Cart = () => {

    const Categories = [
        {
            Name: "Trolley Spares",
            Img: TrolleyImg,

        },
        {
            Name: "Tubeless Tyres",
            Img: Tubeimg,
        }
    ]


    return (
        <div className=''>
            <Header />
            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center sm:mx-20 '>
                {
                    Categories.length === 0 ? <div className='flex flex-col align-center'><img src={Emptycart} className='mix-blend-multiply mx-auto' alt='EmptyCart' /><span className='text-center mt-5 text-base font-semibold'>Oops! Your Cart is Empty</span></div> :
                        Categories.map(cat => {
                            return (
                                <CartCard Name={cat.Name} image={cat.Img} />
                            )
                        })
                }
            </div>
            <div className='mx-auto mt-5 flex flex-row justify-center'>
                <button className='px-5 py-2 text-[#FFF] bg-[#0286d0] text-base font-semibold sm:text-1xl rounded'>Place Order</button>
            </div>
            <Footer />

        </div>
    )
}

export default Cart;