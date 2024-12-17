import { useState } from "react";
import { bringAllCharacters } from "../../../services/apiCalls";
import "./Characters.css";

//--------------------------------------------------------

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const bringCharacters = /*async*/ () => {
    //  const apiResponse = await BringAllCharacters
    //  lógica que me convenga usar

    bringAllCharacters()
      .then((apiResponse) => {
        setCharacters(apiResponse.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="characters-desing">
          <h1>Rick And Morty</h1>
          <button onClick={bringCharacters}>Mostrar personajes</button>
          <ol>
            {characters.map((char, index) => {
              return (
              <li key={index}>{char.name}</li>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
