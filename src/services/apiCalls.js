import axios from "axios";


//-----------------------------------------------

const API_URL = "https://rickandmortyapi.com/api"
// const API_URL = "http://localhost:4000"
// const API_URL = "Aquí una url para un entorno de desarrollo"

export const registerNewUserCall = async () => {

}

export const loginCall = async () => {
    
}

// export const bringAllCharacters = async () => {
//     const res = await axios.get("https://rickandmortyapi.com/api", /*headers*/)
//     return res 
// } 

export const bringAllCharacters = async () => {
    const res = await axios.get(`${API_URL}/character`, /*headers*/)
    
    // console.log(res.data.results);
    
    return res.data.results
}

export const bringCharacterById = async (id) => {
    const res = await axios.get(`${API_URL}/character/${id}`)
    return res.data
}

