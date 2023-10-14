import logo from './logo.svg';
import './App.css';
import {Space} from 'antd'
import MainContent from './Components/PageContent/MainContent';
import Sidemenu from './Components/SideMenu/Sidemenu';
import { BrowserRouter } from 'react-router-dom';
import PageContent from './Components/PageContent/PageContent';

function App() {
  return (
    <BrowserRouter>
    <div  style={{display:'flex',}}>
    <Sidemenu />
    <div style={{width:"100%"}}>
      <PageContent/>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
