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

export default function Home() {
  return (
    <div className="w-screen bg-transparent font-inter relative">
      <img className=" w-full z-0 " src="/svg/blueBgStyle.svg"></img>
      
      <div className="absolute w-full top-0">
       <Opacity initial={ 0 } final={ 1 } duration={0.3} delay={0}>
                <Y initial={ "100px" } final={ "0px" } duration={0.3} delay={0}>
                  <div className="w-full z-10 bg-transparent pt-12"><Nav></Nav></div>
                </Y>
      </Opacity>
      <div className="w-full z-"><Banner></Banner></div>
      <div className="w-full z-10"><Dash></Dash></div>
      <div className="w-full z-10"><Org></Org></div>
      <div className="w-full z-10"><Services></Services></div>
      <div className="w-full z-10"><GetStarted></GetStarted></div>
      <div className="w-full z-10"><SmartWorkBanner></SmartWorkBanner></div>
      <div className="w-full z-10"><Price></Price></div>
      <div className="w-full z-10"><Review></Review></div>
      {/* <div className="w-full z-10"><GrowBiz></GrowBiz></div> */}
      <div className="w-full  z-10"><Footer></Footer></div>
      </div>
      {/* </div> */}
    </div>
  )
}
