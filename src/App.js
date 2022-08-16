import { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import axios from 'axios';
import './App.css';
import ResponsiveAppBar from './components/Navbar';
import Table from './components/Table';
import Details from './components/Details/Details'
function App() {
  const [data, setData] = useState([]);


  const fetchData = () => {
    axios.get('https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees')
      .then((response) => {
        const employeesData = response.data;
        console.log(employeesData);
        setData(employeesData);
      }).catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Router>
        <Routes>
          <Route path='/' element={<Table data={data} />} />
          <Route path='/' element={<Details data={data}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
