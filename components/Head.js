import Head from "next/head"

// <HeadTag title="" cardTitle="" description="" image="" ></HeadTag>
export default function HeadTag({
   title = 'Sassify',
   cardTitle = 'The Fastest Way For Startups To Do Any Analysis',
   description = 'The Fastest Way For Startups To Do Any Analysis',
  image = '',
}){

          return (
                    <Head>
                      <meta charset="utf-8" />
                      <meta name="Description" content={description} />
                      <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="/>
                      <title className="tracking-wider text-lg">{title} | {description}</title>
                      <meta name="robots" content="noindex,nofollow"></meta>
                      
                      <link rel="icon" type="image/x-icon" href="/logo.svg" />

                      <meta name="twitter:card" content="summary" />
                      <meta name="twitter:site" content="teamautoz.vercel.app" />
                      <meta name="twitter:title" content={cardTitle} />
                      <meta name="twitter:description" content={description} />
                      <meta name="twitter:image" content={image} />

                      <meta property="og:title" content={cardTitle} />
                      <meta property="og:description" content={description} />
                      <meta property="og:image" content={image} />

                     

                      
                    </Head>
          );
} 