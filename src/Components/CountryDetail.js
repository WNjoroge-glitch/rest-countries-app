import React,{useState,useEffect} from 'react';
import {Link,useParams,useHistory} from "react-router-dom";
import "../App.css";


// import {useParams} from "react-router-dom";


function CountryDetail(names){
 
  
  
  

  const {name} = useParams()
  const history = useHistory()
  const [country,setCountry]=useState({})
  
  const {nativeName,population,region,subregion,capital,topLevelDomain,currencies,flag,borders,languages} = country[0]
  console.log(region)
  console.log(history)
    
    useEffect(() => {
     
      
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then((response) => {
         return response.json()
        })
        .then((data) => {
          
          console.log(data)
          setCountry(data)
          
        })
        
        
      },[name])
    
     
    return(
        <>
        
        <div className="country-card">
        <button onclick={ () => 
            history.goBack()
           }>Go Back</button>
        <div className ="flag">
          
       
         <img src ={flag} alt ="flag-of-country"></img>
       </div>
       
      <div className="details">
        <div className="details-a">
      <h1>{name}</h1>
      <li>Native Name:{nativeName}</li>
      <li>Population:{population}</li>
      <li>Region: {region}</li>
      <li>SubRegion:{subregion}</li>
       <li>Capital: {capital}</li>
       </div>
       <div className ="details-b">
       <li>Top Level Domain:{topLevelDomain}</li>
        
        
        <li>Languages: 
          {languages.map (language => language.name).join(",")}
          </li>
          <li>Currencies : {currencies.map(currency => currency.name).join(",")}</li>
          </div>
          <>Borders: {borders.map(border => border)}</>
       </div>
       
        
      </div>
      
      </>
    )

}
export default CountryDetail


