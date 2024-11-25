import React from 'react'
import { assets } from '../assets'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main style={{backgroundImage: `linear-gradient(rgba(0, 50, 39, 0.8), rgba(125, 134, 132, 0.8)), url(${assets.img3})`}} className='h-screen w-full bg-cover flex items-center justify-center p-10'>
      <div className='max-w-[430px] h-[400px] bg-white w-full rounded-lg px-6 py-7 flex flex-col gap-5'>
        <h6 className='font-semibold text-[28px] text-center'>Login</h6>
        <form method='GET' className='mt-6 flex flex-col gap-5'>
          
            <input type="email" placeholder='Email' className='w-full border px-4 py-2 rounded-md outline-mainColor' />
            <input type="password" placeholder='Password' className='w-full border px-4 py-2 rounded-md outline-mainColor' />
            <button type='button' className='hover:underline text-sm cursor-pointer'>Forget Password?</button>
            <button type='submit' className='text-center bg-mainColor hover:bg-hoverColor cursor-pointer text-white rounded-md px-4 py-2'>Login</button>
            
          
        </form>
        <p className='text-center'>Don't have an account? <Link to='/register'><span className='hover:underline hover:text-mainColor'>Register Now</span></Link></p>
      </div>
    </main>
  )
}

export default Login