import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Boracay = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col items-center justify-center mt-[100px]'>
            <p className='text-4xl text-violet-500 font-bold'>Boracay <span className='text-black'>Properties</span></p>
            <div className='flex lg:flex-row flex-col gap-2 justify-around w-full'>
                <div className='flex flex-row lg:justify-between justify-center mt-[30px]'>
                    <div className='w-[450px] min-h-[500px] shadow-xl  rounded-md flex flex-col p-3 gap-2'>
                        <div className='flex justify-center'>                      
                            <img src="https://pix8.agoda.net/hotelImages/82092/-1/7a02b8aec84ddfcc0b15cf3db7773d6a.png?ca=15&ce=1&s=1024x768" alt=""  className='rounded-md w-full h-[400px]'/>
                        </div>
                        <p className='text-xl font-bold'>La Carmela de Boracay Hotel</p>
                        <p className='text-lg'>Starting from ₱2140</p>
                        <p>Boracay</p>
                    </div>
                </div>
                <div className='flex flex-row lg:justify-between justify-center mt-[30px]'>
                    <div className='w-[450px] min-h-[500px] shadow-xl  rounded-md flex flex-col p-3 gap-2'>
                        <div className='flex justify-center'>                      
                            <img src="https://pix8.agoda.net/hotelImages/2577211/-1/788b6d1a731ba2d171c810b3feed9165.jpg?ce=0&s=1024x768" alt=""  className='rounded-md w-full h-[400px]'/>
                        </div>
                        <p className='text-xl font-bold'>Henann Crystal Sands Resort</p>
                        <p className='text-lg'>Starting from ₱3500</p>
                        <p>Boracay</p>
                    </div>
                </div>
                <div className='flex flex-row lg:justify-between justify-center mt-[30px]'>
                    <div className='w-[450px] min-h-[500px] shadow-xl  rounded-md flex flex-col p-3 gap-2'>
                        <div className='flex justify-center'>                      
                            <img src="https://pix8.agoda.net/hotelImages/763271/-1/e0750c4cbab0c7f23e5a7612357fbd17.jpg?ca=8&ce=1&s=1024x768" alt=""  className='rounded-md w-full h-[400px]'/>
                        </div>
                        <p className='text-xl font-bold'>The Lind Boracay</p>
                        <p className='text-lg'>Starting from ₱4500</p>
                        <p>Boracay</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Boracay