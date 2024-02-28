
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/aseets/logos/react.png'
import img2 from '../assets/aseets/logos/vue.png'
import img3 from '../assets/aseets/logos/angular.png'
import img4 from '../assets/aseets/logos/wordpeess.png'
import img5 from '../assets/aseets/logos/js2.png'

function Services() {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const imgset = [ img1,img2,img3,img4,img5]
  return (
   <>
   <section className="  w-[80%] m-auto my-24" data-aos="zoom-in">
         <h1 className="heading">Services</h1>
          <div className="">
        <Slider {...settings} className="m-auto my-3  h-44">
            
            

            { imgset.map((d,index)=>(
                <div key={index} className="grid lg:grid-cols-3 grid-cols-1 lg:w-full w-[80%]" >
                <img src={d} alt="" className=" m-auto py-[4rem] lg:w-[100px]  w-[60px]" />
                 
                </div>
                
            ))}
        
        
      </Slider>
   </div>

   </section>
  
  
   
   </>
  )
}

export default Services;

// const data = [
//   {
//     name: `John Morgan`,
//     img: `/students/John_Morgan.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Ellie Anderson`,
//     img: `/students/Ellie_Anderson.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Nia Adebayo`,
//     img: `/students/Nia_Adebayo.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Rigo Louie`,
//     img: `/students/Rigo_Louie.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: `/students/Mia_Williams.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
  
// ];

