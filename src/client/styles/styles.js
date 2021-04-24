import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   icon: {
    height: '25px',
    margin: '20px'
  },
  select: {
    minWidth: '300px' 
  },
  cardGrid: {
    padding: '20px 5px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: "100%"
  },
  cardContent: {
    flexGrow: 1
  },
  buttonBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
  },

}));

export default useStyles;