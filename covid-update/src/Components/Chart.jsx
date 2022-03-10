import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

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
                
      }
      
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    <Container>
    <div className="chart">        
      <h1>Latest Results</h1>
     {results && results.length > 0 ? <div className='item-container'>
        {results.map(result => (
          <div className='chart'>
             
              <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>{result[0]}</Card.Header>
                    <Card.Body>
                    <Card.Title>{result[1]}</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />

              
          </div>
        ))}
      </div> : <div className='blink'>Loading...</div>}        
    </div>
    </Container>
  );
};
export default LatestResults;