import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, Heroh1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import page1 from '../../images/page-1.png'
import {Button} from '../ButtonElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoplay loop muted src={page1} type="png" />
            </HeroBg>
            <HeroContent>
                <Heroh1> Page 1</Heroh1>
                <HeroP> 'P' Tag in Hero</HeroP>

                <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        contact me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>

            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
