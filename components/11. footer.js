import Link from "next/link";

export default function Footer(){
  return(
    <div className=" bg-[#040335] text-white   ">

    <div className="w-full bg-[#040335] py-3 text-center border-b-[1px] border-blue-100/30">
      <h1 className="text-[60px] font-extrabold font-sans pt-20 ">We are here to help<br></br> you grow your business</h1>
      <Link href="/"><a className="flex hover:hue-rotate-60 flex-row items-center justify-center pt-10 pb-10"><img src="/svg/ico/wButton.svg"></img></a></Link>
    </div>

    <div className="pb-20 pt-5 w-full bg-[#040335] flex flex-row items-center justify-start text-center border-b-[1px] border-blue-50/40">
      <div className="pl-32 text-left -translate-y-7 bg-re00 w-2/6 flex flex-col items-start h-full justify-start bgred-400">
        <div className="text-[20px] font-extrabold font-sans  ">SASSIFY</div>
        <div className="text-[16px] w-[189px] text-base font-light text-left font-sans pt-5 opacity-80">Data visualization, and expense management for your business.</div>
      </div>
      
      
      <div className=" bgred-700 w-4/6 h-full flex flex-row items-start justify-start">


      <div className=" flex flex-col items-start justify-start text-left bg-re00 w-2/6">
        <div className="text-[18px] font-bold font-sans pt-10 opacity-80 ">Product</div>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Digital Invoice</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Insights</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Reimbursements</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Virtual Assistant</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Artificial Intelligence</a></Link>
      </div>


     <div className=" flex flex-col items-start justify-start text-left bg-re00 w-2/6">
        <div className="text-[18px] font-bold font-sans pt-10 opacity-80 ">Company</div>
        <Link href=""><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">About Us</a></Link>
        <Link href=""><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Newsletters</a></Link>
        <Link href=""><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Our Partners</a></Link>
        <Link href=""><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Career</a></Link>
        <Link href=""><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Contact Us</a></Link>
      </div>

      <div className=" flex flex-col items-start justify-start text-left bg-re00 w-2/6">
        <div className="text-[18px] font-bold font-sans pt-10 opacity-80 ">Resources</div>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Pricing</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Blog</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">FAQ</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Events</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Ebook & Guide</a></Link>
      </div>

      <div className="pr-20 flex flex-col items-start justify-start text-left bg-re00 w-2/6">
        <Link href="/"><a className="text-[18px] font-bold font-sans pt-10 opacity-80">Follow us</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">LinkedIn</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Twitter</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Instagram</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">Facebook</a></Link>
        <Link href="/"><a className="text-[16px] w-[159px] text-base font-light text-left font-sans pt-4 opacity-80">YouTube</a></Link>
      </div>

      </div>
    </div>


    <div className="text-[16px]  text-base font-light text-center font-sans py-3 opacity-90">
      Copyright @ Kartik Bansal 2022. All Rights Reserved.
    </div>
    
    </div>
  );
}
