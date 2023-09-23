import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Notifications } from 'react-push-notification';

import React from 'react';
import Loader from './components/loader';
import Main from './components/main';
import AI from './components/aiprompt';
import ChatBotFeature from './components/chatbotfeature';
import CheerUp from './components/cheerup';
import WellBeing from './components/wellbeing';
import QuizHolder from './components/QuizHolder';

function App() {
  

  return (
    <Router>
      <div className="App">
      <Notifications/>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/chatbotfeature" element={<ChatBotFeature />}></Route>
          <Route path="/ai" element={<AI />}></Route>
          <Route path="/cheerup" element={<CheerUp />}></Route>
          <Route path="/wellBeing" element={<WellBeing />}></Route>
          <Route path="/quizHolder" element={<QuizHolder />}></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;


