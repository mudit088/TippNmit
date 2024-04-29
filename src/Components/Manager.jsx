import React from 'react'

const Manager = () => {
  return (
    <div>
       <section className="">
    
     
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 bg-green-50">
   
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        
        <h2 className="text-2xl font-bold leading-tight text-black">Sign up to your account</h2>
        <form action="#" method="POST" className="mt-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {' '}
                Owner Name (Admin){' '}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Text"
                  placeholder="Enter your Name"
                ></input>
              </div>
            </div>

            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {' '}
                Username{' '}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Text"
                  placeholder="Enter your Username"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Business Name :
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Text"
                  placeholder="Enter the name of your Business"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Business Type :
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Text"
                  placeholder="Enter the Type of your Business you have"
                ></input>
              </div>
            </div>

            {/* <div>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Date of Registration:
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Date"
                  placeholder="Enter the Type of your Business you have"
                ></input>
              </div>
            </div> */}

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Email:
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Email"
                  placeholder="xyz@gmail.com"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Phone number:
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Number"
                  placeholder="Enter Phone Number"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Password:
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="*********"
                ></input>
              </div>
            </div>
        <div>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md bg-teal-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-teal-200"
          >
                Get started
              </button>
            </div>
          </div>
        </form>
     
      </div>
    </div>
  </section>
    </div>
  )
}

export default Manager
