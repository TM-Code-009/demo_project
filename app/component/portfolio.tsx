import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";



const Portfolio = () => {
    return(
       <div className="w-full h-screen flex justify-center items-center bg-purple-500">
           <div className="w-[70%] h-full flex flex-col bg-green-400 pt-7">

            <div className="w-[600px] h-[110px] bg-slate-200 rounded-3xl border-none flex items-center p-8 justify-between text-slate-700 font-semibold text-[14px]">
                <div className="w-[170px] h-[80px]  flex justify-center items-center rounded-3xl border-none cursor-pointer hover:bg-white">Creator<br/> Cloud</div>
                <div className="w-[170px] h-[80px]  flex justify-center items-center rounded-3xl border-none cursor-pointer hover:bg-white">Business<br/> Cloud</div>
                <div className="w-[170px] h-[80px]  flex justify-center items-center rounded-3xl border-none cursor-pointer hover:bg-white">Developer<br/> Cloud</div>
            </div>
            <div>

            </div>


        </div>
       </div>
    )
}

export default Portfolio;