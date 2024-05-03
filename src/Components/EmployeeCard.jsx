import React, { useEffect, useState } from 'react';

const EmployeeCard = ({ employeeData }) => {
  const { name, employeetype, worktype, dateofjoining, email, phone, upiId, image } = employeeData;
  const [reqDate, setReqDare] = useState('');

  // Function to add leading zero if needed
  const padTo2Digits = (num) => num.toString().padStart(2, '0');

  useEffect(() => {
    // Convert the string into a Date object
    const date = new Date(dateofjoining);

    // Extract day, month, and year from the Date object
    const day = padTo2Digits(date.getUTCDate());
    const month = padTo2Digits(date.getUTCMonth() + 1);
    const year = date.getUTCFullYear();

    setReqDare(`${day}-${month}-${year}`);
  }, [])

  return (
    <div className=" shadow-md rounded-lg bg-teal-100 overflow-hidden m-4" style={{ width: '300px', }}>
      <div className="p-4">
        <img src={image} alt="Employee" className="w-24  object-cover mb-4" />
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-gray-700 mb-2">Employee Type: {employeetype}</p>
        <p className="text-gray-700 mb-2">Work Type: {worktype}</p>
        <p className="text-gray-700 mb-2">Joining Date: {reqDate}</p>
        <p className="text-gray-700 mb-2">Email: {email}</p>
        <p className="text-gray-700 mb-2">Phone: {phone}</p>
        <p className="text-gray-700 mb-2">UPI ID: {upiId}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
