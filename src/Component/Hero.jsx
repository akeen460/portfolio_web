import heroimg  from  '../assets/aseets/IMG_4146.jpg'

function Hero() {
  return (
   <>
   <section data-aos="fade-left" className=" mt-[4.5rem]" id="hero">
     <div className="flex flex-col items-center justify-between w-full  lg:flex-row" >
        <div className="flex flex-col gap-4  justify-evenly lg:gap-5 gap-y-4">
            <p className='text-2xl font-bold '>Web Development | Digital Marketing</p>
            <h1 className=' lg:text-[5rem] text-6xl font-bold  text-orange-400'>Frontend <br /> Web Designer </h1>
            <p className='text-lg font-semibold tracking-wide '>As a frontend web hero, I meticulously craft visually stunning <br /> and user-friendly interfaces that captivate and engage  <br/> visitors from the moment they land on a website.</p>
            <div className='mt-4'>
                <a href="" className='font-bold btn ' >Contact</a>
            </div>
            
            
        </div>
        <div>
            <img src={heroimg} alt=""  className=' w-[350px] rounded-[50%] lg:mt-0 mt-[4rem] ' id="heroimg"/>
        </div>
     </div>
   </section>
   
   
   </>
  )
}

export default Hero