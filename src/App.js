import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch,Route, Redirect} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Navbar from './components/Navbar'


const App=()=> {

  return (
    <>
    <Navbar />
    <Switch>
   <Route exact path="/" component={Home}></Route>
   <Route  exact path="/about" component={About}></Route>
   <Route  exact path="/courses" component={Courses}></Route>
   <Route  exact path="/contact" component={Contact}></Route>
   <Redirect to="/"></Redirect> 
   </Switch>
   </>
  );
}

export default App;