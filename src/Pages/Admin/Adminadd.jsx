import React, { useState, useRef } from 'react'
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminadd = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [img64, setimg64] = useState('');
    const [pname, setpname] = useState('');
    const [catname, setcatname] = useState('');
    const [desc, setdesc] = useState('');
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
            generatebase64(e.target.files[0]);
        }
    };
    const clearSelectedImage = () => {
        setSelectedImage(null);
    };
    const Categorylist = ['TubelessTyre Valves', 'Puncher Accesories', 'Lubricants', 'Rotovator Parts', 'Trolley Spares']
    const generatebase64 = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e);
        reader.onload = () => {
            // console.log(reader.result);
            setimg64(reader.result);
        }

    }

    const formSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        const formData = new FormData();
        formData.append('image', fileInputRef.current.files[0]);
        formData.append('productName', pname);
        formData.append('categoryName', catname);
        formData.append('description', desc);

        try {
            const response = await fetch('https://vercel.com/abhishek-hosamani/sda-backend/GUUcx3axo7AzhXc7DoidmRAGR9mH/api/products', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                // Handle success, e.g., show a success message or redirect
            } else {
                console.log('Error:', response.status);
                // Handle error, e.g., show an error message
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle unexpected errors
        }
        // const obj = {
        //     productName: pname,
        //     categoryName: catname,
        //     description: desc,
        //     image: img64
        // }
        // fetch('https://vercel.com/abhishek-hosamani/sda-backend/GUUcx3axo7AzhXc7DoidmRAGR9mH/api/products', {
        //     method: "POST",
        //     crossDomain: true,
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //         "Access-Control-Allow-Origin": "*",
        //     },
        //     body: JSON.stringify({ obj }),
        // }).then((res) => res.json()).then((data) => {
        //     console.log('datasent success')


        // });
        // window.alert('Data Sent Successfully !!');

        // window.location = '/admin'
    }


    return (
        <>
            <div className='flex flex-col sm:flex-row mx-auto justify-center gap-x-8'>
                <div className=''>
                    <div className='mt-4 sm:w-10/12 sm:h-44 w-4/6 h-32 flex flex-col bg-[#F2F2F2] items-center justify-center mx-auto sm:mx-16 border-2 border-[#0286D0] border-dashed rounded-md'>
                        <div>
                            <input type='file' accept="image/*" className='hidden' id="InputDropzone" onChange={handleImageChange} />
                            <label className='' htmlFor="InputDropzone">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-12 sm:w-24 sm:h-24' viewBox="0 0 71 70" fill="none">
                                    <path d="M7.33667 45.9375L22.3838 30.8904C22.9931 30.281 23.7166 29.7976 24.5128 29.4678C25.309 29.138 26.1624 28.9683 27.0242 28.9683C27.886 28.9683 28.7393 29.138 29.5355 29.4678C30.3318 29.7976 31.0552 30.281 31.6646 30.8904L46.7117 45.9375M42.3367 41.5625L46.4463 37.4529C47.0556 36.8435 47.7791 36.3601 48.5753 36.0303C49.3715 35.7005 50.2249 35.5308 51.0867 35.5308C51.9485 35.5308 52.8018 35.7005 53.598 36.0303C54.3943 36.3601 55.1177 36.8435 55.7271 37.4529L64.2117 45.9375M11.7117 56.875H59.8367C60.997 56.875 62.1098 56.4141 62.9303 55.5936C63.7507 54.7731 64.2117 53.6603 64.2117 52.5V17.5C64.2117 16.3397 63.7507 15.2269 62.9303 14.4064C62.1098 13.5859 60.997 13.125 59.8367 13.125H11.7117C10.5513 13.125 9.43855 13.5859 8.61808 14.4064C7.79761 15.2269 7.33667 16.3397 7.33667 17.5V52.5C7.33667 53.6603 7.79761 54.7731 8.61808 55.5936C9.43855 56.4141 10.5513 56.875 11.7117 56.875ZM42.3367 24.0625H42.36V24.0858H42.3367V24.0625ZM43.4304 24.0625C43.4304 24.3526 43.3152 24.6308 43.1101 24.8359C42.905 25.041 42.6268 25.1563 42.3367 25.1563C42.0466 25.1563 41.7684 25.041 41.5633 24.8359C41.3582 24.6308 41.2429 24.3526 41.2429 24.0625C41.2429 23.7724 41.3582 23.4942 41.5633 23.2891C41.7684 23.084 42.0466 22.9688 42.3367 22.9688C42.6268 22.9688 42.905 23.084 43.1101 23.2891C43.3152 23.4942 43.4304 23.7724 43.4304 24.0625Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </label>
                        </div>
                        <div className='flex flex-row items-center'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className='sm:w-9 sm:h-9 w-6 h-6' viewBox="0 0 24 24" fill="none">
                                    <path d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#0286D0" />
                                </svg>
                            </span>
                            <p className='mx-2 text-xs sm:text-base'>Drop Your Files Here or <label className="text-[#0286D0] underline underline-offset-4" htmlFor="InputDropzone">Browse</label></p>
                        </div>
                    </div>

                    <div>
                        {selectedImage && (
                            <div className='mt-4 mx-auto sm:mx-16 flex flex-row justify-between items-center sm:w-5/6 w-4/6 h-16 border-[0.5px] rounded-md bg-[#F2F2F2] px-4'>
                                <img src={selectedImage} alt='Selected img' className='w-12 h-8  ' />
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={clearSelectedImage} width="25" height="25" viewBox="0 0 18 18" fill="none">
                                    <path d="M15 3.75C15.1989 3.75 15.3897 3.82902 15.5303 3.96967C15.671 4.11032 15.75 4.30109 15.75 4.5C15.75 4.69891 15.671 4.88968 15.5303 5.03033C15.3897 5.17098 15.1989 5.25 15 5.25H14.25L14.2477 5.30325L13.548 15.1065C13.5211 15.4849 13.3517 15.8391 13.0741 16.0977C12.7965 16.3563 12.4311 16.5 12.0518 16.5H5.9475C5.5681 16.5 5.2028 16.3563 4.92516 16.0977C4.64753 15.8391 4.47819 15.4849 4.45125 15.1065L3.7515 5.304C3.75036 5.28602 3.74986 5.26801 3.75 5.25H3C2.80109 5.25 2.61032 5.17098 2.46967 5.03033C2.32902 4.88968 2.25 4.69891 2.25 4.5C2.25 4.30109 2.32902 4.11032 2.46967 3.96967C2.61032 3.82902 2.80109 3.75 3 3.75H15ZM12.7477 5.25H5.25225L5.94825 15H12.0518L12.7477 5.25ZM10.5 1.5C10.6989 1.5 10.8897 1.57902 11.0303 1.71967C11.171 1.86032 11.25 2.05109 11.25 2.25C11.25 2.44891 11.171 2.63968 11.0303 2.78033C10.8897 2.92098 10.6989 3 10.5 3H7.5C7.30109 3 7.11032 2.92098 6.96967 2.78033C6.82902 2.63968 6.75 2.44891 6.75 2.25C6.75 2.05109 6.82902 1.86032 6.96967 1.71967C7.11032 1.57902 7.30109 1.5 7.5 1.5H10.5Z" fill="#888888" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
                <div className='mt-4 sm:w-3/4 flex flex-col'>
                    <h3 className='mx-auto font-semibold text-center'>Product Details</h3>

                    <form onSubmit={formSubmit} className='flex flex-col  sm:w-5/6 w-5/6 mx-auto font-medium'>
                        <input type='file' accept="image/*" className='hidden' id="InputDropzone" ref={fileInputRef} onChange={handleImageChange} />
                        <label htmlFor='Productname' className='mt-1'>Product Name</label><br></br>
                        <input className="p-2 outline-[#9D9D9D] " required type='text' value={pname} onChange={(e) => { setpname(e.target.value) }} id='Produtname' name='ProductName' placeholder='Ex: Tubeless Values'></input>
                        <label htmlFor='Category' className='mt-1'>Category</label><br></br>
                        <select className="p-2 outline-[#9D9D9D]" required value={catname} onChange={(e) => { setcatname(e.target.value) }} name="selectedCategory" id="Category">
                            <option value="">Select a Category</option>
                            {
                                Categorylist.map((c, ind) => {
                                    return (

                                        <option key={ind} value={c}>{c}</option>
                                    )
                                })
                            }
                        </select>
                        <label htmlFor='Description' className='mt-1' >Description</label><br></br>
                        <textarea name="Desc" required id="Description" cols="30" rows="5" value={desc} onChange={(e) => { setdesc(e.target.value) }} className='p-2 outline-[#9D9D9D]' placeholder='Add Product Description'></textarea>

                        <button className='bg-[#0286D0] sm:w-1/5 w-4/12 p-2 rounded text-white mt-4 mx-auto' onClick={formSubmit} >Publish</button>

                    </form>

                    <button className='text-[#FF0000] sm:w-2/12 w-3/12 border-2 border-[#FF0000] p-2 rounded mt-4 mx-auto hover:bg-[#FF0000] hover:text-white ' onClick={() => navigate('/')}>Logout</button>
                </div>

            </div>
        </>
    )
}

export default Adminadd