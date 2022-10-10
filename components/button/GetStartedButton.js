import Link from "next/link";

export default function GetStartedButton({blue,white,link="/"}){

  return(
    <>
      {blue && 
      <Link href={link}>
          <a className="font-bold text-lg  bg-gradient-to-br from-[#2272FF] to-[#0D03C3] text-[#FFFFFF] rounded-l-full rounded-r-full w-[206px] h-[58px] px-20 py-5" >
            Get Started
          </a>
      </Link>
      }

      {white && 
      <Link href={link}>
          <a className="font-bold text-lg  bg-[#FFFFFF] text-[#0D03C3] rounded-l-full rounded-r-full w-[206px] h-[58px] px-20 py-5" >
            Get Started
          </a>
      </Link>
      }
    </>
  );
}