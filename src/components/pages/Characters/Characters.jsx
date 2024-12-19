import { useState } from "react";
import { bringAllCharacters, bringCharacterById } from "../../../services/apiCalls";
import { CharacterCard } from "../../CharacterCard/CharacterCard";
import "./Characters.css";

//--------------------------------------------------------

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const bringCharacters = /*async*/ () => {
    //  const apiResponse = await BringAllCharacters
    //  lógica que me convenga usar

    bringAllCharacters()
      .then((res) => {
        setCharacters(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cardClicHandler = (char) => {
    bringCharacterById(char.id)
    .then((res) => {
      console.log(res);
      
    })    
  } 

  return (
    <>
      <div className="characters-desing">
        <header className="characters-header">
          <h1>Rick And Morty</h1>
          <button onClick={bringCharacters}>Mostrar personajes</button>
        </header>

        <div className="character-list">
          <ol>
            {characters.map((char) => {
              return (<CharacterCard key={char.id}
                 character={char} 
                 handlerClic={() => cardClicHandler(char)}
                 />);  
            })}
          </ol> 
        </div>
      </div>
    </>
  );
};
