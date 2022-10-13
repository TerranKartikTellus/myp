import Link from "next/link";

export default function GetStartedButton({blue,white,link="/"}){

  return(
    <div className="bg-transparent">
      {blue && 
      <Link href={link}>
          <a className="hover:hue-rotate-60" >
            <img src="/svg/ico/bButton.svg"></img>
          </a>
      </Link>
      }

      {white && 
      <Link href={link}>
          <a className="" >
            <img src="/svg/ico/wButton.svg"></img>
          </a>
      </Link>
      }
    </div>
  );
}