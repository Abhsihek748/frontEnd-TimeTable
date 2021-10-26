import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../dataS.json'
import Container from '@mui/material/Container';
import axios from 'axios';

export default function Timetable({ table = ""}) {
  let rows  = null;
let headers ;

  if(table !== "" ){
    // let response = await axios.get(url);
    //  setTimeTable(response.data.data);
 rows = table ;
 headers= [] ;

for(let i in rows[0]){
    headers.push(i)
}

  }
  return (
  <>{
  rows === null? <div></div>
  :  <>
    {console.log(rows[0])}
    <Container maxWidth="md" gutterBottom>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              {
                  headers?.map((head)=>(
                    <TableCell align="center">{head}</TableCell>
                  ))
              } 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow>
                {
                  headers?.map((head)=>(
                    <TableCell align="center">{row[head]}</TableCell>
                  ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
     }
    </>
  )
}
