import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

export default function Timetable({ table = ""}) {
  let rows  = null;
let headers ;

  if(table !== "" ){
 rows = table ;
 headers= [] ;

for(let i in rows[0]){         // getting headers for the table
    headers.push(i)
}
  }
  return (
  <>{
  rows === null? <div></div>      // render only when data is available
  :  <>
    {console.log(rows[0])}
    <Container maxWidth="md" gutterBottom>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              {
                  headers?.map((head)=>(
                    <TableCell align="center">{head}</TableCell> // render header
                  ))
              } 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => ( // render rows
            <TableRow>
                {
                  headers?.map((head)=>(  
                    <TableCell align="center">{row[head]}</TableCell> //  render each cell 
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
