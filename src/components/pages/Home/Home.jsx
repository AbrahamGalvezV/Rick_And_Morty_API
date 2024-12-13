import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../CutomInput/CustomInput";

//-----------------------------------------

export const Home = () => {
    const [count, setCount] = useState(0);
    const [inputData, setInputData] = useState("");
    const password = "patata";
  
    const navigate = useNavigate()
    
    const inputHandler = (event) => {
        setInputData(event.target.value);
    };
    
    
    const addCountButtonHandlersetCount = () => {
        setCount(count + 1);
    };
     
    useEffect(() => {}, [count]);
    

    useEffect(() => {
      if (inputData === password) {
        console.log(` ${inputData} Es correcto. Ole tus cojones chaval`)
        setCount(9999)
        navigate("/login")
      }
    }, [inputData])

  return (
    <>
      <h1>!!Vamos largooo¡¡</h1>
      <div className="card">
        <button onClick={addCountButtonHandlersetCount}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <input
          type="text"
          name="inputDePrueba"
          onChange={(event) => inputHandler(event)}
        ></input>
        <CustomInput
        typeProp="email"
        nameProp="emailinput"
        placeholderProp="Introduce tu email"
        handlerProp={inputHandler} 
        />
        <CustomInput
        typeProp="password"
        nameProp="passwordlinput"
        placeholderProp="Introduce tu contraseña"
        handlerProp={inputHandler} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
