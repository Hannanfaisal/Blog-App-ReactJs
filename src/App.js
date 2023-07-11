import './App.css';
import { Component } from 'react';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      auth: 0
    }
  }

  authHandler() {
    this.setState({
      auth: !this.state.auth
    });  
  }

  
  render(){
   return (
    <>
    <Router>
      <Navbar login={this.authHandler.bind(this)} status={this.state.auth}/>
      <Routes>
        <Route path="/about" element={ <About/>}/>
        <Route path="/posts" element={ <Home/>}/>
        <Route path="/" element={<Header title="Blogger"/>}/>
        <Route path="*" element={ <div className="text-center p-5"><h1>404 Page Not Found.</h1></div> }/>
      </Routes>
      <Footer/>
    </Router>
    </>
    );
  }
}

export default App;
