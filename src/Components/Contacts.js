import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Contacts({ data, classes }) {
  const btnClass = useStyles();
  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">ID</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Email</TableCell>
          <TableCell align="left">Phone number</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow key={row.name}>
            <TableCell align="left">{row.id}</TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.email}</TableCell>
            <TableCell align="left">{row.phone}</TableCell>
            <Button variant="contained" color="primary" className={btnClass.button} aria-label="edit" startIcon={<EditIcon />}>
              Edit
            </Button>
            <Button variant="contained" color="primary" className={btnClass.button} aria-label="delete" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </TableRow>
        ))}
      </TableBody>
    </Table>

  );
}
