import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";



const Footer =() =>{
  return(
      <footer className="bg-pink-200 text-black py-6 ">
          <div className="container mx-auto px-5 space-y-6"> 
              {/* title */}
              <div className="text-left "> 
                  <h1 className="text-xl font-bold font-mono text-pink-500">&quot;Glow Up with Confidence ✨&quot;</h1>
                  <p className="text-md text-black font-mono  ">&quot;Beauty begins the moment you decide to be yourself. Enhance it with the perfect touch. 💄💖&quot;</p>
              </div>
              <br />
              {/* links to social media */}
              <div className="flex justify-end space-x-4 ">
                <a href="https://www.linkedin.com/in/muskan-batool-15584b277"
                target="_blank"
                rel="noopener noreferrer">
                   <FaLinkedin size={24}  className="hover:bg-blue-600"/>
                </a>
                 <a href="https://github.com/imuskanbatool7"
                target="_blank"
                rel="noopener noreferrer">
                  <FaGithub size={24} className="hover:bg-indigo-200" />
                </a>
                 <a href="mailto:muskanbatool355@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                    <FaEnvelope size={24} className="hover:bg-blue-400" />
                </a>
              </div>
              {/* personal info */}
              <div className="text-center  border-t mt-6 pt-4 border-pink-500">
              <p className="text-sm font-mono text-pink-800"> Crafted with ❤️ By Muskan Batool</p>
              </div>
             </div>
      </footer>
  )
}
export default Footer;