import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  customButton: {
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkred',
    },
  },
});

const CustomButton = () => {
  const classes = useStyles();

  return (
    <Button className={classes.customButton} variant="contained">
      Sign Up
    </Button>
  );
};

export default CustomButton;