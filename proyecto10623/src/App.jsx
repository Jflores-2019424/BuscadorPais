import { useEffect, useState } from "react"
import { searchCities } from "./js/cities";

export const App= () =>{
  const [busqueda, setBusqueda] = useState([]);
  const [cities, setCities] = useState();


  const init = async() =>{
    console.log( searchCities(busqueda))
    setCities()
    console.log(cities)
  }

  useEffect(() => {
      
  }, [busqueda])
  
  return (
    <>
      <div className='container'>
        <h1>Search</h1>
        <input value={busqueda} onChange={({target}) =>setBusqueda(taget.value)}/>
        <hr />
        {cities.map((c)=>{
            return(
            <>
             <h3 key={c.name.common}>
              {""}            
              {c.name.official}  {c.fifa && "- ("+c.fifa+")"}
              </h3>
             <h6>({c.continents[0]})</h6>
              <img src={c.flags.png} alt={c.flags.alt} width={100} height={50}/>

              </>
            )
        })}
      </div>
    </>
  )
}