// "use client"

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";



// const Slick = () => {
//     const settings = {
//       dots: false,
//       infinite: true,
//       autoplay: true,
//       speed: 16000,
//       autoplaySpeed: 1000,
//       cssEase: "linear",
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
  
//     const data = [
//       {
//         id: 1,
//         image:
//           "https://res.cloudinary.com/duewdl1ua/video/upload/v1719569086/v_zl4iic.mov",
//       },
//       {
//         id: 2,
//         image:
//           "https://res.cloudinary.com/duewdl1ua/video/upload/v1719569081/v2_xodzk1.mov",
//       },
//       {
//         id: 3,
//         image:
//           "https://res.cloudinary.com/duewdl1ua/video/upload/v1719569074/v1_mqff3f.mov",
//       },
//       {
//         id: 4,
//         image:
//           "https://res.cloudinary.com/duewdl1ua/video/upload/v1719569074/v3_cu4xoy.mov",
//       },
//       {
//         id: 5,
//         image:
//           "https://res.cloudinary.com/duewdl1ua/video/upload/v1719569098/vid2_tzxzts.mp4",
//       },
//     ];
  
//     return (
//       <div className="overflow-hidden">
//         <div className="slider-container w-[99%] ">
//           <Slider {...settings}>
//             {data?.map((props: any) => (
//               <div key={props.id}>
//                 <section className="border mx-2 w-[300px] h-[200px] overflow-hidden rounded-md relative ">
//                   <video
//                     autoPlay
//                     loop
//                     muted
//                     src={props?.image}
//                     className="w-full h-full bg-slate-200 object-cover"
//                   />
//                 </section>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     );
//   };
  
//   export default Slick;
  