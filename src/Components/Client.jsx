import React, { useEffect, useState } from 'react';

const Client = () => {
  const [display, setDisplay] = useState(true);
  
  const [delCover, setDelCover] = useState(false);
  return (
    <div className='h-screen w-screen bg-teal-50 m-auto'>
      <div className='flex flex-col space-y-4 items-center'>
      <h1 className='text-blue-700 text-4xl pt-2'>Business Name</h1>
      <h1 className='text-red-500 text-3xl'>Manager Name</h1>
    </div>
    <div className='flex flex-col justify-center pt-16 items-center'>
      <p className='text-teal-600 text-4xl '>Payments have <span className='text-blue-600'>evolved</span>  but how we tip  <span className='text-blue-600'>hasn't :/</span> </p>
      <p className='text-blue-600 text-2xl pt-10 font-semibold'>HAPPY THANKSGIVING</p>
    </div>

    <div className='mt-28 ml-10'>
      { display && (<div className=" shadow-md rounded-lg bg-teal-100 overflow-hidden m-4 w-80 relative">
        {delCover && (<div className='bg-black/[0.6] z-10 h-full w-full absolute flex flex-col items-center justify-center gap-5'>
          <div className='text-white text-4xl'>Are You Sure?</div>
          <div className='flex items-center justify-center gap-12'>
            <button className="bg-red-500 px-2 py-1 rounded-lg" onClick={() => { handleDelete(upiId); setDisplay(false) }} >
              <span className='text-xl'>
                <i className="fa-solid fa-trash" style={{ color: "#000000" }} /> {" "} {" "}Delete
              </span>
            </button>
            <button className="bg-green-500 px-1 py-2 rounded-xl" onClick={() => { setDelCover(false) }}>
              <span className='text-xl'>
                <i className="fa-solid fa-xmark" style={{ color: "#000000" }} /> {" "} {" "}Cancel
              </span>
            </button>
          </div>
        </div>)}
        <button className="bg-red-500 p-1 rounded-lg absolute top-3 right-3" onClick={() => { setDelCover(true) }}>
          <i className="fa-solid fa-trash" style={{ color: "#000000" }} />
        </button>
        <div className="p-4">
          <div className='flex items-center justify-center h-24'>
            <img src={null} alt="Employee" className="object-cover mb-4 h-full" />
          </div>
          <p className="text-xl font-semibold">{}</p>
          <p className="text-gray-700 mb-2">Employee Name: {}</p>
          <p className="text-gray-700 mb-2">Work Type: {}</p>
          <p className="text-gray-700 mb-2">Phone: {}</p>
          <p className="text-gray-700 mb-2">UPI Name: {}</p>
          <p className="text-gray-700 mb-2">UPI ID: {}</p>
          <button className='ml-20 p-2 px-8 border-2 border-teal-400 rounded-xl hover:scale-105 duration-300 bg-teal-200'>Tip</button>
        </div>
      </div>)}
    

    </div>
     
    </div>
    
  )
}

export default Client
