import './App.css';
import {useState, useEffect} from "react"
import Cards from './components/Cards';
import CountryPicker from './components/CountryPicker';
import ChartComp from './components/ChartComp';
import axios from 'axios'


function App() {

const url = 'https://covid19.mathdro.id/api'
const [data, setData] = useState([])
const [dailyData, setDailyData] = useState([])

useEffect(() => { 
fetch(url)
  .then((res) => res.json())
  .then((json) => setData(json))
}, [])

useEffect(() => { 
  fetch(`${url}/daily`)
    .then((res) => res.json())
    .then((json) => setDailyData(json))
  }, [])


  return (
    <div className="App">
      <Cards data={data}/>
      <CountryPicker />
      <ChartComp dailyData={dailyData}/>
    </div>
  );
}

export default App;
