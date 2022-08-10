import React from 'react';
import CharacterCard from './Character.Card';

export default function WordCard(props){
    return(
        <div>
            {
                Array.from(props.value).map((c,i)=> <CharacterCard value={c} key={i}/>)
            }
        </div>
    )
}