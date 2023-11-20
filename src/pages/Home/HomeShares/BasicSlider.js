import React from 'react';
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import Subtitle from "./Components/Subtitle";
import img1 from '../../../assets/carousel-img1.jpg'
import img2 from '../../../assets/carousel-img2.jpg'
import img3 from '../../../assets/carousel-img3.jpeg'
import img4 from '../../../assets/carousel-img4.jpeg'

const BasicSlider = () => {
    return (
        <HeroSlider className=' h-[50vh] md:h-[50vh] lg:h-[500px]'
            height={""}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 300,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}
        >
            <Overlay>
                <Wrapper>
                    <Title>Monthly super sale</Title>
                    <Subtitle>

                    </Subtitle>
                </Wrapper>
            </Overlay>

            <Slide
            
                shouldRenderMask
                // label="Giau Pass - Italy"
                background={{
                    backgroundImageSrc: img1
                }}
            />

            <Slide
                shouldRenderMask
                // label="Bogliasco - Italy"
                background={{
                    backgroundImageSrc: img2
                }}
            />

            <Slide
                shouldRenderMask
                // label="County Clare - Ireland"
                background={{
                    backgroundImageSrc: img3
                }}
            />

            <Slide
                shouldRenderMask
                // label="Crater Rock, OR - United States"
                background={{
                    backgroundImageSrc: img4
                }}
            />

            <MenuNav />
        </HeroSlider>
    );
}

export default BasicSlider;


