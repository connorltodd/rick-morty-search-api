import React from 'react';

function CharacterCard(props) {
    return (
        <div className="card mx-auto">
            <img src={props.image} style={{ width: '80px', height: '80px' }} />
            <h1>{props.name}</h1>
            <p>{props.status}</p>
            <p>{props.species}</p>
            <button onClick={() => props.deleteCharacter(props.id)}>Delete Character</button>
        </div>
    )
}

export default CharacterCard;