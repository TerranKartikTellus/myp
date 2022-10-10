import GetStartedButton from "./button/GetStartedButton";

export default function Price(){
  return(
    <div>
        <h1>Get results first. Pick a plan later.</h1>
        <Plan></Plan>
    </div>
  );
}

function Plan(){
  return(
    <div>
      <div className="flex flex-row items-center justify-center">
        <button>Monthly</button>
        <button>Anually</button>
        <img src="/svg/ico/planArrow.svg"></img>
      </div>


      <Cards></Cards>
    </div>
  );
}

function Cards(){
  return(
    <div className="flex flex-row items-center justify-center space-x-3">
      <div className="shadow w-[384px] h-[652px]  flex flex-col items-center justify-between">
        <div>

              <div>
                <h3>Pro</h3>
                <strong>$30<p>/monthly</p></strong>
                <p>For Small Business</p>
              </div>

              <div>
                  <div className="flex flex-row items-center justify-start">
                    <img src="/svg/ico/tick.svg"></img>
                    <p>3  Social profiles</p>
                  </div>

                  <div className="flex flex-row items-center justify-start">
                    <img src="/svg/ico/tick.svg"></img>
                    <p>12 Team members</p>
                  </div>

                  <div className="flex flex-row items-center justify-start">
                    <img src="/svg/ico/tick.svg"></img>
                    <p>5 Competitors per profile</p>
                  </div>
              </div>
        </div>
        <div>
          <GetStartedButton blue={1}></GetStartedButton>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#2272FF] to-[#0D03C3] shadow w-[384px] h-[652px]  flex flex-col items-center justify-between">
        <div>

              <div>
                <h3>Popular</h3>
                <strong>$60<p>/monthly</p></strong>
                <p>For Medium businessess</p>
              </div>

              <div>
                  <div className="flex flex-row items-center justify-start">
                    <img src="/svg/ico/tickWhite.svg"></img>
                    <p>5  Social profiles</p>
                  </div>

<div className="flex flex-row items-center justify-start">
                    <img src="/svg/ico/tickWhite.svg"></img>
                    <p>12 Team members</p>
                  </div>

<div className="flex flex-row items-center justify-start">
                    <img src="/svg/ico/tickWhite.svg"></img>
                    <p>5 Competitors per profile</p>
                  </div>

<div className="flex flex-row items-center justify-start">
                    <img src="/svg/ico/tickWhite.svg"></img>
                    <p>Hashtags per profile</p>
                  </div>


                  
              </div>
        </div>
        <div>
          <GetStartedButton blue={1}></GetStartedButton>
        </div>
      </div>

      <div className="shadow w-[384px] h-[652px]  flex flex-col items-center justify-between">
        <div>

              <div>
                <h3>Pro</h3>
                <strong>$30<p>/monthly</p></strong>
                <p>For Small Business</p>
              </div>

              <div>
                  <div className="flex flex-row items-center justify-start">
                    <img src="/svg/ico/tick.svg"></img>
                    <p>3  Social profiles</p>
                  </div>

                  <div className="flex flex-row items-center justify-start">
                    <img src="/svg/ico/tick.svg"></img>
                    <p>12 Team members</p>
                  </div>

                  <div className="flex flex-row items-center justify-start">
                    <img src="/svg/ico/tick.svg"></img>
                    <p>5 Competitors per profile</p>
                  </div>
              </div>
        </div>
        <div>
          <GetStartedButton blue={1}></GetStartedButton>
        </div>
      </div>
    </div>
  );
}