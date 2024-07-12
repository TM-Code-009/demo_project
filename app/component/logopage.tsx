import Image from "next/image";
import logo1 from "../../public/chigisoft-dumo.40786ee0.svg"
import logo2 from "../../public/wip-global-dumo.1104957c.svg"
import logo3 from "../../public/velox-dumo.75fce973.svg"
import logo4 from "../../public/landpay-dumo.b3881152.svg"
import logo5 from "../../public/hh-dumo.2bbd45ea.svg"
import logo6 from "../../public/wip-dumo.a587693e.svg"



const Logopage = () => {
    return(
       <div className="flex w-full h-[cacl(100vh-100px)] justify-center items-center">
         <div className="flex flex-col w-[70%] h-full gap-36 py-10">
         
            <div className="flex flex-col">
            <div className="text-[16px] text-slate-400">Trusted by:</div>
            <div className="flex flex-col justify-center items-center gap-4 md:flex-row gap-7 mt-0">
            <Image src={logo1} alt="" width={150} height={70}/>
            <Image src={logo2} alt="" width={150} height={70}/>
            <Image src={logo3} alt="" width={150} height={70}/>
            <Image src={logo4} alt="" width={150} height={70}/>
            <Image src={logo5} alt="" width={150} height={70}/>
            <Image src={logo6} alt="" width={150} height={70}/>
            </div>

            </div>
            <div className="text-[15px] text-left md:text-[30px] font-bold w-[800px]">
            <span className="text-slate-400">Connect the tools that matters to your business</span><br/>
            — Payments, Sales, Operations, Marketing, Customer <br/>
              Engagement e.t.c with solid <span className="underline">data protection.</span>
            </div>
         </div>
       </div>
    )
}

export default Logopage;