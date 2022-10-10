import Link from "next/link";

export default function GrowBiz(){
  return(
    <div className="bg-[#040335] border-b-2 border-blue-100/50">
      <h1>We are here to help you grow your business</h1>
      <div><Link href="/"><a><img src="/svg/ico/wButton.svg"></img></a></Link></div>
    </div>
  );
}