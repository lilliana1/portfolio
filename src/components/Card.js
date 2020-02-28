import React from 'react';
import CardInfo from '../components/CardInfo'

function Card(props) {
    return(
        <div className="l-block l-card" onClick={(e) => props.click(props.item)}>
            <img className="l-card-image" src={props.item.src} alt={props.item.src} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link1={props.item.link1} link2={props.item.link2} /> }
        </div>    
    );

}

export default Card;