const Character = ({ data }) => {

    let url = "";
    let iconUrl = "";

    if(Character){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + data.weather?.[0].icon +".png";
    }



    return (
        <div className="character-card">

            
            
            <div className='grid1'>
                 <h3 className='temp'><span ></span> { (data.main?.temp - 273.15 ).toFixed(1)} <span> °c</span> </h3>
            </div>
               <div className='grid2' >
              
           </div>
           <div className='grid3'>
             <h3><span className="letra">WIND</span > { data.wind?.speed }<span>   </span> m/s</h3> 
            <h3><span className="letra">CLOUDS</span> { data.clouds?.all }%</h3>
            <h3><span className="letra">PRESSURE</span> { data.main?.pressure } </h3>
            <h2 className='name'>{ data.name }</h2> 
           </div>
           <div className='grid4'>
           <h3><span></span>  <img src={iconUrl}alt="" className="icon" width="120px"/>{ data.weather?.[0].description}</h3>
           </div>
        
            
        </div>
        
    );
}

export default Character;