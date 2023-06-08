import React from 'react';
import img1 from '../../../assets/carousel-img1.jpg'
import img2 from '../../../assets/carousel-img2.jpg'
import img3 from '../../../assets/carousel-img3.jpeg'
import img4 from '../../../assets/carousel-img4.jpeg'
import './Hero.css'
const Hero = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const backgroundImageStyle2 = {
        backgroundImage: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    const backgroundImageStyle3 = {
        backgroundImage: `url(${img3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    const backgroundImageStyle4 = {
        backgroundImage: `url(${img4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <div>
            <div className="carousel h-[420px] w-full">
                <div id="slide1" className="carousel-item ease-in-out relative w-full">

                    <div className="hero relative" style={backgroundImageStyle}>
                        <div className="hero-overlay bg-opacity-20 gradient"></div>
                        <div className="hero-content text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="absolute bottom-2 left-1 text-3xl font-bold uppercase">jeanse febric shirts</h1>

                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="bg-transparent btn-sm btn btn-circle">❮</a>
                        <a href="#slide2" className="bg-transparent btn-sm btn btn-circle">❯</a>
                    </div>
                </div>


                {/* slide2 */}

                <div id="slide2" className="carousel-item relative w-full">

                    <div className="hero relative " style={backgroundImageStyle2}>
                        <div className="hero-overlay bg-opacity-20 gradient"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">

                                <h1 className="absolute bottom-2 left-1 text-3xl font-bold uppercase">jeanse febric shirts</h1>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className=" bg-transparent btn-sm btn btn-circle">❮</a>
                        <a href="#slide3" className=" bg-transparent btn-sm btn btn-circle">❯</a>
                    </div>
                </div>

                {/* slide3 */}

                <div id="slide3" className="carousel-item relative w-full">

                    <div className="hero relative" style={backgroundImageStyle3}>
                        <div className="hero-overlay bg-opacity-20 gradient"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">

                                <h1 className="absolute bottom-2 left-1 text-3xl font-bold uppercase">jeanse febric shirts</h1>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className=" bg-transparent btn-sm btn btn-circle">❮</a>
                        <a href="#slide4" className=" bg-transparent btn-sm btn btn-circle">❯</a>
                    </div>
                </div>


                {/* slide4 */}
                <div id="slide4" className="carousel-item relative w-full">

                    <div className="hero relative" style={backgroundImageStyle4}>
                        <div className="hero-overlay bg-opacity-20 gradient"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">

                                <h1 className="absolute bottom-2 left-1 text-3xl font-bold uppercase">jeanse febric shirts</h1>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className=" bg-transparent btn-sm btn btn-circle">❮</a>
                        <a href="#slide1" className=" bg-transparent btn-sm btn btn-circle">❯</a>
                    </div>
                </div>






                {/* <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" alt='men-in-shirt' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className=" bg-transparent btn-sm btn btn-circle">❮</a>
                        <a href="#slide3" className=" bg-transparent btn-sm btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" alt='man-in-shirt' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className=" bg-transparent btn-sm btn btn-circle">❮</a>
                        <a href="#slide4" className=" bg-transparent btn-sm btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" alt='shirt-img' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className=" bg-transparent btn-sm btn btn-circle">❮</a>
                        <a href="#slide1" className=" bg-transparent btn-sm btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
        </div >
    );
};

export default Hero;