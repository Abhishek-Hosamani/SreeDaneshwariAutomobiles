import React from 'react'
import Header from '../../Components/Header'
import CategoryCard from '../../Components/CategoryCard'
import Carousel from '../../Components/Carousel'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import { CategoriesList } from './ListCategories'
const Home = () => {


    return (
        <div className=''>
            <Header />

            <Carousel />

            <h2 className='text-center mt-4 font-semibold text-base sm:text-2xl'>Shop by Categories</h2>

            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center mx-28 '>
                {
                    CategoriesList.map(cat => {
                        return (
                            <Link to={`category/${cat.Name}`}><CategoryCard Name={cat.Name} image={cat.Img} /></Link>
                        )
                    })
                }
            </div>
            <h2 className='text-center font-semibold text-xs sm:text-base hidden sm:block'>Products</h2>

            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center sm:mx-20 hidden sm:flex'>
                {
                    CategoriesList.map(cat => {
                        return (
                            <CategoryCard Name={cat.Name} image={cat.Img} />
                        )
                    })
                }
            </div>


            <Footer />

        </div>
    )
}

export default Home;