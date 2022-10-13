import GetStartedButton from "./button/GetStartedButton";

export default function Price(){
  return(
    <div className="bg-[#EEEEEE]/80">
        <h1 className="text-center pt-14 text-[50px] font-bold font-sans">Get results first. Pick a plan later.</h1>
        <Plan></Plan>
    </div>
  );
}

function Plan(){
  return(
    <div>
      <div className="flex flex-row items-center justify-center">
        <button><img className="my-10" src="/svg/monAnn.svg"></img></button>
        <img src="/svg/ico/planArrow.svg"></img>
      </div>


      <Cards></Cards>
    </div>
  );
}

function Cards(){
  return(
    <div className="flex flex-row items-center justify-center space-x-3  pb-20">
      <div className="rounded-[14px] px-5 py-8 bg-[#FFFFFF]  h-[570px] shadow-lg hover:shadow-md w-[384px] transition-shadow duration-150 ease-in-out flex flex-col items-center justify-between">
        <div className="bg-[#FFFFFF] w-full h-full">

              <div className="px-3">
                <h3 className="text-[24px] font-black fon translate-y-2 text-black ">Pro</h3>
                <div className="flex flex-row items-end justify-start">
                <strong className="text-[56px] font-sans font-bold text-[#0F0BC7]">$30</strong>
                <p className="text-[16px] font-sans -translate-y-4 font-medium opacity-60">/monthly</p>
                </div>
                <p className="text-[16px] font-normal">For Small Business</p>
              </div>
                  <div className="text-transparent w-4/5 bg-black/40 h-[1px] translate-x-2 my-5">.</div>
              <div className="px-3 space-y-2">
                  <div className=" flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tick.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">3  Social profiles</p>
                  </div>

                  <div className="flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tick.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">12 Team members</p>
                  </div>

                  <div className="flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tick.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">5 Competitors per profile</p>
                  </div>
              </div>
        </div>
        <div>
          <GetStartedButton blue={1}></GetStartedButton>
        </div>
      </div>


  <div className="rounded-[14px] px-5 py-8 h-[590px] text-white bg-gradient-to-br from-[#2272FF] to-[#0D03C3] transition-shadow duration-150 ease-in-out   shadow-lg hover:shadow-md w-[384px]  flex flex-col items-center justify-between">
        <div className=" w-full h-full">

              <div className="px-3">
                <h3 className="text-[24px] font-black fon translate-y-2 tex ">Popular</h3>
                <div className="flex flex-row items-end justify-start">
                <strong className="text-[56px] font-sans font-bold text-white">$60</strong>
                <p className="text-[16px] font-sans -translate-y-4 font-medium opacity-90">/monthly</p>
                </div>
                <p className="text-[16px] font-normal">For Medium businessess</p>
              </div>
                  <div className="text-transparent w-4/5 bg-white/40 h-[1px] translate-x-2 my-5">.</div>
              <div className="px-3 space-y-2">
                  <div className=" flex flex-row items-center justify-start space-x-3">
                    <img className="" src="/svg/ico/tickWhite.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">3  Social profiles</p>
                  </div>

                  <div className="flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tickWhite.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">12 Team members</p>
                  </div>

                  <div className="flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tickWhite.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">5 Competitors per profile</p>
                  </div>
                  

                  <div className="flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tickWhite.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">Hashtags per profile</p>
                  </div>
                  
              </div>
        </div>
        <div>
          <GetStartedButton white={1}></GetStartedButton>
        </div>
      </div>

 

     <div className="rounded-[14px] px-5 py-8 bg-[#FFFFFF]  h-[570px] shadow-lg hover:shadow-md w-[384px] transition-shadow duration-150 ease-in-out  flex flex-col items-center justify-between">
        <div className="bg-[#FFFFFF] w-full h-full">

              <div className="px-3">
                <h3 className="text-[24px] font-black fon translate-y-2 text-black ">Advanced</h3>
                <div className="flex flex-row items-end justify-start">
                <strong className="text-[56px] font-sans font-bold text-[#0F0BC7]">$100</strong>
                <p className="text-[16px] font-sans -translate-y-4 font-medium opacity-60">/monthly</p>
                </div>
                <p className="text-[16px] font-normal">For Enterprices</p>
              </div>
                  <div className="text-transparent w-4/5 bg-black/40 h-[1px] translate-x-2 my-5">.</div>
              <div className="px-3 space-y-2">
                  <div className=" flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tick.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">3  Social profiles</p>
                  </div>

                  <div className="flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tick.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">12 Team members</p>
                  </div>

                  <div className="flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tick.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">5 Competitors per profile</p>
                  </div>

                  <div className="flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tick.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">Hashtags per profile</p>
                  </div>

                  <div className="flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tick.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">3  Social profiles</p>
                  </div>

                  <div className="flex flex-row items-center justify-start space-x-3">
                    <img src="/svg/ico/tick.svg"></img>
                    <p className="text-[14px] font-medium font-sans ">12 Team members</p>
                  </div>
              </div>
        </div>
        <div>
          <GetStartedButton blue={1}></GetStartedButton>
        </div>
      </div>
    </div>
  );
}