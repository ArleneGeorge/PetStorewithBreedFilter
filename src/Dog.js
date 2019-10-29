import React from 'react';

export default function Dog(props){
    return (
        <li className="dog">
        <h2>{props.name}</h2>
        <h3>{props.gender}</h3>
        <img src={props.imageUrl} alt={props.name}/>
        </li>
    )
}
