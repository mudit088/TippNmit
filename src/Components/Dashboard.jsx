import React, { useEffect, useRef, useState } from 'react';
import EmployeeCard from './EmployeeCard';
import { useNavigate, useLocation } from "react-router-dom";
import QRCode from "qrcode";
import axios from 'axios';

const Dashboard = () => {

  const [mgr, setMgr] = useState({});
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(""); //TODO: print this error msg in case of server error
  const [qrURL, setQrURL] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const canvasRef = useRef();

  const fetchmanager = async () => {
    let token = "";
    if (localStorage.getItem("auth-token")) {
      token = localStorage.getItem("auth-token")
      console.log(token)
    }
    else {
      navigate('/login')
    }
    try {
      setError("");
      const response = await fetch(`http://localhost:5000/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        },
      });
      const json = await response.json();
      console.log(json)
      if (json.username) {
        setMgr(json)
        fetchemployee(json.username)
      }
    } catch (error) {
      setError(error.message);
    }
  }

  const fetchemployee = async (username) => {
    const response = await fetch(`http://localhost:5000/api/employee/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'username': username
      },
    });
    const json = await response.json()
    console.log(json)
    setEmployees(json)
  }

  const setQR = () => {
    const url = window.location.href;
    const nrwurl = url.substring(0, url.length - location.pathname.length);
    const data = `${nrwurl}/client/tulsyanshubham`;
    if (data && canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, data, {
        width: 200,
        margin: 1,
        color: {
          dark: "#000000",
          light: "#ffffff"
        }
      }, error => {
        if (error) console.error('Error generating QR code:', error);
      });
    }
  };


  useEffect(() => {
    fetchmanager();
    setQR();
  }, [])


  const emptype = ['Full-time', 'Part-time', 'Temporary', 'Intern', 'Seasonal', 'Leased'];
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    managerusername: '',
    name: '',
    employeetype: '',
    worktype: '',
    dateofjoining: '',
    email: '',
    phone: '',
    upiId: '',
    image: '',
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData)
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

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    let token = "";
    if (localStorage.getItem("auth-token")) {
      token = localStorage.getItem("auth-token")
      console.log(token)
    }
    // else {
    //   navigate('/login')
    // }
    console.log(token)
    const response = await fetch(`http://localhost:5000/api/employee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': `${token}`
      },
      body: JSON.stringify(formData),
    });
    const json = await response.json()
    console.log(json)

    // Add new employee to the employees array
    const newEmployee = { ...formData };
    setEmployees([...employees, newEmployee]);
    // Reset form data and close modal
    setFormData({
      managerusername: mgr.username,
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



  const handleQRDownload = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "qr-code.png";
      link.click();
    }
  };

  return (
    <div className='overflow-x-hidden pt-[10vh] min-h-[100vh]'>
      {/* {mgr.businessname && ( */}
      <div className="w-screen h-screen">
        {/* manager details */}
        <div className='mt-4 px-4 flex items-center justify-evenly flex-wrap gap-5'>
          <div className='flex justify-center flex-col items-center'>
            <p className="text-5xl flex justify-center pr-8 font-semibold items-center font-mono gap-3 text-blue-800">
              <span>{mgr.businessname}</span>
              <span className='bg-red-500 text-3xl px-4 py-1 rounded-3xl'> {mgr.businesstype} </span>
            </p>
            {/* <p className="text-5xl flex justify-center pr-8 items-center text-blue-800"> {mgr.businesstype} </p> */}
            <p className="text-5xl flex justify-center pr-8 items-center text-blue-800">Manager : {mgr.ownername} </p>
          </div>
          <div className='flex flex-col items-center justify-center relative qr-box'>
            <canvas ref={canvasRef} className='qr-code border-green-500 border-4 border-dashed mb-2' />
            <button className='bg-teal-500 p-2 rounded-lg qr-btn absolute' onClick={handleQRDownload}>
            <i className="fa-solid fa-download" style={{color: "#000000"}}/> QR
            </button>
          </div>
        </div>
        <div className='flex my-5 items-center justify-center gap-8'>
          <p className="text-4xl font-bold flex justify-center items-center underline text-teal-500">Employee Registration</p>
          <button onClick={toggleModal} className="bg-teal-500 p-2 rounded-lg">
          <i className="fa-solid fa-user-plus" style={{color: "#000000"}} /> Employee
          </button>
        </div>
        {/* <div className="mt-20 float-start ml-10"> */}
        <section className="flex justify-center items-center flex-col 0">
          <div className="gap-20">
            {/* <div>
                <img src="/employee.png" alt="Add employee" className="h-28 pl-2" />
              </div> */}
            {modal && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 h-full">
                <div className="bg-teal-50 rounded-lg p-5">
                  <div className="flex justify-end">
                    <button onClick={toggleModal} className="bg-red-200 mb-4 px-2 py-1 rounded-lg">
                      close
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
                        value={formData.employeetype}
                        className="h-8 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        required
                      >
                        <option id={0} value="">Choose...</option>
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
        {/* </div> */}

        {/* Display EmployeeCards for each employee */}
        <div className="flex flex-wrap justify-center">
          {employees.length !== 0 ? (employees.map((employee) => (
            <EmployeeCard key={employee.upiId} employeeData={employee} />
          ))) : (<div className='text-3xl text-red-500 font-semibold h-full'>No Employees added yet.</div>)}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Dashboard;