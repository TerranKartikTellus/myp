import { useState } from "react";
import { data } from "/data/Lib1/data";
import ReactMarkdown from 'react-markdown'
import reactStringReplace from 'react-string-replace';


export default function Recordsss(){
const [view,setView] = useState({
  para: "",
  id: null,
  annotations: []
});

function ParaGraph(str,annotations){
  for(let i=0;i<annotations.length;i++){
    let n =annotations[i][0];
    str += reactStringReplace(str,annotations[i][0], (match, i) => (
        <button className="bg-yellow-500">---</button>
    ) )
  }
  console.log(str);
  return str;
}
  return(
    <div className="h-screen p-5 flex flex-row items-start justify-between">
      <div>
        <div className="text-5xl">Records</div>
        <div>
          {
            data.map((i,index)=>(
              <button key={index} onClick={()=>{setView({
                id: index,
                para: i.para,
                annotations: i.annotations
              });
              console.log(i.annotations[0][0]);
              }} className="w-[300px] flex flex-row items-start justify-start space-x-3 bg-gray-900 text-white hover:text-white/90 p-3 my-3">
                <div>{index+1}</div>
                <div className="truncate">{i.para}</div>
              </button>
            ))
          }
        </div>
      </div>

      <div className="">
        <div className="text-5xl">View</div>
        <div>
         
              <div  className="w-[600px] flex flex-row items-start justify-start space-x-3 bg-gray-900 text-white  p-3 my-3">
                <div>{view.id+1}</div>
                <ReactMarkdown className="">{ParaGraph(view.para,view.annotations)}</ReactMarkdown>
              </div>
           
        </div>
      </div>

      <div>
        <div className="text-5xl">Records</div>
        <div>
          {
            view.annotations.map((i,index)=>(
              <button key={index} className="w-[300px] flex flex-row items-start justify-start space-x-3 bg-gray-900 text-white hover:text-white/90 p-3 my-3">
                <div>{index+1}</div>
                <div className="truncate">{i[0]} : {i[1]}</div>
              </button>
            ))
          }
        </div>
      </div>
    </div>
  );
}


function Tag({annotations}){

  return (
    <button className="bg-yellow-600 p-1 rounded text-black">{String(annotations[0])} | {(annotations[1])}</button>
  )
}