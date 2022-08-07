import React, { Component } from 'react';
import Mock_Data from './Mock_Data.js';
import './MockData.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import iex from './iexapitoken.js'
import StockRow from "./StockRow.js"

const changeStyle = { 
    color: 'blue',
}
  
function getData(){
    const url = `${iex.base_url}/stock/${'googl'}/peers/?&token=${iex.api_token}`

    fetch(url).then((Response) => Response.json()).then((data) => {
        console.log(data)
        this.setState({
           data: data
        })
    })
}

function MarketData(){
  

    getData("")

    return (
     <div>
         <div className= "container">  
         <div className = "safe">   <h1> Our Watchlist </h1>   </div>
           
             <div className= "para"> Here is our stock watchlist! We mostly trade US Securities
             with a market cap of between 2B to 10B, With a price over $100  </div>
        
         <div className = "titledesign">  <h1>  </h1></div>
         
         <table className ="table">
        <thead>
            <tr className = "chartdesign">
               
                <th className = "publicsans"> TICKER </th>
                <th className = "publicsans"> NAME</th>
                <th className = "publicsans"> PRICE </th>
                <th className = "publicsans"> OPEN </th>
                <th className = "publicsans"> CLOSE</th>
                <th className = "publicsans"> % CHANGE</th>
                <th className = "publicsans"> LAST UPDATE </th>
                
              
            </tr>
        </thead>
        <tbody className = "tabledesign">
            
            < StockRow  ticker = "SEB" />
            <StockRow ticker = "CABO" />
            <StockRow ticker = "GHC" />
            <StockRow ticker = "CACC" />
            <StockRow ticker = "COKE" />
            <StockRow ticker = "CHE" />
            <StockRow ticker = "UHAL" />
            <StockRow ticker = "SAM" />
            <StockRow ticker = "NEU" />
            <StockRow ticker = "LAD" />
            <StockRow ticker = "DECK" />
            <StockRow ticker = "CACI" />
            <StockRow ticker = "MUSA" />
            <StockRow ticker = "MSTR" />
            <StockRow ticker = "ROG" />
            <StockRow ticker = "RH" />
       
        </tbody>

         </table>
         
         
         </div>
         <div className= "margins"> </div>
     </div>
   
    );

}
export default MarketData
