import Link from "next/link";
export default function AI(){
  return(
    <div className="">
      <div className=" flex flex-row items-center justify-start space-x-3 pt-3 ">
        <div className="text-[64px] font-sans font-bold">AI</div>
        <div className="text-[64px] font-sans font-bold text-[#0070E7]">framework</div>
      </div>

      <div className="flex flex-row items-center justify-between px-5">
        <div className="space-y-4">
          <div className="scale-90 border-l-[1px] border-white pl-5 w-[536px]">
            <div className="font-sans text-[24px] font-semibold ">Personalisation</div>
            <div className="font-sans tracking-wide text-[24px] opacity-75 font-light     ">The advanced intelligent system assists in reaching out to customers and increasing conversion funnel.</div>
          </div>

          <div className="scale-90 border-l-[1px] border-white pl-5 w-[536px]">
            <div className="font-sans text-[24px] font-semibold ">Efficiency</div>
            <div className="font-sans tracking-wide text-[24px] opacity-75 font-light     ">Our data models help improve the content. Real-time delivery insights are monitored using AI and provide meaningful actions.</div>
          </div>


          <div className="scale-90 border-l-[1px] border-white pl-5 w-[536px]">
            <div className="font-sans text-[24px] font-semibold ">Automation</div>
            <div className="font-sans tracking-wide text-[24px] opacity-75 font-light     ">Send email at scale using code written in your preferred programming language, such as Python, Java, or Curl.</div>
          </div>

        </div>

  
        <div>
          <img src="/kursha/ai.svg" className="w-[600px]"></img>
        </div>
      </div>
    </div>
  );
}