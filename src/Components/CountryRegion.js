import React,{useState,useEffect}from "react";

function CountryRegion(){
     const [countries,setCountries]=useState([])
    const [continent, setContinent] =useState("")
  const [filteredRegion,setFilteredRegion]=useState([])

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/region/all")
    .then((response) => {
     return response.json()
    })
    .then((data) => {
      console.log(data)
      setCountries(data)
      

      
    })
    
  },[])
  useEffect(() => {
    
    setFilteredRegion(
      countries.filter(country => {
        return country.region.toLowerCase().includes(continent.toLowerCase())
       })
     )

 },[continent,countries])

       
    return(
        <div>
             <div className="select-box">
              <select onChange={e => setContinent(e.target.value)} value={continent}>
                 <option value="Asia">Asia</option>
                 <option value="Africa">Africa</option> 
                 <option value="Europe">Europe</option> 
                 <option value="Oceania">Oceania</option> 
                 <option value="America">America</option> 

                 </select>
                 
                 <div className="continent-holder">
                {filteredRegion.map(country => <div className="continent-holder">
                <img src={country.flag} alt="flag of country"></img>
                <button><p>{country.name}</p></button>
                <p>{country.region}</p>
                <p>{country.population}</p>
                </div>)}

                </div> 
              </div> 
            
            <p>hello worldp</p>
            
        </div>

    )
}
export default CountryRegion