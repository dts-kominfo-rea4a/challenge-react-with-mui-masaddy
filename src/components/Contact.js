// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
// const Contact = ({ data }) => {
const Contact = (props) => {

    // Contact berisi foto, nama, telepon, dan email
    return (

        <Table sx={{ maxWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Photo URL</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Asumsi nama props adalah todos */}
        {props.data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.photo}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    );
};

export default Contact;
