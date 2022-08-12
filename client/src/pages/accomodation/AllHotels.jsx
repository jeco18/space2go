import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const AllHotels = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col items-center justify-center mt-[100px]'>
            <p className='text-4xl text-violet-500 font-bold'>All <span className='text-black'>Hotels</span></p>
            <div className='flex lg:flex-row flex-col gap-2 justify-around w-full'>
                <div className='flex flex-row lg:justify-between justify-center mt-[30px]'>
                    <div className='w-[450px] min-h-[500px] shadow-xl  rounded-md flex flex-col p-3 gap-2'>
                        <div className='flex justify-center'>                      
                            <img src="https://images.oyoroomscdn.com/uploads/hotel_image/103297/large/9ff91711f99581d7.jpg" alt=""  className='rounded-md w-full h-[400px]'/>
                        </div>
                        <p className='text-xl font-bold'>The Junction Tagaytay</p>
                        <p className='text-lg'>Starting from ₱2140</p>
                        <p>Hotel</p>
                    </div>
                </div>
                <div className='flex flex-row lg:justify-between justify-center mt-[30px]'>
                    <div className='w-[450px] min-h-[500px] shadow-xl  rounded-md flex flex-col p-3 gap-2'>
                        <div className='flex justify-center'>                      
                            <img src="https://images.oyoroomscdn.com/uploads/hotel_image/88261/large/916db397c46d31df.jpg" alt=""  className='rounded-md w-full h-[400px]'/>
                        </div>
                        <p className='text-xl font-bold'>Sunset View Ridge Residences</p>
                        <p className='text-lg'>Starting from ₱3500</p>
                        <p>Hotel</p>
                    </div>
                </div>
                <div className='flex flex-row lg:justify-between justify-center mt-[30px]'>
                    <div className='w-[450px] min-h-[500px] shadow-xl  rounded-md flex flex-col p-3 gap-2'>
                        <div className='flex justify-center'>                      
                            <img src="https://images.oyoroomscdn.com/uploads/hotel_image/112275/large/58aa67e3a20624a2.jpg" alt=""  className='rounded-md w-full h-[400px]'/>
                        </div>
                        <p className='text-xl font-bold'>Hotel T-ara</p>
                        <p className='text-lg'>Starting from ₱4500</p>
                        <p>Hotel</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllHotels