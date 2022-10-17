import Link from "next/link";

export default function Banner(){

  return(
    <div className="w-full flex flex-col items-center justify-center">

    <div className=" text-center text-[72px] font-bold font-sans">
      Grow your Business<br></br>
with Email Automation
    </div>

    <img src="/kursha/banner.svg" className="mt-10"></img>
    <Link href="/"><a className="my-20 hover:opacity-80 transition-opacity duration-200 ease-in-out"><img src="/kursha/getStarted.svg"></img></a></Link>
    </div>
  );
}