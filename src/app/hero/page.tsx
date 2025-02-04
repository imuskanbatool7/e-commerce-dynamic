
"use client"

import Image from "next/image";



export default function  Hero (){
  return(
    <section className="relative w-full h-[80vh] sm:h-[90vh] bg-pink-100 flex items-center justify-center text-center">
      <div  className="absolute inset-0 opacity-70">
      <Image src="/images/hero.png" 
      alt="hero sec background" 
      width={1920}  // Adjust based on your image size
      height={1080} // Adjust based on your image size
      className="object-cover w-full h-full"/>
    </div>


    <div className="relative z-10 text-white px-4 sm:px-8 md:px-12">
      <h1  className="text-4xl sm:text-5xl font-bold leading-tight mb-4"> Beauty Awaits You</h1>
      <p className="text-lg sm:text-xl mb-6">Find the perfect makeup for every occasion and every mood.</p>


      <div className="flex justify-center gap-6">
        <button className="bg-pink-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-pink-600 transition ease-in-out" onClick={()=>window.location.href="/services"}>
          Shope Now
        </button>
        <button className="bg-gray-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition ease-in-out" >
          Explore More
        </button>
      </div>
    </div>
    </section>
  )
}
