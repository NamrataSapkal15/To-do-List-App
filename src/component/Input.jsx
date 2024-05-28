import React, { useRef } from 'react'
import { IoIosAdd } from "react-icons/io";

const Input = (props) => {

    const inputBox =useRef();
  return (
    <div className='p-3 flex justify-around'>
        <input type='text'  ref={inputBox} placeholder='Enter Data Here' className='p-3 border border-slate-400 w-[90%] focus:outline-none'/>
        <div onClick={()=> {
          props.handler(inputBox.current.value)
          inputBox.current.value ="";
        } } className=' cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white rounded-[50%] text-3xl flex justify-center items-center'><IoIosAdd /></div>


    </div>
  )
}

export default Input