export default function Banner(){
  return(
    <div className="z-50 bg-transparent text-white">
      
      <h1 className="z-50 bg-transparent text-center text-[72px] font-extrabold font-sans capitalize pt-28 ">The fastest way for startups <br></br>to do any analysis</h1>
      <h3 className="z-50 bg-transparent text-center text-[20px] pt-10 opacity-75 font-sans">Equals is the only spreadsheet with built-in connections to any<br></br> database, versioning, and collaboration.</h3>
      <form>

      <div className="mt-10 mx-auto flex flex-row items-center justify-between px-2 bg-white rounded-l-full rounded-r-full w-[575px] h-[67px]">
        <img className="ml-4" src="/svg/ico/msg.svg"></img>
        <input className="w-[300px]  bg-red400 placeholder-gray-800 outline-none text-gray-700" placeholder="Enter your email"></input>
        <button className="hover:hue-rotate-30 transition-all duration-200 ease-in-out" >
          <img className="" src="/svg/ico/start.svg"></img>
        </button>
      </div>
      
      </form>
    </div>
  );
}