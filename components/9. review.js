export default function Review(){
  return(
    <div className="bg-[#EEEEEE]/80">
      <h1  className="pt-10 text-[50px] text-center font-bold">What people are saying about us</h1>
      
      
      <div className="flex flex-row items-center justify-center space-x-3 pt-10 pb-28">
        
        
        <div className="w-[350px] h-[350px] bg-white rounded-xl shadow-xl px-10 py-16">
          <img src="/svg/ico/stars.svg"></img>
          <p className="text-[17px] font-medium text-black/90 font-sans tracking-tight my-8 w-[270px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>

          <div className="flex flex-row items-center justify-start">
            <div><img src="/svg/ico/man.svg"></img></div>
            <div>
              <div className="text-[16px] font-sans font-bold">Kartik Bansal</div>
              <div className="text-[14px] font-normal">Kota, Rajasthan</div>
            </div>
          </div>
        </div>

         <div className="w-[350px] h-[350px] bg-white rounded-xl shadow-xl px-10 py-16">
          <img src="/svg/ico/stars.svg"></img>
          <p className="text-[17px] font-medium text-black/90 font-sans tracking-tight my-8 w-[270px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>

          <div className="flex flex-row items-center justify-start">
            <div><img className="hue-rotate-30" src="/svg/ico/man.svg"></img></div>
            <div>
              <div className="text-[16px] font-sans font-bold">Anil Dvivedi</div>
              <div className="text-[14px] font-normal">New Delhi</div>
            </div>
          </div>
        </div>

         <div className="w-[350px] h-[350px] bg-white rounded-xl shadow-xl px-10 py-16">
          <img src="/svg/ico/stars.svg"></img>
          <p className="text-[17px] font-medium text-black/90 font-sans tracking-tight my-8 w-[270px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>

          <div className="flex flex-row items-center justify-start">
            <div><img className="hue-rotate-60" src="/svg/ico/man.svg"></img></div>
            <div>
              <div className="text-[16px] font-sans font-bold">Srijan Sirasikar</div>
              <div className="text-[14px] font-normal">Bhadrak</div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}