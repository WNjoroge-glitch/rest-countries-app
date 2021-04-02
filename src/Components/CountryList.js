import React,{useEffect, useState} from 'react';
import ThemeToggle from "./ThemeToggleButton";
import {Link} from 'react-router-dom';
import CountryRegion from './CountryRegion';




function CountryList(){ 
  const [countries,setCountries]=useState([])
  const [search,setSearch] = useState('')
  
  const[filteredCountries,setFilteredCountries] = useState([])
 
  

    
      
      
      useEffect(() => {
        
        fetch("https://restcountries.eu/rest/v2/all")
        .then((response) => {
         return response.json()
        })
        .then((data) => {
          console.log(data)
          setCountries(data)
          
  
          
        })
        
      },[])

      useEffect(() => {
        setFilteredCountries(
          countries.filter(country => {
            return country.name.toLowerCase().includes(search.toLowerCase())
          })

        )
       

      },[search,countries,])
      

    return(
            <div className="country-box">
              <div className="intro-box">
              <p>Where in the world?</p>
              <ThemeToggle/>
              </div>
              
              
              
              <input type="text" placeholder="Search" onChange={e =>setSearch(e.target.value)} class="search-input"></input>
              
              
             
              <div className="main-country-holder">
              {filteredCountries.map(country => <div className="country-holder">
                <img src={country.flag} alt="flag of country"></img>
                <Link to ={`/CountryDetail/${country.name}`}>
                <button>{country.name}</button>
                </Link> 
                
                
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital:{country.capital}</p>
                </div>)}
                
                
               </div>
               
               
            </div>
            
            
    )
    
    } 
export default CountryList