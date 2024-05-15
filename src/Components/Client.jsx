import React from 'react'

const Client = ({ employeeDataa }) => {
    const { name, employeetype, worktype, email, phone, upiId, image } = employeeDataa;
  return (
    <div className=" shadow-md rounded-lg bg-teal-100 overflow-hidden m-4 w-80 relative">
      <button className="bg-red-500 p-1 rounded-lg absolute top-3 right-3">
        <i className="fa-solid fa-trash" style={{ color: "#000000" }} />
      </button>
      <div className="p-4">
        <div className='flex items-center justify-center h-24'>
          <img src={image} alt="Employee" className="object-cover mb-4 h-full" />
        </div>
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-gray-700 mb-2">Employee Type: {employeetype}</p>
        <p className="text-gray-700 mb-2">Work Type: {worktype}</p>
        <p className="text-gray-700 mb-2">Email: {email}</p>
        <p className="text-gray-700 mb-2">Phone: {phone}</p>
        <p className="text-gray-700 mb-2">UPI ID: {upiId}</p>
      </div>
    </div>
  )
}

export default Client
