import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

const LatestResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const intervalCall = setInterval(() => {
        fetchProducts();
    }, 10000);
    return () => {
      clearInterval(intervalCall);
    };
  });

const fetchProducts = () => {
  axios
    .get('https://coronavirus.m.pipedream.net/')
    .then((res) => {
      console.log(res);
      if(res.data.summaryStats){
        var data = res.data.summaryStats.global;
        data = Object.entries(data);   
        setResults(data);    
        console.log(res.data);  
      }
      
    })
    .catch((err) => {
      console.log(err);
    });
};

function numFormatter(num) {
  if(num > 999 && num < 1000000){
      return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
  }else if(num > 1000000){
      return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
  }else if(num < 900){
      return num; // if value < 1000, nothing to do
  }
};
return (
    <Container>
    <div className="chart">        
      <h1>Latest Results</h1>
     {results && results.length > 0 ? <div className='item-container'>
        {results.map(result => (
          <div className='chart-unity'>
             {result[0] !== 'recovered' ? 
              <Card style={{ borderColor: result[0] === 'deaths' ? '#bd081c': '#e1c340'}}>
              <Card.Header>
              {result[0] === 'deaths' ? <i className="fa fa-times icon-chart"></i> : <i className="fa fa-ambulance icon-chart"></i>}
                {result[0].charAt(0).toUpperCase() + result[0].slice(1)}</Card.Header>
                  <Card.Body>
                  <Card.Title>{numFormatter(result[1])}</Card.Title>
                  <Card.Text>  
                  </Card.Text>
                  </Card.Body>
              </Card>
              : '' 
            }                       
          </div>
        ))}
      </div> 
      : <div className='blink'>Loading...</div>}    
      <div className='updates-info'><p>Updated every 5 minutes</p></div>         
    </div>
    </Container>
  );
};
export default LatestResults;