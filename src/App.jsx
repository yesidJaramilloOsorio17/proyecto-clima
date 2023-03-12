import './App.css';
import Character from "./components/Character";
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [characterData, setCharacterData] = useState({});
  const [ value, setValue] = useState ("")


  useEffect(() => {
    axios
    .get (`https://api.openweathermap.org/data/2.5/weather?q=${"cali"}
    &APPID=fa69332002bc595b4d12fec798744189`)
   .then(( resp) => setCharacterData(resp.data)) 
   .catch((error) => console.error(error))
 
  }, [])
  

const handleSubmit = e => {

 axios
      .get (`https://api.openweathermap.org/data/2.5/weather?q=${value}
       &APPID=fa69332002bc595b4d12fec798744189`)
      .then(( resp) => setCharacterData(resp.data)) 
      .catch((error) => console.error(error))

 e.preventDefault()


}  
  
 return (


      <form onSubmit={e =>handleSubmit (e)} >

          <div className="App">
        <div className='buscador'>
           <label htmlFor="id" id='city'>Contrys or Citys</label> <br />
           <input id='casilla' value={ value } type="text" placeholder='cali' onChange={ (e) => setValue( e.target.value)}  />
           <button type='submit'className='get' >
           get weather
            </button>
           </div>
       <h1 className='titulo'>weather app</h1>

<Character data={characterData} className = "weather" />
      <br />
     <span className='instruction'>
     ¡¡ the climate is changing,
 <br /> 
we should too!!</span>  
     
     </div>
    </form>
 
     
    
  );
}

export default App;

