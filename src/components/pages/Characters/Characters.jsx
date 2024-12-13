import { bringAllCharacters } from "../../../services/apiCalls"
import "./Characters.css"


//--------------------------------------------------------

export const Characters = () => {

    const bringCharacters = /*async*/ () => {
    //  const apiResponse = await BringAllCharacters
    //  lógica que me convenga usar

        bringAllCharacters() 
        .then((apiResponse) => {
            console.log(apiResponse)
        })
        .catch((error) => {
            console.log(error);        
        })
    }

    return (
        <>
        <div className="characters-desing">
            <h1>Rick And Morty</h1>
            <button onClick={(bringCharacters)}>Mostrar personajes</button>
        </div>
        </>
    )
} 