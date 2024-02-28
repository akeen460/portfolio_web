import Card from "../Section/Card"
import { useEffect} from "react";
import cardimg1 from '../assets/aseets/skills/art-direction.png'
import cardimg2 from '../assets/aseets/skills/product-design.png'
import cardimg3 from '../assets/aseets/skills/visual-design.png'
import Aos from "aos";
import 'aos/dist/aos.css'
function Interest() {

    useEffect(()=>{
        Aos.init({
            duration:800,
            once:true
        })
    })
    
  return (
   <>
   <section className="w-full h-fit">
       <h1 className="heading">Interest</h1>
       <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0" 
     
       
       className="grid grid-cols-1 gap-3 my-16 lg:grid-cols-3">
        {data.map((d , index)=>(
            <Card   key={index} cardimg={d.img} title={d.title} para={d.para} className='mt-6'></Card> 
        ))}
          
       </div>
   </section>
   
   </>
  )
}

export default Interest


const data =[
    {id:1, img: cardimg1, title:"Web Design", para:'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'},
    {id:2, img: cardimg2, title:"Digital Marketing", para:'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'},
    {id:3, img: cardimg3, title:"Graphic Design", para:'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'},

]