import Image from "next/image";
import Header from "./static/header";
import Hero from "./component/hero";
import Logopage from "./component/logopage";
import Portfolio from "./component/portfolio";
// import Slick from "./component/slick";

 const page=() => {
  return (
    <div className="flex justify-center items-center flex-col">
       <Header/>;
       <Hero/>
       {/* <Slick/> */}
       <Logopage/>
       {/* <Portfolio/> */}
    </div>
  );
}


export default page