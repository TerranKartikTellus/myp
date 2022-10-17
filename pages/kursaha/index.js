import Link from "next/link";
import Nav from "/components/kursaha/nav"
import Banner from "../../components/kursaha/Banner";
import AI from "/components/kursaha/AI"

import Opacity from "/components/animate/opacity"
import Y from "/components/animate/y"

export default function Kursaha(){


  return(
    <div className="w-screen h-full bg-transparent font-inter text-white bg-[#0B0E15]">

        <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0}>
           <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0}>
             <div className="w-full z-10 bg-transparent"><Nav></Nav></div>
           </Y>
        </Opacity>

        <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0}>
          <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0}>
           <div className="w-full mt-5"><Banner></Banner></div>      
          </Y>
        </Opacity>
                 

        <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0}>
          <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0}>          
            <div className="w-full bg-[#1C232B] px-14"><AI></AI></div>      
          </Y>
        </Opacity>

       <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0}>
          <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0}>          
            <div className="bg-[#0B0E15] h-[100px]"></div>
          </Y>
       </Opacity>

    </div>
  );
}


