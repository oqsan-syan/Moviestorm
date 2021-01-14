import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function IntroButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className='btn' variant="contained">
        <Link to='/' className='btn__inner' >Watch Free for 30 Days <NavigateNextIcon /></Link>
      </Button>
    </div>
  );
}