import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return <div className='m-0 bg-[#EEEEEE] w-full'>
    
    {/* <Provider> */}
      <Component {...pageProps} />
    {/* </Provider> */}
    </div>
}

export default MyApp
