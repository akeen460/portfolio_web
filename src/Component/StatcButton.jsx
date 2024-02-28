import { Link} from "react-scroll";
import { FaArrowUp } from "react-icons/fa";


function StatcButton() {
  return (
    <>
    <button className=" fixed bottom-[100px] right-0">
        <div className="p-2 text-4xl bg-blue-600 rounded-[50%]">
       <Link to="navbarrr" smooth={true} duration={500} spy={true} activeClass="active">
          <FaArrowUp />
        </Link>
    </div>
    </button>
    
   
    </>
  )
}

export default StatcButton