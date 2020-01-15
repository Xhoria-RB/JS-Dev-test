import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import DataTransformer from '../utils/dataTransformer';
import isEmpty from 'lodash/isEmpty';
import sortBy from 'lodash/sortBy'
import Contacts from './Contacts'
import UserContext from './UserContext'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function listData(data, length) {
  const transformedData = data.map(DataTransformer);
  const arrData = [];
  for (let i = 0; i < data.length; i++) {
    let randomNum = Math.floor(Math.random() * data.length);
    if (randomNum === 0) {
      randomNum++;
    }
    if (isEmpty(arrData)) {
      arrData.push(transformedData[randomNum]);
    } else {
      if (!arrData.find(el => el.id === randomNum)) {
        arrData.push(transformedData.find(el => el.id === randomNum));
      }
    }
    if (arrData.length === length) {
      break;
    }
  }
  // console.log()
  return sortBy(arrData, ['id']);
}

export default function ContactTable() {
  const { fillUsers, state } = useContext(UserContext);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        fillUsers(listData(res.data, 5));
      })
      .catch(err => console.error)
  }, [fillUsers])
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      {state && isEmpty(state) ? <p>LOADING...</p> : <Contacts data={state} classes={classes} />}
    </TableContainer>
  );
}
