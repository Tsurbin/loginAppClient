import './App.scss';
import React from "react";

import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';
import LoggedInPage from './components/loggedIn/LoggedInPage';

// class App extends React.Component { 
//   render() {
//       return (
//         <div className="main">
        
//             <Routes>
//                 <Route path="/" element={ <Login/> } />
//                 <Route path="/signUp" element={ <SignUp/> } />
//             </Routes>
//         </div>
//       );
//   }  
// }

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Navigate replace to="/login"/> }>{LoginPage}</Route>
          <Route path="login" element={ <LoginPage/> } />
          <Route path="signup" element={ <SignupPage/> } />
          <Route path="loggedIn" element={ < LoggedInPage/>} />
        </Routes>
      </div>
    )
}

export default App;
