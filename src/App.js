//import logo from './logo.svg';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CreatePost from "./components/createpost";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from './components/signup';

function App() {

  const [login, setLogin] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="/home" element={<Home setLogin={setLogin} login={login} />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
