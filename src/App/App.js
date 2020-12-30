import logo from './logo.svg';
import './App.css';
import SideMenu from '../components/SideMenu';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../components/Header';

const useStyle=makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})


function App() {
  const classes=useStyle();

  return (
    <>
    <SideMenu/>
    
    <div className={classes.appMain}>
      <Header/>
    </div>
    <CssBaseline/>
    </>
  );
}

export default App;
