import logo from './logo.svg';
import './App.css';
import {useEffect, useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios')

function App() {

    const[ main,setMain] = useState([])

    useEffect(()=>{
  axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    setMain(response.data.results)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
},[]);
  return (
    <div className="App">
      {
        main.map((item)=>{
          return(
            
            <div className='container'>
              <div className='row col-6 f'>
                <div className='col d-lg-flex g'>
                  <div className='col'>
                    <img src={item.image}></img>
                  </div>  
                  <div className='col'>
                    <h3 className='d'>Name:{item.name}</h3>
                    <h4>Status:{item.status}</h4>
                    <h4>Spiecies:{item.species}</h4>
                    <h4>Gender:{item.gender}</h4>
                    <h4><button>Delete</button></h4>
                  
                    </div>
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
