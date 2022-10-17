import Link from "next/link";

export default function Nav(){
  return(
    <div className="">
        <div className="flex flex-row items-end justify-end pt-3">
          <Link href="/"><a className="hover:opacity-80 transition-opacity duration-200 ease-in-out w-[100px] h-[50px]"><img src="/kursha/github.svg" ></img></a></Link>
          <Link href="/"><a className="hover:opacity-80 transition-opacity duration-200 ease-in-out w-[100px] h-[50px]"><img src="/kursha/docs.svg"   ></img></a></Link>
          <Link href="/"><a className="hover:opacity-80 transition-opacity duration-200 ease-in-out w-[100px] h-[50px]"><img src="/kursha/signin.svg" ></img></a></Link>
        </div>
        <div className="flex flex-row items-center justify-between px-10">
          <Link href="/"><a className="hover:opacity-80 transition-opacity duration-200 ease-in-out"><img src="/kursha/logo.svg"></img></a></Link>
          <Link href="/"><a className="hover:opacity-80 transition-opacity duration-200 ease-in-out"><img src="/kursha/talktous.svg"></img></a></Link>
        </div>
    </div>
  );
}
