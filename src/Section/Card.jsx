/* eslint-disable react/prop-types */




function Card(props) {
  
  return (
    <div
     
    
    
    
    className=" flex flex-col justify-between items-center text-center min-h-[250px] mt-6">
        <img src={props.cardimg}  alt=""  />
      
         <h1 className="text-xl font-bold ">{props.title}</h1>
        <p>{props.para}</p>
    </div>
  )
}

export default Card