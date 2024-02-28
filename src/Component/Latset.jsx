import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

function Latset() {
  return (
    <>
    <section className="w-full m-auto  h-fit"  data-aos="zoom-in-up">
       <h1 className="heading">Latest Work</h1>
        <div className="flex flex-col items-center mt-20  lg:flex-row lg:justify-evenly">
         <Recta></Recta>   
         <Recta></Recta>    
         <Recta></Recta>   
       </div>
       
   </section>
    
    </>
  )
}

export default Latset


export function Recta() {
  return (
    <div className="w-[320px] h-[250px] bg-slate-300 rounded-xl flex gap-2 flex-col justify-center items-center my-4">
      <p className="text-2xl">Coming Soon</p>
      <HiOutlineArrowPathRoundedSquare className="text-5xl animate-spin" />
    </div>
  );
}