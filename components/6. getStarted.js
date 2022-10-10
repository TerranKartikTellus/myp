import Link from "next/link";

export default function GetStarted(){
  return(
    <div className="flex flex-row items-center justify-center space-x-1">
      <div>
        <h1>Powerful and easy to use SaaS platform</h1>
        <h3>Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.</h3>
        <Link href="/"><a>GET STARTED</a></Link>
      </div>
      <div><img src="/svg/conversion.svg"></img></div>
    </div>
  );
}