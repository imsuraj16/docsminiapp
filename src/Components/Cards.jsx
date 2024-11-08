import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Cards({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} className= ' relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-7 py-10 overflow-hidden'>
    <FaRegFileAlt/>
    <p className='mt-5 text-sm leading-tight'>{data.desc}</p>
    <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-1'>
            <h5>{data.filesize}</h5>
            <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'> 
            {data.close? <IoClose/>:<HiOutlineDownload color='white'/>}
            </span>
        </div>
        {data.tag.isOpen&& (
             <div className= '  tag w-full py-2 px-8 left-0  bg-green-600'>
        <h3 className='text-sm text-center'>download Now</h3>
    </div>
        )}
    </div>
   
    </motion.div>
  )
}

export default Cards
