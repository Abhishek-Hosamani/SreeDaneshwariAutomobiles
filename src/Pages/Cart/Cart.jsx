import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import CartCard from '../../Components/CartCard'
import Emptycart from '../../Assets/emptycart.png'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const handlePlaceOrder = () => {
        if (cartItems.length == 0) {
            window.alert('Cart is Empty')
        } else {
            const isConfirmed = window.confirm('Are you sure you want to place this order?');

            if (isConfirmed && cartItems.length > 0) {
                const message = encodeURIComponent(`Order details:%0A${getFormattedCartDetails()}`);
                const whatsappLink = `https://wa.me/=91 8710074699?text=${message}`;
                window.open(whatsappLink, '_blank');
            }
        }

    };


    const getFormattedCartDetails = () => {

        return cartItems.map(item => `${item.Name}: ${item.qty}`).join('%0A');
    };

    return (
        <div className=''>
            <Header />
            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center sm:mx-20 '>
                {
                    cartItems.length === 0 ? <div className='flex flex-col align-center'><img src={Emptycart} className='mix-blend-multiply mx-auto' alt='EmptyCart' /><span className='text-center mt-5 text-base font-semibold'>Oops! Your Cart is Empty</span></div> :
                        cartItems.map(cat => {
                            return (
                                <CartCard Name={cat.Name} image={cat.image} qty={cat.qty} />
                            )
                        })
                }
            </div>
            <div className='mx-auto mt-5 flex flex-row justify-center'>
                <button onClick={handlePlaceOrder} className='px-5 py-2 text-[#FFF] bg-[#0286d0] text-base font-semibold sm:text-1xl rounded'>Place Order</button>
            </div>
            <Footer />

        </div>
    )
}

export default Cart;