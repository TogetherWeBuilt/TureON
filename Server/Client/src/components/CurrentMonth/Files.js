import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 August, 2023',
    'String starting with "1"',
    'Locked',
    '200159',
    312.44,
  ),
  createData(
    1,
    '9 August, 2023',
    'Check for palindrome string',
    'Open',
    '200158',
    866.99,
  ),
  createData(2, '16 July, 2023', 'Check for Odd or Even', 'Open', '200157', 100.81),
  createData(
    3,
    '2 July, 2023',
    'String start with "0" and end with "1"',
    'Open',
    '200156',
    654.39,
  ),
  createData(
    4,
    '15 June, 2023',
    'Accept only "01" pattern',
    'Locked',
    '200155',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Files</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Accessibility</TableCell>
            <TableCell>Project No.</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="#01bf71
      
      
      
      
      " href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}