import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import {motion} from 'framer-motion'
import Aos from "aos";
import 'aos/dist/aos.css'


function Navigation() {
    useEffect(()=>{
        Aos.init({
            duration:800,
            once:true
        })
    })
    const linkArr = [
        { link : "Home"},
        { link : "Service"},
        { link : "Projects"},
        { link : "Testimonial"},
        { link : "Contact"}
    ]
    const[ toggle, settoggle] = useState(false)

    function togglebtn(){
        settoggle(!toggle)
        console.log(toggle);
        
       
    }
    

  return (

   <>
    <nav data-aos="fade-down" className="relative py-2 bg-slate-100" id="navbarrr">
        <div className=" flex  flex-row w-full h-fit  justify-between items-center gap-[8rem]">
            <h2 className="text-4xl font-bold text-orange-400 "> Port<span className="italic text-blue-500 ">folio</span></h2>
            <ul className=" md:flex  flex-row justify-end items-center  gap-[4rem] hidden">
                {linkArr.map(({link, index})=>(
                    <li key={index} className="text-2xl font-semibold transition-all duration-500 ease-linear delay-600 hover:translate-y-1"><a href="">{link}</a></li>
                ))}
            </ul>
            <i className="flex md:hidden " id="menubug"  onClick={togglebtn}><CiMenuBurger /></i>
        </div>
        {toggle && 
        
            <motion.ul 
                    initial={{
                        x:-100,
                        y:0
                    }}
                    animate={{
                        x:-30,
                        y:0
                    }}
                  
                   
        
        className=" flex  md:hidden flex-col justify-start items-center  gap-[2rem]  bg-slate-400 w-[60%] py-2 absolute " id="toggleNav">
                {linkArr.map(({link, index})=>(
                    <li key={index} className="text-2xl font-semibold transition-all duration-500 ease-linear delay-600 hover:translate-y-1"><a href="">{link}</a></li>
                ))}
        </motion.ul>
       
          }
       
    </nav>
   </>
  )
}

export default Navigation