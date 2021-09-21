import React from 'react';

function Cards(props) {
    return (
        <div className='card'>
        <div className='card__head'>
            <div className='card__icon'> {props.icons} </div>
            <span className='card__title'>{props.title}</span>
            </div>
            <div className='card__title-2'>{props.title2}</div>
            <button className='card__button'>{props.button}<span className='card__arrow'> &rarr;</span></button>
        </div>
    )
}

export default Cards;
