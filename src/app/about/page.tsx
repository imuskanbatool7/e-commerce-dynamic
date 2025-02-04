
import CommentSec from "@/components/Comment"
import Image from "next/image"

export default function About(){
    return(
        <section className="bg-gray-100 ">
            
            <div className="container  mx-auto px-4 md:px-8 p-4">
            <div className="bg-pink-50 shadow-lg rounded-lg p-8 md:p-10 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center font-serif text-pink-500 ">About</h1>
            <h2 className="text-2xl text-center font-semibold font-mono"> The GlamourHub </h2>
            
            <Image  className="flex justify-center mb-6 items-center mx-auto rounded-lg"
              src="/images/about.jpg" alt="about" 
              width={500} 
              height={500} 
               priority/>
                <p className="text-gray-800 font-medium leading-relaxed text-center font-sans">
                Welcome to GlamourHub, your one-stop shop for Maybelline makeup.  
        We bring you high-quality, trendy, and affordable beauty products to enhance your style.  
        Shop with ease and discover your perfect look!
                </p>
            </div>
           <CommentSec/>
            </div>
            
        </section>

    )
};