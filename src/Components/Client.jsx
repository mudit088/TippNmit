import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ClientCards from './ClientCards';

const Client = () => {
  const { username } = useParams();
  const [mgr, setMgr] = useState({});
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(""); //TODO: print this error msg in case of server error

  const fetchdata = async () => {
    try {
      setError("");
      const response = await fetch(`http://localhost:5000/api/clientpage`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'username': username
        },
      });
      const json = await response.json();
      console.log(json)
      if (json.mgr) {
        setMgr(json.mgr)
        setEmployees(json.emps)
      }
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    fetchdata();
  }, [])

  return (
    <div className='overflow-x-hidden pt-[10vh] min-h-[100vh]'>
      <div className='flex flex-col space-y-4 items-center mt-4'>
        <div className='flex justify-center flex-col items-center'>
          <p className="text-5xl flex justify-center pr-8 font-semibold items-center font-mono gap-3 text-blue-800">
            <span className='bg-red-500 text-3xl px-4 py-1 rounded-3xl'> {mgr.businesstype} </span>
            <span>{mgr.businessname}</span>
          </p>
          {/* <p className="text-5xl flex justify-center pr-8 items-center text-blue-800"> {mgr.businesstype} </p> */}
          <p className="text-5xl flex justify-center pr-8 items-center text-blue-800">Manager : {mgr.ownername} </p>
        </div>
      </div>
      <div className='flex flex-col justify-center pt-16 items-center'>
        <p className='text-teal-600 text-4xl '>Payments have <span className='text-blue-600'>evolved</span>  but how we tip  <span className='text-blue-600'>hasn't :/</span> </p>
        <p className='text-blue-600 text-2xl pt-10 font-semibold'>HAPPY THANKSGIVING</p>
      </div>

      <div className="flex flex-wrap justify-center">
        {employees.length !== 0 ? (employees.map((employee) => (
          <ClientCards key={employee.upiId} employeeData={employee} />
        ))) : (<div className='text-3xl text-red-500 font-semibold h-full'>No Employees added yet.</div>)}
      </div>

    </div>

  )
}

export default Client
