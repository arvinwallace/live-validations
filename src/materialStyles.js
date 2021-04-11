import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: "0px 14px 0px 0px",
    backgroundColor: '#009bf5',
    width: "30px",
    height: "30px",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    height: '40px',
    width: '100%',
    fontSize: '20px',
    marginBottom: '30px'
  },
  inputLabel: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
  circleCheck: {
    marginRight: "5px",
  }
}));