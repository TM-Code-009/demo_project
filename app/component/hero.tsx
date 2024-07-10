import { MdArrowUpward, MdMessage } from "react-icons/md"
import { GoArrowUpRight } from "react-icons/go";


const Hero = () => {
    return(
        <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center ">
            <div className="w-[70%] h-full flex flex-col justify-center gap-6">
               <div className="w-[450px] text-[50px] font-bold">All your businesses, in one place.</div>
               <div className="w-[600px] text-[16px] text-slate-400">Run your businesses without limitations; support customers, increase sales, and do more. For growing businesses and smart creators.🌿</div>
               <div className="w-[300px] flex items-center gap-4">
                  <div className="w-[150px] h-[40px] flex justify-center items-center text-white text-[16px]  bg-blue-600 rounded-lg border-none">Get Started Now</div>
                  <div className="flex justify-center items-center underline  text-[16px] font-semibold ">See pricings<span className="text-blue-500"><GoArrowUpRight /></span></div>
               </div>
            </div>
            <div className="relative flex justify-end items-end ">
            <MdMessage/>
            </div>
        </div>
    )
}

export default Hero;