import Link from "next/link";

export default function SmartWorkBanner(){
  return(
    <div className="bg-gradient-to-br from-[#2272FF] to-[#0D03C3]/90">
      <Top></Top>
      <Bottom></Bottom>
    </div>
  );
}
function Top(){
  return(
    <div className="flex flex-row items-center justify-between space-x-2">
      <div><h1>Work smarter with easy access for user..</h1></div>
      <div><Link href="/"><a className="text-[#0F0BC7] bg-[#FFFFFF]">Get Started Now</a></Link></div>
    </div>
  );
}


function Bottom(){
  return(
    <div className="flex flex-row items-center justify-between">
      <div>
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
    <div className="flex flex-row items-center justify-between">
      <div><img src="/svg/ico/1.svg"></img></div>
      <div>
        <div><h2>Create Account</h2></div>
        <div><h4>After learning about your customer service needs, we will get you up </h4></div>
      </div>
    </div>
  );
}
function Item2(){
  return(
    <div className="flex flex-row items-center justify-between">
      <div><img src="/svg/ico/2.svg"></img></div>
      <div>
        <div><h2>Install tracking code</h2></div>
        <div><h4>After learning about your customer service needs, we will get you up </h4></div>
      </div>
    </div>
  );
}

function Item3(){
  return(
    <div className="flex flex-row items-center justify-between">
      <div><img src="/svg/ico/3.svg"></img></div>
      <div>
        <div><h2>Track analytics</h2></div>
        <div><h4>After learning about your customer service needs, we will get you up </h4></div>
      </div>
    </div>
  );
}