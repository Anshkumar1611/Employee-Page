import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import "./NewTable.css";
import { Link } from 'react-router-dom'

function createData(id, first_name, last_name, date_of_birth, address, date_of_joining, salary, designation) {
    return { id, first_name, last_name, date_of_birth, address, date_of_joining, salary, designation };
}



export default function NewTable({ data }) {
    const [searchTerm, setSearchTerm] = useState('')

    const rows = data.map((item) => {
        const { id, first_name, last_name, date_of_birth, address, date_of_joining, salary, designation } = item;
        return createData(id, first_name, last_name, date_of_birth, address, date_of_joining, salary, designation)
    })


    return (<>

        <TextField id="standard-basic" label="Search here" variant="standard" style={{ display: 'flex', margin: "1rem" }} onChange={(e) => setSearchTerm(e.target.value)} />

        <div className='table-container'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell>Id</TableCell>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">Date Of Birth</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Date Of Joining</TableCell>
                            <TableCell align="center">Salary</TableCell>
                            <TableCell align="center">Designation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.filter((val) => {
                            if (searchTerm === "") {
                                return val;
                            } else if (
                                val.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.date_of_birth.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.address.toLowerCase().includes(searchTerm.toLowerCase()) || val.salary.toLowerCase().includes(searchTerm.toLowerCase()) || val.designation.toLowerCase().includes(searchTerm.toLowerCase())) { return val; }
                                
                                    return val;
                              
                        }).map((row) => (

                            <TableRow key={row.id}>
                                <TableCell style={{ color: "#000000", fontWeight: 'bold', fontFamily: 'sans-serif' }} component={Link} to={`/employee/${row.first_name.toLowerCase()}`} scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell style={{ color: "white", fontWeight: 'bold', fontFamily: 'sans-serif' }} align="center">
                                    {row.first_name}
                                </TableCell>
                                <TableCell style={{ color: "white", fontWeight: 'bold', fontFamily: 'sans-serif' }} align="center">{row.last_name}</TableCell>
                                <TableCell style={{ color: "white", fontWeight: 'bold', fontFamily: 'sans-serif' }} align="center">{row.date_of_birth}</TableCell>
                                <TableCell style={{ color: "white", fontWeight: 'bold', fontFamily: 'sans-serif' }} align="center">{row.address}</TableCell>
                                <TableCell style={{ color: "white", fontWeight: 'bold', fontFamily: 'sans-serif' }} align="center">{row.date_of_joining}</TableCell>
                                <TableCell style=
                                    {{ color: "white", fontWeight: 'bold', fontFamily: 'sans-serif' }} align="center">{row.salary}</TableCell>
                                <TableCell style={{ color: "white", fontWeight: 'bold', fontFamily: 'sans-serif' }} align="center">{row.designation}</TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    </>);
}
