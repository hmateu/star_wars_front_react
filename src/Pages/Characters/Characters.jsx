import React, { useEffect, useState } from "react";
import "./Characters.css";
import { bringCharacters } from "../../services/apiCalls/characters";
import { Loading } from "../../Common/Loading/Loading";
import { Card } from "../../Common/Card/Card";
export const Characters = () => {
    //Hook
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        if (characters.length === 0) {
            bringCharacters()
                .then(data => {
                    setCharacters(data.data.results);
                })
                .catch(error => console.log(error));
        }
    }, [characters]);
    return (
        <div className="charactersStyle">
        <div className="titleCharacters">Characters</div>
            {
                characters.length > 0
                    ? (<div className="allCards">
                        {
                            characters.map(character => {
                                return (
                                    <div key={character.name} className="charactersList">
                                        <Card
                                        title={character.name}
                                        height={character.height}
                                        mass={character.mass}
                                        hairColor={character.hair_color}
                                        skinColor={character.skin_color}
                                        />
                                        
                                    </div>
                                )
                            })
                        }
                    </div>)
                    : (<Loading />)
            }
        </div>
    );
}