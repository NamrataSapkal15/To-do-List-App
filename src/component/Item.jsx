import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Item = (props) => {
const [done,setDone]=useState(false);

  return (
    <div    onClick={()=> setDone(!done)} className= "select-none w-full border-b p-3 flex justify-between cursor-pointer items-center" >
        <div>
            <span className='pr-2 text-[14px] text-slate-400'  >{props.time}</span>
            <span className={ `${done === true ? 'line-through' : '' } text-[20px]`}>{props.item}</span>

        </div>
        <div onClick={()=>props.removeHandler(props.id)} >
        <FaTrashAlt className='text-[#e74c3c]' />
        </div>

    </div>
  )
}

export default Item