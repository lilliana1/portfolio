import React from 'react';
import { useSpring, animated } from 'react-spring';


function CardInfo(props)  {

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return(
        <animated.div className="l-card-info" style={style}>
            <p className="l-card-title">{props.title}</p>
            <div className=" divSubTitle mx-auto">
            <p className="l-card-subTitle" id="paragraphSubTitle">{props.subTitle}</p>
            </div>
            <a href={props.link1} target="_blank" rel="noopener noreferrer"> View Live </a>
            <a href={props.link2} target="_blank" rel="noopener noreferrer"> View Code </a>
        </animated.div>
    )

}
export default CardInfo;