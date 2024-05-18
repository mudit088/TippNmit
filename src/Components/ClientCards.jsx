import React, { useEffect, useState } from 'react'

export default function ClientCards({ employeeData }) {
  const { name, employeetype, worktype, dateofjoining, email, upiId, image } = employeeData;
  const [reqDate, setReqDare] = useState('');
  const [UPI, setUPI] = useState('');

  const padTo2Digits = (num) => num.toString().padStart(2, '0');
  
  useEffect(() => {
    // Convert the string into a Date object
    const date = new Date(dateofjoining);

    // Extract day, month, and year from the Date object
    const day = padTo2Digits(date.getUTCDate());
    const month = padTo2Digits(date.getUTCMonth() + 1);
    const year = date.getUTCFullYear();
    setReqDare(`${day}-${month}-${year}`);

    //upi url
    const tempname = name.replace(" ","%20");
    const tempupi = `upi://pay?pa=${upiId}&pn=${tempname}&cu=INR&tn=Transaction%20Note`
    setUPI(tempupi)
  }, [])

  return (
    <div>
      <div className='mt-28 ml-10'>
        <div className=" shadow-md rounded-lg bg-teal-100 overflow-hidden m-4 w-80 relative">
          <div className="p-4">
            <div className='flex items-center justify-center h-24'>
              <img src={image} alt="Employee" className="object-cover mb-4 h-full" />
            </div>
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-gray-700 mb-2">Employee Type: {employeetype}</p>
            <p className="text-gray-700 mb-2">Work Type: {worktype}</p>
            <p className="text-gray-700 mb-2">Joining Date: {reqDate}</p>
            <p className="text-gray-700 mb-2">Email: {email}</p>
            <p className="text-gray-700 mb-2">UPI ID: {upiId}</p>
            <a href={UPI} >UPI</a>
          </div>
        </div>
      </div>
    </div>
  )
}
