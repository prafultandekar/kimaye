// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignPage from './pages/Signpage/SignPage';
// import header from './components/Header/header';
// import Header from "./components/Header/header"

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="LoginPage" element={<LoginPage/>} />
        <Route path="/" element={<SignPage/>}/>
      </Routes>
     
     
    </div>
  );
}

export default App;
