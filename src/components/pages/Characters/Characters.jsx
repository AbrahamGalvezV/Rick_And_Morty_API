import { useEffect, useState } from "react";
import {
  bringAllCharacters,
  bringCharacterById,
} from "../../../services/apiCalls";
import { CharacterCard } from "../../CharacterCard/CharacterCard";
import "./Characters.css";

//--------------------------------------------------------

export const Characters = () => {
  const [characters, setCharacters] = useState([]); // Datos de los personajes
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Función para obtener personajes de la API
    const fetchCharacters = async () => {
      try {
        setLoading(true); // Activa el estado de carga
        const data = await bringAllCharacters(); // Llama a la función directamente
        setCharacters(data); // Guarda los datos en el estado
      } catch (err) {
        setError("Error al obtener los datos"); // Maneja el error
      } finally {
        setLoading(false); // Desactiva el estado de carga
      }
    };

    fetchCharacters();
  }, []);

  const cardClicHandler = (char) => {
    bringCharacterById(char.id).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <div className={`characters-desing ${animate ?"animate" : ""}`} >
        <h1 className="characters-desing-title">Rick And Morty</h1>
        <div className="character-list">
          <ol>
            {characters.map((char) => {
              return (
                <CharacterCard
                  key={char.id}
                  character={char}
                  handlerClic={() => cardClicHandler(char)}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
