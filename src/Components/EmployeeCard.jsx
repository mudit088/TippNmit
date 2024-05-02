import React from 'react';

const EmployeeCard = ({ employeeData }) => {
  const { username, fullName, employeeType, workType, joiningDate, email, phoneNumber, upiID, image } = employeeData;

  return (
    <div className=" shadow-md rounded-lg bg-teal-100 overflow-hidden m-4" style={{ width: '300px',  }}>
      <div className="p-4">
        <img src={image} alt="Employee" className="w-24  object-cover mb-4" />
        <p className="text-xl font-semibold">{fullName}</p>
        <p className="text-gray-600 mb-2">Username: {username}</p>
        
          <p className="text-gray-700 mb-2">Employee Type: {employeeType}</p>
          <p className="text-gray-700 mb-2">Work Type: {workType}</p>
      
        <p className="text-gray-700 mb-2">Joining Date: {joiningDate}</p>
        <p className="text-gray-700 mb-2">Email: {email}</p>
        <p className="text-gray-700 mb-2">Phone: {phoneNumber}</p>
        <p className="text-gray-700 mb-2">UPI ID: {upiID}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
