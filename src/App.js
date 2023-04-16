import { Link, Outlet } from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header.js';

const App = () => {

  return (

    <div className="app-container">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="main-container">
        <div className="sidenav-container">

        </div>
        <div className="app-container">
          <Outlet></Outlet>
        </div>
      </div>

    </div>
  );
}

export default App;
