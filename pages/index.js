import Nav from "../components/1. navbar"
import Banner from "../components/2. banner"
import Dash from "../components/3. dashboard"
import Org from "../components/4. organizations"
import Services from "../components/5. services"
import GetStarted from "../components/6. getStarted"
import SmartWorkBanner from "../components/7. smartWork"
import Price from "../components/8. pricing"
import Review from "../components/9. review"
import GrowBiz from "../components/10. bannerGrowBiz"
import Footer from "../components/11. footer"
import Opacity from "../components/animate/opacity"
import Y from "../components/animate/y"
import HeadTag from "../components/Head"

export default function Home() {


  let d = {
  '2020-01-01': 4,
  '2020-01-02': 4,
  '2020-01-03': 6,
  '2020-01-04': 8,
}

let day = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

// console.log(d.getDay());

for (const key of Object.keys(d)) {
console.log(key + ":" + d[key])
    let date = new Date(key);
    console.log(day[date.getDay()], date.getDay()+d[key] );

};
  return (
    <div className="w-screen bg-transparent font-inter relative">
      <img className=" w-full z-0 " src="/svg/blueBgStyle.svg"></img>
      <HeadTag ></HeadTag>
      
      <div className="absolute w-full top-0">
       <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0}>
                <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0}>
                  <div className="w-full z-10 bg-transparent pt-12"><Nav></Nav></div>
                </Y>
      </Opacity>
      <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0.1}>
                <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0}>
                  <div className="w-full z-"><Banner></Banner></div>
               </Y>
      </Opacity>

      <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0.2}>
                <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0.2}>
                  <div className="w-full z-10"><Dash></Dash></div>
               </Y>
      </Opacity>
                 
      <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0.3}>
                <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0.3}>
                  <div className="w-full z-10"><Org></Org></div>
               </Y>
      </Opacity>
      
      <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0}>
                <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0}>
                  <div className="w-full z-10"><Services></Services></div>
               </Y>
      </Opacity>
      
      <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0.3}>
                <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0.3}>
                  <div className="w-full z-10"><GetStarted></GetStarted></div>
               </Y>
      </Opacity>
      
      <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0.3}>
                <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0.3}>
                  <div className="w-full z-10"><SmartWorkBanner></SmartWorkBanner></div>
               </Y>
      </Opacity>
      
      <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0.3}>
                <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0.3}>
                  <div className="w-full z-10"><Price></Price></div>
               </Y>
      </Opacity>
      
      <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0.3}>
                <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0.3}>
                   <div className="w-full z-10"><Review></Review></div>
               </Y>
      </Opacity>

      <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0.3}>
                <Y initial={ "10px" } final={ "0px" } duration={0.3} delay={0.3}>
                   <div className="w-full  z-10"><Footer></Footer></div>
               </Y>
      </Opacity>
      
      </div>
    </div>
  )
}
