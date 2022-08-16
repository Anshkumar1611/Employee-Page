import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 150
  },
  {
    field: 'first_name',
    headerName: 'First name',
    width: 160
  },
  {
    field: 'last_name',
    headerName: 'Last name',
    width: 160
  },
  {
    field: 'date_of_birth',
    headerName: 'Date of Birth',
    width: 200,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 200,
  },
  {
    field: 'salary',
    headerName: 'Salary',
    width: 200,
  },
  {
    field: 'designation',
    headerName: 'Designation',
    width: 200,
  },
];



export default function Table({ data }) {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <TextField id="standard-basic" label="Search here" variant="standard" style={{ display: 'flex', margin:"1rem"}} onChange={(e) => setSearchTerm(e.target.value)} />
      <div style={{ height: 580, width: '100%',}}>
        <DataGrid
          // eslint-disable-next-line array-callback-return
          rows={data.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.date_of_birth.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.salary.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.designation.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
              return val;
            }

          }).map((item) => {
              return (
                item
              )
            })}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </>);
}
