import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header'
import Adminadd from './Adminadd'
import Adminedit from './Adminedit'
import { Routes, Route } from 'react-router-dom'
import './../Admin/Adminnav.css'
const Admin = () => {
    return (
        <>
            <Header />
            <nav className='w-10/12 sm:w-8/12 flex flex-row justify-around mx-auto  font-semibold my-6'>
                <NavLink to='/'><button className='p-2 '><svg className='inline align-middle w-4 h-4 sm:w-8 sm:h-8 text-xs sm:text-base' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M11.7188 1.46484L21.875 6.54297L21.875 19.2383L11.7187 24.3042L1.5625 19.2383L1.5625 6.54297L11.7188 1.46484ZM19.3481 7.03125L11.7188 3.22266L8.77686 4.6875L16.3574 8.52051L19.3481 7.03125ZM11.7187 10.8398L14.624 9.39941L7.03125 5.56641L4.08936 7.03125L11.7187 10.8398ZM3.125 8.30078L3.125 18.2617L10.9375 22.168V12.207L3.125 8.30078ZM12.5 22.168L20.3125 18.2617L20.3125 8.30078L12.5 12.207V22.168Z" fill="#666666" />
                </svg> Add products</button></NavLink>
                <NavLink to='edit'><button className='p-2'><svg className='inline align-middle w-4 h-4 sm:w-8 sm:h-8 text-xs sm:text-base' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M20.3125 12.5C20.3125 12.2928 20.3948 12.0941 20.5413 11.9476C20.6878 11.8011 20.8865 11.7188 21.0938 11.7188C21.301 11.7188 21.4997 11.8011 21.6462 11.9476C21.7927 12.0941 21.875 12.2928 21.875 12.5V21.0938C21.875 21.301 21.7927 21.4997 21.6462 21.6462C21.4997 21.7927 21.301 21.875 21.0938 21.875H3.90625C3.69905 21.875 3.50034 21.7927 3.35382 21.6462C3.20731 21.4997 3.125 21.301 3.125 21.0938V3.90625C3.125 3.69905 3.20731 3.50034 3.35382 3.35382C3.50034 3.20731 3.69905 3.125 3.90625 3.125H12.5C12.7072 3.125 12.9059 3.20731 13.0524 3.35382C13.1989 3.50034 13.2812 3.69905 13.2812 3.90625C13.2812 4.11345 13.1989 4.31216 13.0524 4.45868C12.9059 4.60519 12.7072 4.6875 12.5 4.6875H4.6875V20.3125H20.3125V12.5Z" fill="#666666" />
                    <path d="M11.4737 13.5313L12.7627 13.347L20.6815 5.42977C20.7561 5.3577 20.8156 5.2715 20.8565 5.17618C20.8975 5.08087 20.919 4.97835 20.9199 4.87462C20.9208 4.77088 20.9011 4.66801 20.8618 4.572C20.8225 4.47598 20.7645 4.38876 20.6912 4.3154C20.6178 4.24205 20.5306 4.18404 20.4346 4.14476C20.3385 4.10547 20.2357 4.08571 20.1319 4.08661C20.0282 4.08751 19.9257 4.10906 19.8304 4.15001C19.7351 4.19095 19.6489 4.25047 19.5768 4.32509L11.6565 12.2423L11.4721 13.5313H11.4737ZM21.7862 3.21884C22.004 3.43649 22.1767 3.69493 22.2946 3.97939C22.4125 4.26384 22.4732 4.56874 22.4732 4.87665C22.4732 5.18456 22.4125 5.48945 22.2946 5.77391C22.1767 6.05836 22.004 6.3168 21.7862 6.53446L13.6846 14.636C13.5651 14.7559 13.4099 14.8338 13.2424 14.8579L10.6643 15.2266C10.5441 15.2439 10.4216 15.2329 10.3064 15.1946C10.1913 15.1562 10.0866 15.0916 10.0008 15.0058C9.91496 14.9199 9.85031 14.8153 9.81197 14.7001C9.77363 14.5849 9.76265 14.4624 9.77991 14.3423L10.1487 11.7641C10.1723 11.5968 10.2496 11.4416 10.369 11.322L18.4721 3.2204C18.9116 2.78101 19.5076 2.53418 20.1291 2.53418C20.7506 2.53418 21.3466 2.78101 21.7862 3.2204V3.21884Z" fill="#666666" />
                </svg> Edit Products  </button></NavLink>
            </nav>


        </>
    )
}

export default Admin