import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Banner1 from "../../../assets/images/banner/5.jpg"
import Banner2 from "../../../assets/images/banner/2.jpg"
import Banner3 from "../../../assets/images/banner/3.jpg"
import Banner4 from "../../../assets/images/banner/4.jpg"




const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={Banner1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 left-0 right-0 bottom- h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 w-1/2 pl-24 text-center md:text-left">
                        <h2 className="text-6xl font-bold">Affordable <br /> Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                        <div className="flex items-center gap-5">
                            <button className="btn btn-warning rounded-md text-white">Discover More</button>
                            <button className="btn btn-outline text-white rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-5 right-16 bottom-0 mb-10 ">
                    <a href="#slide4" className="btn btn-circle btn-warning"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle btn-warning"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={Banner2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 left-0 right-0 bottom- h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 w-1/2 pl-24">
                        <h2 className="text-6xl font-bold">Affordable <br /> Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                        <div className="flex items-center gap-5">
                            <button className="btn btn-warning rounded-md text-white">Discover More</button>
                            <button className="btn btn-outline text-white rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-5 right-16 bottom-0 mb-10 ">
                    <a href="#slide1" className="btn btn-circle btn-warning"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle btn-warning"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Banner3} className="w-full rounded-xl" />
                <div className="absolute flex rounded-xl items-center gap-5 left-0 right-0 bottom- h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 w-1/2 pl-24">
                        <h2 className="text-6xl font-bold">Affordable <br /> Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                        <div className="flex items-center gap-5">
                            <button className="btn btn-warning rounded-md text-white">Discover More</button>
                            <button className="btn btn-outline text-white rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-5 right-16 bottom-0 mb-10 ">
                    <a href="#slide2" className="btn btn-circle btn-warning"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle btn-warning"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={Banner4} className="w-full rounded-xl" />
                <div className="absolute flex rounded-xl items-center gap-5 left-0 right-0 bottom- h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 w-1/2 pl-24">
                        <h2 className="text-6xl font-bold">Affordable <br /> Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                        <div className="flex items-center gap-5">
                            <button className="btn btn-warning rounded-md text-white">Discover More</button>
                            <button className="btn btn-outline text-white rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-5 right-16 bottom-0 mb-10 ">
                    <a href="#slide3" className="btn btn-circle btn-warning"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide1" className="btn btn-circle btn-warning"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;