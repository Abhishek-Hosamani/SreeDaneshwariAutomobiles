import React from 'react'
import axios from 'axios';
const DeleteCard = (props) => {

    const handleDelete = async () => {
        const userConfirmed = window.confirm('Are you sure you want to delete this product?');

        if (!userConfirmed) {
            return; // Do nothing if the user cancels the confirmation
        }
        try {
            const response = await axios.delete(`https://sda-backend-mfeu.onrender.com/api/deleteProduct/${props.id}`);
            if (response.data.success) {
                window.alert('Product deleted Successfully ')
            }
            props.onDelete();
        } catch (error) {

            console.error('Error deleting item', error);
        }
    };
    return (
        <>

            <div className='px-6 py-4 flex flex-row justify-between  bg-[#FFF] rounded=sm m-2 rounded-md items-center'>
                <div className='flex w-3/4 sm:w-1/2 items-center'>
                    <div><img src={props.img} alt="" className='w-16 h-12' /></div>
                    <div className='ml-4 text-xs sm:text-sm font-bold'><p>{props.Name}</p></div>
                </div>
                <div>
                    <button onClick={handleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>


        </>
    )
}

export default DeleteCard