import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    display: 'flex',
    margin:'10px 0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
  },
  image: {
    marginLeft: '15px',
  },
}));