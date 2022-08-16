/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Details.css'
import {useParams} from 'react-router-dom'


export default function Details() {
  const [info, setInfo] = useState([])

const {empFN}=useParams();

useEffect(() => {
  fetchInfo();
}, []);

  const fetchInfo = () => {

    axios.get(`https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/${empFN}`)
      .then((response) => {
        const employeesData = response.data[0];
        console.log(employeesData);
        setInfo(employeesData);
      }).catch((error) => {
        console.log(error);
      })

  }


  return (<>
    <div className='details-heading'>
      <h4>
        Details of {info.first_name} {info.last_name}
      </h4>
    </div>

    <div className='info'>
      <table>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>First Name</td>
          <td>{info.first_name}</td>
        </tr>
        <tr>
          <td>Last Name </td>
          <td>{info.last_name}</td>
        </tr>
        <tr>
          <td>Date Of Birth</td>
          <td>{info.date_of_birth}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{info.address}</td>
        </tr>
        <tr>
          <td>Date Of Joining</td>
          <td>{info.date_of_joining}</td>
        </tr>
        <tr>
          <td>Salary</td>
          <td>{info.salary}</td>
        </tr>
        <tr>
          <td>Designation</td>
          <td>{info.designation}</td>
        </tr>
      </table>
    </div>
  </>
  );
}
