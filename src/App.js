
import { Container } from '@material-ui/core';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Firstcontent from "./components/Firstcontent";
import Secondcontent from "./components/Secondcontent";
import Thirdcontent from "./components/Thirdcontent";
import Fourthcontent from "./components/Fourthcontent";
import Fifthcontent from "./components/Fifthcontent";
import {Route} from 'react-router-dom';
import Login from "./components/Login";
import { useLocation } from "react-router-dom";
import ReactGA from 'react-ga'
import React, { useEffect } from 'react';
ReactGA.initialize('UA-199513378-1');


function App() {

  const location = useLocation();
  useEffect(() => {
    // To Report Page View 
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (

    <Container>
      <Header />
      <Route exact path="/" component={Firstcontent}/>
      <Route exact path="/Secondcontent" component={Secondcontent}/>
      <Route exact path="/Thirdcontent" component={Thirdcontent}/>
      <Route exact path="/Fourthcontent" component={Fourthcontent}/>
      <Route exact path="/Fifthcontent" component={Fifthcontent}/>
      <br></br>
      <br></br>
      <Login />
      <br></br>
      <br></br>
      <Footer />
  
    </Container>
    



  );
}

export default App;
