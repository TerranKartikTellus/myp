import { useState } from "react";

export default function Muil({data}){

  // const data = [ 'India' , 'China' , 'USA' , 'Japan' , 'Russia' , 'Nepal','Aus','Pakistan','Mexico'];
  const [selected, setSelected] = useState([]);
  function isSelected(i){
    return selected.includes(data[i]);
  }
  return(
    <div className="flex flex-col bg-[#2056d3dd] h-screen text-white items-center justify-center">

        <div className="flex flex-row items-center justify-center space-x-4">
          <div>Selected</div>
          <div className="rounded-xl text-center shadow-2xl drop-shadow-2xl w-[200px]  text-xl font-sans overflow-y-auto font-semibold tracking-wide h-[350px] px-2 py-4  flex flex-col items-start justify-start bg-gray-200 ">
              {
                selected && selected.map((i,index)=>(
                <div key={index} className="p-1 m-1 relative text-black w-[180px] text-center bg-slate-50/70 scale-90 hover:scale-95 transition-all duration-200 ease-in-out rounded-xl shadow-xl">
                <button onClick={(e)=>{
                  let arr = selected;
                  arr = arr.filter( (i)=>{ return selected[index] != i } );
                  setSelected(arr);
                }} 
                
                className="absolute top-1.5 left-2 hover:opacity-80"><svg className="fill-red-600 bg-white rounded-full w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" fill-rule="nonzero"/></svg></button>
                <button className="">
                  {i}
                </button>
                </div>
                ))
              }
              {
                selected.length==0 && <div className="text-center h-full text-gray-500 text-xs flex flex-col items-center justify-center w-full">Empty</div>
              }
          </div>
          <div className="rounded-xl shadow-2xl drop-shadow-xl text-xl font-sans overflow-y-auto font-semibold tracking-wide h-[350px] px-2 py-4  flex flex-col items-start justify-start bg-gray-200 ">
            {
              data.map((i,index)=>(
                <div key={index} className="scale-90 hover:scale-95 transition-all duration-200 ease-in-out p-1 m-1 text-black w-[200px] text-center bg-white/60 rounded-xl shadow-xl">
                <button disabled={isSelected(index)} onClick={(e)=>{ setSelected([...selected,i]) }} className="disabled:line-through">
                  {i}
                </button>
                </div>
              ))
            }
          </div>
          <div>Selection</div>
        </div>
    </div>
  );
}

export async function getServerSideProps(context) {
   const res = await fetch(`http://127.0.0.1:8000/`)
  const resp = await res.json();
 const data = resp.countries;
 console.log('resp: ',res);
  // Pass data to the page via props
  return { props: { data } }
}