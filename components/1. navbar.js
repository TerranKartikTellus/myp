import Link from "next/link";

export default function Nav(){
  return(
    <nav className="flex flex-row items-center justify-evenly text-slate-50">
      <Link href="/"><a>Saasify</a></Link>

      <Center></Center>

      <Link href="/"><a className="bg-">Sign up</a></Link>
    </nav>
  );
}


function Center(){
  return(
    <div className="flex flex-row items-center justify-center space-x-2">
            <Link href="/"><a>Product</a></Link>
            <Link href="/"><a>Solution</a></Link>
            <Link href="/"><a>Customer</a></Link>
            <Link href="/"><a>Pricing</a></Link>
            <Link href="/"><a>About us</a></Link>
    </div>
  );
}