import Link from "next/link";

export default function Services(){
  return(
    <div className="text-center h-[655px]">
      <h1 className="text-black font-sans text-[55px] font-bold ">Our services made<br></br> for you?</h1>
      <div className="flex flex-row items-center justify-center space-x-10 mb-">
        
        <div className="bg-[#FFFFFF] w-[380px]  shadow-purple-400/20 rounded-2xl shadow-xl">
          <div className="flex flex-row items-center justify-center mt-8"><Ico1></Ico1></div>
          <div>
            <h3 className="text-[24px] font-bold text-black font-sans mt-8 mb-4">Task Management</h3>
            <h5 className="mb-5 text-[14px] font-medium opacity-70 font-sans">The process of managing a task through its<br></br> life cycle. It involves planning, testing,<br></br> tracking.</h5>
            <Link href="/">
              <a className="mb-7 text-[16px] text-[#0F0BC7] font-sans font-semibold flex flex-row items-center justify-center space-x-4">
                <p>Read more</p>
                <div className="flex flex-row items-center justify-center"><Arrow></Arrow></div>
              </a>
            </Link>
          </div>
        </div>


        <div className="bg-[#FFFFFF] w-[380px]  shadow-purple-400/20 rounded-2xl shadow-xl">
          <div className="flex flex-row items-center justify-center mt-8"><Ico1></Ico1></div>
          <div>
            <h3 className="text-[24px] font-bold text-black font-sans mt-8 mb-4">Design System</h3>
            <h5 className="mb-5 text-[14px] font-medium opacity-70 font-sans">The technology by which a process or<br></br> procedure is performed with minimal human<br></br> assistance.</h5>
            <Link href="/">
              <a className="mb-7 text-[16px] text-[#0F0BC7] font-sans font-semibold flex flex-row items-center justify-center space-x-4">
                <p>Read more</p>
                <div className="flex flex-row items-center justify-center"><Arrow></Arrow></div>
              </a>
            </Link>
          </div>
        </div>



<div className="bg-[#FFFFFF] w-[380px]  shadow-purple-400/20 rounded-2xl shadow-xl">
          <div className="flex flex-row items-center justify-center mt-8"><Ico1></Ico1></div>
          <div>
            <h3 className="text-[24px] font-bold text-black font-sans mt-8 mb-4">Best Practices</h3>
            <h5 className="mb-5 text-[14px] font-medium opacity-70 font-sans">Creating plan to spend your money, This<br></br> spending planer is called a budgeting tool for<br></br> business.</h5>
            <Link href="/">
              <a className="mb-7 text-[16px] text-[#0F0BC7] font-sans font-semibold flex flex-row items-center justify-center space-x-4">
                <p>Read more</p>
                <div className="flex flex-row items-center justify-center"><Arrow></Arrow></div>
              </a>
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
}

function Ico1(){
  return(
    <svg className="w-16 h-20" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="32" fill="#E3E2FD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2583 44.1859H15L16.0488 42.1859L27.1075 21.0983L28.2077 19.0005L29.3894 21.0535L31.3472 24.455L33.1075 21.0983L34.2077 19.0005L35.3894 21.0535L47.5527 42.1859L48.7039 44.1859H46.3963H42.7039H40.3963H23.2583H21H17.2583ZM24.3072 42.1859H39.2451L31.4287 28.6059L24.3072 42.1859ZM30.2471 26.5529L22.0488 42.1859H18.3072L28.2892 23.1514L30.2471 26.5529ZM32.5289 26.5081L41.5527 42.1859H45.2451L34.2892 23.1514L32.5289 26.5081Z" fill="#0F0BC7"/>
</svg>

  );
}
function Ico2(){
  return(
<svg className="w-16 h-20" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="32" fill="#E3E2FD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.6228 42.9407C29.2539 42.9799 28.8793 43 28.5 43C22.701 43 18 38.299 18 32.5C18 26.701 22.701 22 28.5 22C28.8793 22 29.2539 22.0201 29.6228 22.0593C26.2344 24.2953 23.9986 28.1366 23.9986 32.5C23.9986 36.8634 26.2344 40.7047 29.6228 42.9407ZM32.4993 42.2115C28.6841 40.6386 25.9986 36.8829 25.9986 32.5C25.9986 28.1171 28.6841 24.3614 32.4993 22.7885C36.3146 24.3614 39 28.1171 39 32.5C39 36.8829 36.3146 40.6386 32.4993 42.2115ZM32.4993 44.3465C31.2436 44.7703 29.8986 45 28.5 45C21.5964 45 16 39.4036 16 32.5C16 25.5964 21.5964 20 28.5 20C29.8986 20 31.2436 20.2297 32.4993 20.6535C33.755 20.2297 35.1 20 36.4986 20C43.4022 20 48.9986 25.5964 48.9986 32.5C48.9986 39.4036 43.4022 45 36.4986 45C35.1 45 33.755 44.7703 32.4993 44.3465ZM35.3758 22.0593C35.7447 22.0201 36.1193 22 36.4986 22C42.2976 22 46.9986 26.701 46.9986 32.5C46.9986 38.299 42.2976 43 36.4986 43C36.1193 43 35.7447 42.9799 35.3758 42.9407C38.7643 40.7047 41 36.8634 41 32.5C41 28.1366 38.7643 24.2953 35.3758 22.0593Z" fill="#0F0BC7"/>
</svg>

  );
}
function Ico3(){
  return(
    <svg className="w-16 h-20" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="32" fill="#E3E2FD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 22H36.8413V25.1587H28.1429H26.1429V27.1587V37.8413H21V22ZM26.1429 39.8413H21H19V37.8413V22V20H21H36.8413H38.8413V22V25.1587H43.9841H45.9841V27.1587V43V45H43.9841H28.1429H26.1429V43V39.8413ZM38.8413 27.1587H43.9841V43H28.1429V39.8413H36.8413H38.8413V37.8413V27.1587ZM36.8413 27.1587V37.8413H28.1429V27.1587H36.8413Z" fill="#0F0BC7"/>
</svg>

  );
}
function Arrow(){
  return(
    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5H11.5M11.5 5L7 1M11.5 5L7 9.5" stroke="#0F0BC7" stroke-width="2"/>
</svg>

  );
}