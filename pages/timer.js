import { useState } from "react";

export default function TimerPage(){

  const [time,setTime] = useState({h:0,m:0,s:0,ms:0});
  const [interv,setInterv] = useState();
  const [status,setStatus] = useState(0);
  


  let newH = time.h;
  let newM = time.m;
  let newS = time.s;
  let newMS = time.ms;

  function Start(){
    Update();
    setInterv( setInterval(Update,10) );
    setStatus(1);
  }

function Update(){
  console.log('start :>> ');
  if(newM === 60){
    newH++;
    newM = 0;
  }
  if(newS === 60){
    newM++;
    newS=0;
  }
  
  if(newMS === 100){
    newS++;
    newMS=0;
  }
  newMS++;
  return setTime({h:newH,m:newM,s:newS,ms:newMS})
}

function Stop(){
  clearInterval(interv);
  setStatus(2);
}

function Reset(){
  clearInterval(interv);
  setStatus(0);
  setTime({h:0,m:0,s:0,ms:0});
}
function Resume(){
  Start();
}
  return (
  <div className="text-center bg-[#0D03C3] text-white h-screen space-y-5 flex flex-col items-center justify-center">
    {time&& <Timer time={time}></Timer>}

    <div className="flex flex-row space-x-4">
      <button  onClick={Start} disabled={status!= 0 ? 1 : 0 } className="disabled:opacity-50 bg-white text-[#0D03C3] p-4 hover:bg-opacity-80">Start</button>
      <button  onClick={Reset} disabled={status!= 2 ? 1 : 0 } className="disabled:opacity-50 bg-white text-[#0D03C3] p-4 hover:bg-opacity-80">Reset</button>
      <button  onClick={Resume} disabled={status!= 2 ? 1 : 0 } className="disabled:opacity-50 bg-white text-[#0D03C3] p-4 hover:bg-opacity-80">Resume</button>
      <button  onClick={Stop}  disabled={status!= 1 ? 1 : 0 } className="disabled:opacity-50 bg-white text-[#0D03C3] p-4 hover:bg-opacity-80">Pause</button>

    </div>
  </div>
);
}

function Timer({time}){
  return(
    <div>
    <div className="text-2xl flex flex-row items-center justify-center space-x-1 ">
      <h1>HH</h1> 
      <h1>:</h1>
      <h1>MM</h1> 
      <h1>:</h1>
      <h1>SS</h1> 
      <h1>:</h1>
      <h1>MS</h1>
    </div>
    <div className="tracking-wider opacity-90 text-2xl flex flex-row items-center justify-center space-x-1 ">
      <h1>{time.h<10 ? "0"+time.h : time.h}</h1> 
      <h1>:</h1>
      <h1>{time.m<10 ? "0"+time.m : time.m}</h1> 
      <h1>:</h1>
      <h1>{time.s<10 ? "0"+time.s : time.s}</h1> 
      <h1>:</h1>
      <h1>{time.ms<10 ? "0"+time.ms : time.ms}</h1>
    </div>
    </div>
  );
}




function StartIco(){
  return(<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 18h-4v-12h4v12z"/></svg>)
}

function PauseIco(){
  return(<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" width="24" height="24" viewBox="0 0 24 24"><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/></svg>)
}

function ContIco(){
  return(<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" width="24" height="24" viewBox="0 0 24 24"><path d="M6 0l12 12-12 12z"/></svg>)
}

function ResetIco(){
  return(<svg width="24" height="24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.458 9.012c-.297.947-.458 1.955-.458 3 0 5.52 4.481 10 10 10 5.52 0 10-4.48 10-10 0-5.519-4.48-10-10-10-2.121 0-4.083.668-5.703 1.796l1.703 2.204h-6.58l1.935-6.012 1.718 2.223c1.958-1.389 4.346-2.211 6.927-2.211 6.623 0 12 5.377 12 12s-5.377 11.988-12 11.988-12-5.365-12-11.988c0-1.036.132-2.041.379-3h2.079zm10.35-3.012c.292.821.375 1.346 1.01 1.609.637.264 1.073-.052 1.854-.423l1.142 1.142c-.373.787-.687 1.218-.423 1.854.262.634.784.716 1.609 1.009v1.617c-.816.29-1.347.375-1.61 1.01-.264.636.052 1.071.424 1.853l-1.142 1.142c-.79-.375-1.219-.687-1.85-.424-.639.265-.723.793-1.014 1.611h-1.616c-.292-.821-.375-1.347-1.01-1.61-.637-.264-1.072.052-1.854.423l-1.142-1.142c.366-.771.689-1.212.423-1.854-.263-.635-.793-.719-1.609-1.009v-1.617c.817-.29 1.346-.373 1.609-1.009.264-.637-.051-1.07-.423-1.854l1.142-1.142c.788.374 1.218.687 1.854.423.635-.263.719-.792 1.01-1.609h1.616zm-.808 8c-1.105 0-2-.896-2-2 0-1.105.895-2.001 2-2.001 1.104 0 2 .896 2 2.001 0 1.104-.896 2-2 2z"/></svg>)
}