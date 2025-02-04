
"use client"
import Link from "next/link";

import { useState } from "react";

const Navbar =() => {
  const [isOpen, setIsOpen] = useState(false);
    return(
      
      
      <nav className="  bg-pink-100 p-4 shadow-md text-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center w-full ">
        <h1 className=" text-5xl  text-pink-400 font-extrabold  text-center font-serif  w-full">GlamourHub &apos; Where Beauty Meets Elegance!✨💄</h1>
      </div>


      <div className=" md:hidden flex items-center">
          <button className="md:hidden  text-pink-500 text-3xl" onClick={()=>setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
          </button>
        </div>  

        

      <div className={`md:flex justify-center p-5 font-serif space-x-5 
        ${isOpen ? "block" : "hidden"} md:block`}>
       <ul className="flex justify-center p-10 pb-0 font-serif text-2xl space-x-10">
           <li>
            <Link className="text-black hover:text-pink-500" href="/">Home</Link>
             </li>
             <li>
             <Link className="text-black hover:text-pink-500" href="/about">About</Link>
           </li>
            <li>
             <Link className="text-black hover:text-pink-500" href="/contact">Contact</Link>
             </li>
       </ul>
      
       <div className=" md:hidden flex items-center">
          <button className="md:hidden  text-pink-500 text-3xl" onClick={()=>setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
          </button>
        </div>
       </div>
        </nav>
        
    
    )
  }

  export default Navbar;

