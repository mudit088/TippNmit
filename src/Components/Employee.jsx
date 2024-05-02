import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

const Employee = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    employeeType: '',
    workType: '',
    joiningDate: '',
    email: '',
    phoneNumber: '',
    upiID: '',
    image: null, // Default image path
  });
  const [employees, setEmployees] = useState([]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the first file selected by the user
    setFormData({
      ...formData,
      image: URL.createObjectURL(file), // Convert file to URL and update the image property
    });
  };

  const handleFormSubmit = () => {
    // Add new employee to the employees array
    const newEmployee = { ...formData };
    setEmployees([...employees, newEmployee]);

    // Reset form data and close modal
    setFormData({
      username: '',
      fullName: '',
      employeeType: '',
      workType: '',
      joiningDate: '',
      email: '',
      phoneNumber: '',
      upiID: '',
      image:null ,
    });
    setModal(false);
  };

  return (
    <div className="w-screen h-screen">
      <div>
        <p className="text-5xl text-green-600 font-semibold font-Titlefont m-4">Tip-Top</p>
      </div>
      <div>
        <p className="text-3xl flex justify-center items-center text-black">Employee Registration</p>
      </div>
      <div className="mt-20 float-start ml-10">
        <section className="flex justify-center items-center flex-col 0">
          <div className="gap-20">
            <div>
              <img src="/employee.png" alt="Add employee" className="h-28 pl-2" />
            </div>
            <button onClick={toggleModal} className="bg-teal-500 p-2 rounded-lg">
              Add Employee
            </button>
            {modal && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-teal-50 rounded-lg p-8">
                  <div className="flex justify-end">
                    <button onClick={toggleModal} className="bg-red-200 mb-4 p-2 rounded-lg">
                      Close
                    </button>
                  </div>
                  <div>
                    <div className="flex flex-col gap-4">
                      <label htmlFor="username" className="text-base font-medium text-gray-900">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <label htmlFor="fullName" className="text-base font-medium text-gray-900">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <label htmlFor="employeeType" className="text-base font-medium text-gray-900">
                        Employee Type
                      </label>
                      <select
                        id="employeeType"
                        name="employeeType"
                        value={formData.employeeType}
                        onChange={handleInputChange}
                        className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                      >
                        <option value=""></option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Temporary">Temporary</option>
                        <option value="Interns">Interns</option>
                        <option value="Seasonal">Seasonal</option>
                        <option value="Leased">Leased</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-4">
  <label htmlFor="workType" className="text-base font-medium text-gray-900">
    Work Type
  </label>
  <input
    type="text"
    id="workType"
    name="workType"
    value={formData.workType}
    onChange={handleInputChange}
    className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
    placeholder="Enter Work Type"
  />
</div>

<div className="flex flex-col gap-4">
  <label htmlFor="joiningDate" className="text-base font-medium text-gray-900">
    Joining Date
  </label>
  <input
    type="date"
    id="joiningDate"
    name="joiningDate"
    value={formData.joiningDate}
    onChange={handleInputChange}
    className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
  />
</div>

<div className="flex flex-col gap-4">
  <label htmlFor="email" className="text-base font-medium text-gray-900">
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
    placeholder="Enter Email"
  />
</div>

<div className="flex flex-col gap-4">
  <label htmlFor="phoneNumber" className="text-base font-medium text-gray-900">
    Phone Number
  </label>
  <input
    type="text"
    id="phoneNumber"
    name="phoneNumber"
    value={formData.phoneNumber}
    onChange={handleInputChange}
    className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
    placeholder="Enter Phone Number"
  />
</div>

<div className="flex flex-col gap-4">
  <label htmlFor="upiID" className="text-base font-medium text-gray-900">
    UPI ID
  </label>
  <input
    type="text"
    id="upiID"
    name="upiID"
    value={formData.upiID}
    onChange={handleInputChange}
    className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
    placeholder="Enter UPI ID"
  />
</div>

<div className="flex flex-col gap-4">
  <label htmlFor="image" className="text-base font-medium text-gray-900">
    Image upload
  </label>
  <input
     type="file"
      id="image"
      name="image"
      onChange={handleImageUpload}
      className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
</div>
<button onClick={handleFormSubmit} className="h-8 w-28 rounded-md border-2 text-sm border-gray-300 mb-3 bg-teal-500">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Display EmployeeCards for each employee */}
      <div className="flex flex-wrap justify-center">
        {employees.map((employee, index) => (
          <EmployeeCard key={index} employeeData={employee} />
        ))}
      </div>
    </div>
  );
};

export default Employee;