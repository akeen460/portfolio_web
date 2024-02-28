import Fotter from "./Component/Fotter";
import Hero from "./Component/Hero";
import Interest from "./Component/Interest";
import Latset from "./Component/Latset";
import Navigation from "./Component/Navigation";
import Services from "./Component/Services";
import StatcButton from "./Component/StatcButton";

export default function App() {
  return (
  <>
   
    <Navigation></Navigation>
    <Hero></Hero> 
    <Services></Services> 
    <Interest></Interest>
    <Latset></Latset>
    <StatcButton></StatcButton>
    <Fotter></Fotter>
  </>
  )
}