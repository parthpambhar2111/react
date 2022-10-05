// import logo from './logo.svg';
// import './App.css';
import {useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');

function App() {
const [ main,setMain] = useState([])

useEffect(()=>{
  axios.get('https://dummyjson.com/products')
  .then(function(response){
      console.log(response.data.products);
      setMain(response.data.products)
  })
  .catch(function(error){
    
    console.log(error);
  })
},[]);

  return (
    <div className="App">
      {
        main.map((item,i)=>{
          return(
            <div className='container bg-red'>
            <div classname="row justify-content-center">
              <div classname="col-lg-4 col-md-6 col-12 bg-secondary" key={i}> 
          <Card style={{ width: '18rem', height:"400px" }} className="f" >
    <Card.Img variant="top" src={item.images[0]} className="img2 image-fluied bg-secondary"/>
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.description}

      </Card.Text> 
      <Button style={{backgroundColor: '#fd7e14', border:'none'}} classsName="e" >Starting:{item.price}</Button>
    </Card.Body>
  </Card>
  </div>
  </div>
                
           </div>
          )
        })
      }
    
    </div>
  );
}

export default App;
