import Link from "next/link";

export default function GetStarted(){
  return(
    <div className="flex flex-row items-center justify-center space-x-1 bg-[#F6F5FF] h-[680px]">
      <div>
        <h1 className="text-[50px] font-bold font-sans w-[516px]">Powerful and easy to use SaaS platform</h1>
        <h3 className="w-[512px] text-[18px] font-medium tracking-tight">Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.</h3>
        <Link href="/"><a className="h-5/6 mt-5 bg-red400"><img className="w-[200px] mt-5 hover:hue-rotate-60 transition-all duration-150 ease-in-out" src="/svg/ico/getStartedNow.svg"></img></a></Link>
      </div>
      <div className="my-auto flex flex-col items-center justify-center bg-red300"><img className="translate-y-14 my-auto bgred-400 h-[650px]" src="/svg/conversion.svg"></img></div>
    </div>
  );
}