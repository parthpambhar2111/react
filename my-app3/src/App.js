import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  const[main, setmain] = usestate([])
  useEffect ( ()=>{
  axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  })},[] );
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
