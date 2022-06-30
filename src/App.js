import './App.css';
import {useState, useEffect} from "react"
import Cards from './components/Cards';
import CountryPicker from './components/CountryPicker';
import Chart from './components/Chart';
import axios from 'axios'


function App() {

const url = 'https://covid19.mathdro.id/api'
const [data, setData] = useState([])

useEffect(() => { 
fetch(url)
  .then((res) => res.json())
  .then((json) => setData(json))
}, [])

  return (
    <div className="App">
      <Cards data={data}/>
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
