import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

const Employee = () => {
  const emptype = ['Full-time', 'Part-time', 'Temporary', 'Interns', 'Seasonal', 'Leased'];
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    employeetype: '',
    worktype: '',
    dateofjoining: '',
    email: '',
    phone: '',
    upiId: '',
    image: '',
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
    console.log(formData)
  };
  const handleImageUpload = (e) => {
    var reader = new FileReader();
    // console.log(e.target.files[0])
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setFormData({ ...formData, image: reader.result });
      console.log(formData.image)
    }
    // reader.onerror = error => {
    //     console.log(`Error: ${error.message}`)
    // }
  };

  const handleFormSubmit = () => {
    // Add new employee to the employees array
    const newEmployee = { ...formData };
    setEmployees([...employees, newEmployee]);

    // Reset form data and close modal
    setFormData({
      name: '',
      employeetype: '',
      workType: '',
      joiningDate: '',
      email: '',
      phoneNumber: '',
      upiID: '',
      image: '',
    });
    setModal(false);
  };

  return (
    <div className="w-screen h-screen">
      {/* <div>
        <p className="text-5xl text-green-600 font-semibold font-Titlefont m-4">Tip-Top</p>
      </div> */}
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
                  <form onSubmit={handleFormSubmit}>
                    {/* <div className="flex flex-col gap-4">
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
                    </div> */}
                    <div className="flex flex-col gap-4">
                      <label htmlFor="fullName" className="text-base font-medium text-gray-900">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        placeholder="Enter your Name"
                        minLength={5}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <label htmlFor="employeeType" className="text-base font-medium text-gray-900">
                        Employee Type
                      </label>
                      <select
                        id="employeeType"
                        name="employeetype"
                        onChange={handleInputChange}
                        className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        required
                      >
                        <option id={0} value="" selected>Choose...</option>
                        {emptype.map(id => <option key={id} value={id}>{id}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-4">
                      <label htmlFor="workType" className="text-base font-medium text-gray-900">
                        Work Type
                      </label>
                      <input
                        type="text"
                        id="workType"
                        name="worktype"
                        value={formData.worktype}
                        onChange={handleInputChange}
                        className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        placeholder="Enter Work Type"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <label htmlFor="joiningDate" className="text-base font-medium text-gray-900">
                        Joining Date
                      </label>
                      <input
                        type="date"
                        id="joiningDate"
                        name="dateofjoining"
                        value={formData.dateofjoining}
                        onChange={handleInputChange}
                        className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        required
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
                        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                        title="abcd@email.com"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <label htmlFor="phoneNumber" className="text-base font-medium text-gray-900">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        placeholder="Enter Phone Number"
                        maxLength={10}
                        minLength={10}
                        // pattern="[0-9]{10}"
                        title="10 Digits"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <label htmlFor="upiID" className="text-base font-medium text-gray-900">
                        UPI ID
                      </label>
                      <input
                        type="email"
                        id="upiID"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleInputChange}
                        className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        placeholder="Enter UPI ID"
                        pattern="[a-zA-Z0-9]+@[a-zA-Z]{2,64}"
                        title="username@provider"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <label htmlFor="image" className="text-base font-medium text-gray-900">
                        Image upload
                      </label>
                      <input
                        type="file"
                        id="image"
                        accept="image/*"
                        name="image"
                        onChange={handleImageUpload}
                        className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        title='Image Only'
                        required
                      />
                    </div>
                    <button className="h-8 w-28 rounded-md border-2 text-sm border-gray-300 mb-3 bg-teal-500">
                      Submit
                    </button>
                  </form>
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