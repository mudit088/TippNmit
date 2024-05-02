import React , {useState} from 'react'

const Employee = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
  return (
    <div className='w-screen h-screen'>
      <div>
        <p className='text-5xl  text-green-600 font-semibold font-Titlefont m-4'>Tip-Top</p>
      </div>
      <div>
        <p className='text-3xl flex justify-center items-center text-black'>Employee Registration</p>
      </div>
      <div className='space-x-10'>
       <section className='flex justify-center items-center flex-col  mt-20'>
        <div className='gap-20'>
        <div>
            <img src="/employee.png" alt="Add employee" className='h-28' />
        </div>
      <button onClick={toggleModal} className=' bg-teal-500 p-2 rounded-lg '>Add Employee</button>
      {modal && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className=' bg-teal-50  rounded-lg '>
            <div className='flex justify-end'>
              <button onClick={toggleModal} className='bg-red-200 mb-10'>Close</button>
            </div>
          <div>

          <div className='px-14 '> 
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {' '}
                Username{' '}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-56 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Text"
                  placeholder=""
                ></input>
              </div>
            </div>

            <div className='px-14 '>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {' '}
                Full Name{' '}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-56 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Text"
                  placeholder="Enter your Name"
                ></input>
              </div>
            </div>

            <div className='px-14 '>
            <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Employee Type :
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <select name="" id=""  className="flex h-10 w-56 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value=""></option>
                  <option value="">Full-Time</option>
                  <option value="">Part-Time</option>
                  <option value="">Temporary</option>
                  <option value="">Interns</option>
                  <option value="">Seasonal</option>
                  <option value="">Leased</option>
                </select>
              
              </div>
              </div>

              <div className='px-14 '>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {' '}
                Work Type{' '}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-56 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Text"
                  placeholder=""
                ></input>
              </div>
            </div>

            <div className='px-14 '>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {' '}
                Joining Date{' '}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-56 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Date"
                  placeholder="DD/MM/YYYY"
                ></input>
              </div>
            </div>

            <div className='px-14 '>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Email:
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-56 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Email"
                  placeholder="xyz@gmail.com"
                ></input>
              </div>
            </div>

            <div className='px-14 '>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Phone number:
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-56 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Number"
                  placeholder="Enter Phone Number"
                ></input>
              </div>
            </div>

            <div className='px-14 '>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  UPI ID:
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-56 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Text"
                  placeholder="abc@okhdfc"
                ></input>
              </div>
            </div>

            <div className='px-14 pb-8'>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Image
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-56 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Text"
                  placeholder="abc@okhdfc"
                >
                  
                </input>
                <button className='ml-32 mt-1 h-7 w-24 rounded-md border-2 text-sm border-gray-300 bg-transparent'>Upload Image</button>
              </div>
            </div>
          </div>
                     <div>
                      <button className='ml-24  h-8 w-28 rounded-md border-2 text-sm border-gray-300 mb-3 bg-teal-500'>Submit</button>
                     </div>
          </div>
        </div>
      )}
      </div>
    </section>
      </div>
    </div>
  )
}

export default Employee
