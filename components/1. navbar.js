import Link from "next/link";

export default function Nav(){
  return(
    <div className="px-[120px] flex flex-row items-center justify-between bg-red400 text-white/95">
      <Link href="/"><a className="hover:opacity-90 transition-opacity duration-200 ease-in-out text-[18px] font-bold tracking-wide text-white z-50 bg-transparent ">Saasify</a></Link>

      <Center></Center>

      <Link href="/">
        <a className=" z-50 bg-transparent bg-">
          <img className="w hover:opacity-90 transition-opacity duration-200 ease-in-out" src="/svg/ico/signup.svg"></img>
        </a>
      </Link>
    </div>
  );
}


function Center(){
  return(
    <div className="text-[17px] font-thin font-sans opaci z-50 bg-transparent flex flex-row items-center justify-center space-x-10 text-gray-50">
            <Link href="/"><a className="hover:opacity-90 transition-opacity duration-200 ease-in-out">Product</a></Link>
            <Link href="/"><a className="hover:opacity-90 transition-opacity duration-200 ease-in-out">Solution</a></Link>
            <Link href="/"><a className="hover:opacity-90 transition-opacity duration-200 ease-in-out">Customer</a></Link>
            <Link href="/"><a className="hover:opacity-90 transition-opacity duration-200 ease-in-out">Pricing</a></Link>
            <Link href="/"><a className="hover:opacity-90 transition-opacity duration-200 ease-in-out">About us</a></Link>
    </div>
  );
}