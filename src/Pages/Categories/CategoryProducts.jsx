import React from 'react'
import Header from '../../Components/Header'
import TrolleyImg from '../../Assets/trolley Spares.png'
import Tubeimg from '../../Assets/TubelessTyre.png'
import ItemCard from '../../Components/ItemCard'
import Footer from '../../Components/Footer'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Categories = () => {

    const Category = [
        {
            Name: "Trolley Spares",
            Img: TrolleyImg,
            catid: 1
        },
        {
            Name: "Tubeless Tyres",
            Img: Tubeimg,
            catid: 2
        },
        {
            Name: "Trolley Spares",
            Img: TrolleyImg,
            catid: 3
        },
        {
            Name: "Tubeless Tyres",
            Img: Tubeimg,
            catid: 4
        },
        {
            Name: "Trolley Spares",
            Img: TrolleyImg,
            catid: 5
        }

    ]
    const params = useParams();
    const categoryName = params.catName;

    return (
        <div className=''>
            <Header />

            <div className='' >
                <h1 className='text-xs sm:text-base text-[#0286D0] font-semibold  sm:ml-32 ml-8 my-2'>Home &gt;  {categoryName}</h1>
            </div>
            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center mx-auto '>
                {
                    Category.map(cat => {
                        return (
                            <>
                                <ItemCard Name={cat.Name} image={cat.Img} id={cat.id} />
                            </>
                        )
                    })
                }
            </div>

            <Footer />

        </div>
    )
}

export default Categories;