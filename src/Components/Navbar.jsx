import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div >
      <h1 className='text-6xl font-Titlefont m-3 p-4 text-green-600'>Tipp</h1>
      </div>
      <div className='flex mr-20'>
        <ul>
            <li>
                <a href="" className='text-xl p-2'>How to Tip</a>
            </li>
        </ul>

        <ul>
            <li>
                <a href="/login" className='text-xl p-2 pl-6' >Login</a>
            </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
