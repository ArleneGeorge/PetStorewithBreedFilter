import React from 'react'
import Dog from './Dog';

export default function Dogs(props){
    const dogs = props.dogs.map(pet => {
        return <Dog name={pet.name} imageUrl={pet.imageUrl} key={pet.id} gender={pet.genderSymbol}/>
        // <h2>{pet.name}</h2>
        // <img src ={pet.imageURL} alt={pet.name}/>    
    })

    return (
        <ul className='dogs'>
            {dogs}
        </ul>
    )
}

