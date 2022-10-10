import Link from "next/link";

export default function Footer(){
  return(
    <div className="bg-[#040335] text-white">

      <div><Col></Col></div>
        <div className="">
          Copyright @ Kartik Bansal 2022. All Rights Reserved.
        </div>
    </div>
  );
}

function Col(){
  return(
    <div className="flex flex-row items-center justify-between">
      <div>
        <h3>Saasify</h3>
        <h4>Data visualization, and 
expense management 
for your business.</h4>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2">
        <div>
          <Link href="/"><a><strong>Product</strong></a></Link>
          <Link href="/"><a>Insights</a></Link>
          <Link href="/"><a>Reimbursements</a></Link>
          <Link href="/"><a>Virtual Assistant</a></Link>
          <Link href="/"><a>Product</a></Link>
        </div>

         <div>
          <Link href="/"><a><strong>Company</strong></a></Link>
          <Link href="/"><a>Insights</a></Link>
          <Link href="/"><a>Reimbursements</a></Link>
          <Link href="/"><a>Virtual Assistant</a></Link>
          <Link href="/"><a>Product</a></Link>
        </div>

         <div>
          <Link href="/"><a><strong>Resources</strong></a></Link>
          <Link href="/"><a>Insights</a></Link>
          <Link href="/"><a>Reimbursements</a></Link>
          <Link href="/"><a>Virtual Assistant</a></Link>
          <Link href="/"><a>Product</a></Link>
        </div>

        <div>
          <Link href="/"><a><strong>Follow Us</strong></a></Link>
          <Link href="/"><a>Insights</a></Link>
          <Link href="/"><a>Reimbursements</a></Link>
          <Link href="/"><a>Virtual Assistant</a></Link>
          <Link href="/"><a>Product</a></Link>
        </div>

      </div>
    </div>
  );
}