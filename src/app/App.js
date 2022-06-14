import { BrowserRouter } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import Header from '../app/components/Header';
import MainMenu from '../app/components/MainMenu';
import Router from './Router';
import './App.scss';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <div className="mon-app">
        <Router />
        <MainMenu />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
