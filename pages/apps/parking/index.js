import { useState } from "react";

export default function Parkiing(){

  const [local, setLocal] = useState({
    name: '',
    numberPlate: '',
    inTime: '',
    outTime: ''
  });
  const [count,setCount] = useState(0)
  const [data,setData] = useState([])

  return(
    <div className="flex flex-col bg-[#2f3fd6ee] h-screen text-white items-center justify-center"> 
        <div className="tracking-widest font- text-5xl font-bold">PARKING</div>
        
        <div className="flex flex-row w-5/6 items-center justify-center  h-[400px] rounded-lg mt-10">
          <div  className="grid grid-cols-1 w-1/2">
            <div className="pl-2">Number Plate</div>
            <input onChange={(e)=>{
                setLocal({
                  ...local,
                  numberPlate: e.target.value
                })
            }} placeholder="Number Plate" type={'text'} maxLength={10} minLength={10} className=" border-b-[1px] rounded-md border-black numberPlate hover:bg-opacity-90 uppercase p-2 roundedd placeholder-gray-800/60 text-black text-base m-2 outline-none"></input>
            <div className="pl-2">Driver Name</div> 
            <input onChange={(e)=>{
                setLocal({
                  ...local,
                  name: e.target.value
                })
            }}  placeholder="Driver Name" type={'text'}  className=" border-b-[1px] rounded-md border-black name uppercase p-2 roundd hover:bg-opacity-90 placeholder-gray-800/60 text-black text-base m-2 outline-none"></input>
            
            <div className="w-full px-2">
              <div>Check-In Time</div>
              <input onChange={(e)=>{
                setLocal({
                  ...local,
                  inTime: e.target.value
                })
            }} className="inTime w-full mx-auto uppercase p-2 rounded-md hover:bg-opacity-90 placeholder-gray-800/60 text-black text-base m-2 outline-none" type={'time'}></input>
            </div>

            
            <div className="w-full px-2">
              <div>Check-Out Time</div>
              <input onChange={(e)=>{
                setLocal({
                  ...local,
                  outTime: e.target.value
                })
            }} className="outTime w-full mx-auto uppercase p-2 rounded-md hover:bg-opacity-90 placeholder-gray-800/60 text-black text-base m-2 outline-none" type={'time'}></input>
            </div>

            <button onClick={()=>{

setData([...data,local]);
if (local.outTime==''){setCount(count+1);}
setLocal(
                {
                  name: '',
                  numberPlate: '',
                  inTime: '',
                  outTime: ''
                }
              )
              document.querySelector(".name").value =null;
              document.querySelector(".numberPlate").value =null;
              document.querySelector(".inTime").value =null;
              document.querySelector(".outTime").value =null;
            }} className="bg-transparent text-white hover:underline transition-all duration-200 ease-in-out  uline rounded-md w-5/6 mx-auto p-2 m-2 text-base tracking-wide">Save</button>
            <button onClick={()=>{
              setLocal(
                {
                  name: '',
                  numberPlate: '',
                  inTime: '',
                  outTime: ''
                }
              )
              document.querySelector(".name").value =null;
              document.querySelector(".numberPlate").value =null;
              document.querySelector(".inTime").value =null;
              document.querySelector(".outTime").value =null;
            }} className="bg-white hover:invert text-blue-700 transition-all duration-200 ease-in-out rounded-md w-5/6 mx-auto p-2 m-2 text-base tracking-wide">Reset</button>
         
          </div>
          <div className="w-1/2 text-white  ">
            { count!=0 && <div className="w-full text-center">Vehicles in garrage: {count}</div>}
            { count==0 && <div className="w-full text-center">Garage Empty</div>}
             <div className="h-[450px]  overflow-y-auto">

              {
                data && data.map((i,index)=>(
                  <div className="flex scale-90 hover:scale-95 ease-in-out duration-200 transition-all flex-row mx-auto w-[400px] bg-gray-50 shadow-xl drop-shadow-2xl text-black m-2  rounded-lg items-center uppercase justify-between">

                  <div className="flex px-2 flex-col items-start h-full justify-end">
                      <div className="text-2xl tracking-wider capitalize">{i.name}</div>
                      <div className="text-lg  tracking-wider">{i.numberPlate}</div>
                  </div>
                  {i.outTime=='' && 
                  
                  <div className="group">
                    <div className="group-hover:opacity-80 opacity-0 absolute translate-x-7 translate-y-4 group-hover:-translate-y-5 font-semibold transition-all duration-200 ease-in-out group-hover:-translate-x-2 text-xs ">In Garage</div>
                    <svg className="w-10 h-10 opacity-80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-5.523 0-10 4.394-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.421-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8c4.419 0 8 3.582 8 8s-3.581 8-8 8zm1.08-9.204c0 .745-.549 1.008-1.293 1.008h-.463v-1.979h.64c.705 0 1.116.256 1.116.971zm3.92-1.713v5.833c0 1.151-.933 2.084-2.083 2.084h-5.834c-1.15 0-2.083-.933-2.083-2.083v-5.834c0-1.15.933-2.083 2.083-2.083h5.833c1.151 0 2.084.933 2.084 2.083zm-2.5 1.663c0-.69-.21-1.209-.628-1.557-.42-.348-1.031-.522-1.836-.522h-2.119v6.667h1.407v-2.371h.604c.823 0 1.457-.19 1.903-.57.446-.381.669-.93.669-1.647z"/></svg>
                  </div>}
                  <div className="px-2 py-1 rounded-r-lg bg-slate-200">
                      <div className="text-right text-base font-semibold"><p className="font-normal text-xs shadow-2xl">In-Time: </p>{i.inTime}</div>
                      <div className="text-right text-base font-semibold"><p className="font-normal text-xs">Out-Time: </p> {i.outTime=='' ? <p>--:--</p> : <p>{i.outTime}</p> }</div>
                  </div>
                  
                  
                  </div>
                ))
              }
              </div>
          </div>
        </div>
    </div>
  );
}