// "use client"
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Link from 'next/link';
// import Image from 'next/image';

// function SampleNextArrow(props: any) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "flex", background: "black" }}
//             onClick={onClick}
//         />
//     );
// }


// function SamplePrevArrow(props: any) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black" }}
//             onClick={onClick}
//         />
//     );
// }
// export default function SimpleSlider() {
//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         arrows: true,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint:950,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2,
//                     arrows: false
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: false
//                 }
//             }
//         ]
//     };
//     return (
//         <div className="w-[80vw] mx-auto">
//         <Slider {...settings}>
//             {products.map((product) => (
//                 <Link href={"/"} className={"pb-12"} key={product.id}>
//                     <div className=" flex flex-col product-card space-y-2">
//                         <Image src={product.images[0]} width={300} height={300} alt="Product" />
//                         <p className="leading-5 text-black font-bold">
//                             {product.name}
//                         </p>
//                         <p className="leading-5 text-black font-bold">
//                             {product.price}
//                         </p>
//                     </div>
//                 </Link>
//             ))}
//             </Slider>
//         </div>
//     )
// }
