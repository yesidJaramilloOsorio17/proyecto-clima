import './App.css';
import Character from "./components/Character";
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [characterData, setCharacterData] = useState({});


  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${"colombia"}
      &APPID=fa69332002bc595b4d12fec798744189`)
      .then((resp) => setCharacterData(resp.data))
      .catch((error) => console.error(error))
  }, []);

 

  return (

    
    <div className="App">
      
  
      <h1 className='titulo'>weather app</h1>
      
      
     
      <Character data={characterData} />
     
    </div>
  );
}

export default App;

