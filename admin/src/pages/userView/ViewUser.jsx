import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import useFetch from '../../hooks/useFetch';
import "./new.scss";

const ViewUser = () => {
const {data} = useFetch('/users/:id')

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className='flex flex-row justify-center items-center h-[600px]'>
            <div className='flex flex-row justify-start items-center h-[400px] w-[800px] shadow-2xl rounded-2xl'>
                <div className='flex justify-center items-center ml-[60px]'>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/527f2c83-b33d-43f4-8aa8-a95372ee139e/dcppcxr-673bcb4e-6555-40b0-9bd1-ae3512e67acb.png/v1/fill/w_1023,h_536,q_80,strp/one_piece_buggy_the_star_clown_coin_delivery_anime_by_amanomoon_dcppcxr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTM2IiwicGF0aCI6IlwvZlwvNTI3ZjJjODMtYjMzZC00M2Y0LThhYTgtYTk1MzcyZWUxMzllXC9kY3BwY3hyLTY3M2JjYjRlLTY1NTUtNDBiMC05YmQxLWFlMzUxMmU2N2FjYi5wbmciLCJ3aWR0aCI6Ijw9MTAyMyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.IRYKzXtXb3aGp51R84Gm8K3nkoC4osXKKqBo7eyuzsw" alt="this is an image"  className='h-[250px] w-[270px] rounded-[50%]'/>
                </div>
                <div className='flex flex-col gap-2 text-lg text-gray-500 ml-[60px]' >
                    <p>Username: </p>
                    <p>Email: </p>
                    <p>Country: </p>
                    <p>City: </p>
                    <p>Phone: </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewUser