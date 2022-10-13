import Link from "next/link";

export default function SmartWorkBanner(){
  return(
    <div className="space-y-10 flex flex-col items-stretch px-[120px] justify-center bg-gradient-to-br from-[#1c6bf4] to-[#0D03C3]/90 h-[848px] text-white">
      <Top></Top>
      <Bottom></Bottom>
    </div>
  );
}
function Top(){
  return(
    <div className="flex flex-row items-center justify-between space-x-2">
      <div><h1 className="text-[48px] font-bold font-sans text-white">Work smarter<br></br> with easy access for user..</h1></div>
      <div><Link href="/"><a className="text-[#0F0BC7] bg-[#FFFFFF]"><img src="/svg/ico/getStartedNow.svg"></img></a></Link></div>
    </div>
  );
}


function Bottom(){
  return(
    <div className="flex flex-row items-center justify-between ">
      <div className="space-y-4">
        <Item1></Item1>
        <Item2></Item2>
        <Item3></Item3>
      </div>
      <div><img src="/svg/smartWork.svg"></img></div>
    </div>
  );
}

function Item1(){
  return(
    <div className="flex space-x-4 flex-row items-center justify-between">
      <div><img className="w-[94px]" src="/svg/ico/1.svg"></img></div>
      <div className="w-[312px]">
        <div><h2 className="text-[20px] font-s font-bold">Create Account</h2></div>
        <div><h4 className="text-[17px] f opacity-80">After learning about your customer service needs, we will get you up </h4></div>
      </div>
    </div>
  );
}
function Item2(){
  return(
    <div className="flex space-x-4 flex-row items-center justify-between">
      <div><img className="w-[94px]" src="/svg/ico/2.svg"></img></div>
      <div className="w-[312px]">
        <div><h2 className="text-[20px] font-ss font-bold">Install tracking code</h2></div>
        <div><h4 className="text-[17px] f opacity-80">After learning about your customer service needs, we will get you up </h4></div>
      </div>
    </div>
  );
}

function Item3(){
  return(
    <div className="flex space-x-4 flex-row items-center justify-between">
      <div><img className="w-[94px]" src="/svg/ico/3.svg"></img></div>
      <div className="w-[312px]">
        <div><h2 className="text-[20px] font-s font-bold">Track analytics</h2></div>
        <div><h4 className="text-[17px] f opacity-80">After learning about your customer service needs, we will get you up </h4></div>
      </div>
    </div>
  );
}