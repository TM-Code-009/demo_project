import Image from "next/image"
import Link from "next/link"
import { MdCall } from "react-icons/md"
import logo from "../../public/Dumo-logo.svg"
import logowhite from "../../public/dumowhite.svg"


const Header = () => {
    return(
       <div className="w-full h-[100px] flex justify-center items-center">
           <div className="w-full h-[100px] flex justify-center items-center fixed bg-white">
            <div className="w-[70%] h-full flex  justify-between items-center border-b-2">
                <div className="flex w-[600px] h-full  items-center gap-7">
                    <Image src={logo} alt="logo" width={100} height={100} />
                    <div className=" hidden lg:flex gap-7 justify-center items-center">
                      <Link href="/" className="text-slate-400">Products</Link>
                      <Link href="/" className="text-slate-400">Customers</Link>
                      <Link href="/" className="text-slate-400">Company</Link>
                      <Link href="/" className="text-slate-400">Pricing</Link>
                    </div>
                </div>
                <div className="flex relative justify-between items-center  w-[200px] h-full">
                   <div className="absolute right-0 w-[40px] h-[40px] text-blue-600 bg-gray-400 flex text-[20px] rounded-lg justify-center items-center">
                   <MdCall/>
                   </div>
                    <div className="hidden md:w-[150px] h-[40px] flex justify-center text-white font-semibold items-center bg-blue-600 rounded-lg border-none">My  <Image src={logowhite} alt="logo" width={50} height={50}/> Cloud</div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Header