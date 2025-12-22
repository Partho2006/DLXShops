import React, { useContext } from 'react'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext';

const Login = () => {
  const [ currentState, setCurrentState ] = useState('Sign Up');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto pt-12 gap-4 text-gray-800 border-t'>
      <div className="inline-flex items-center gap-2 mb-2 mt-8">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className='border-none h-0.5 w-8 bg-gray-800'/>
      </div>

      {currentState === 'Login' ? '' : <input type="text" className="w-full px-3 py-2 border border-gray-800 outline-none" placeholder='Name' required/>
      }
      <input type="email" className="w-full px-3 py-2 border border-gray-800 outline-none" placeholder='Email' required/>
      <input type="password" className="w-full px-3 py-2 border border-gray-800 outline-none" placeholder='Password' required/>

      <div className="w-full flex justify-between text-sm">
        <p className="cursor-pointer text-blue-500 hover:text-blue-900 underline">Forgot your password?</p>
        {
          currentState === 'Login' ? <p onClick={()=> setCurrentState('Sign Up')} className="cursor-pointer text-blue-500 hover:text-blue-900 underline">Create account</p> : <p onClick={()=> setCurrentState('Login')} className="cursor-pointer text-blue-500 hover:text-blue-900 underline">Login Here</p>
        }
      </div>
      <button className='bg-black hover:bg-black/80 text-white text-sm px-6 py-2 rounded-xl'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login
