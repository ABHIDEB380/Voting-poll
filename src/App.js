import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Component/main/Login';
import Poll from './Component/main/Poll';
import Result from './Component/main/Result';
import { useState } from 'react';
import Header from './Component/main/Header';


function App() {
  
  const [respond, setRespond]= useState('');
  const [showHead, setShowHead] = useState(true);

  function fetchSelected(data){
    console.log("data that is fateched",data)
    setRespond(data);
  }
  console.log("respond that is fateched",respond)
  return (
    <>
    <BrowserRouter>
    {showHead && <nav><Header/></nav>}
      <Routes>
        <Route path="/" element={<Login setShowHead={setShowHead}/> }/>
        <Route path="/poll" element={<Poll fetchData={fetchSelected} setShowHead={setShowHead}/>} />
        <Route path="/result" element={<Result result={respond} setShowHead={setShowHead}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
