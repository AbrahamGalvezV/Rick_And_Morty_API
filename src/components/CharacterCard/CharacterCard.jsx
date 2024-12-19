import "./CharacterCard.css";

export const CharacterCard = ({ character, handlerClic }) => {


  return (
    <div className="character-card"onClick={handlerClic}>
      <img className="character-image" src={character.image} alt={character.name} />
      <div className="character-info">
        <h4>{character.name}</h4>
        {/* <h5>{character.species}</h5> */}
        {/* <p>Origin: {character.origin.name}</p>  */}
      </div>
    </div>
  );
};
