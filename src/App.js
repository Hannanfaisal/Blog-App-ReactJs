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
  Navigate
} from "react-router-dom";
import axios from "axios";
import PostPreview from './Components/PostPreview';
import Create from './Components/Create';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      auth: false,
      posts: null
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (response)=> {
        this.setState({
          posts: response.data
        })
      }
    ).catch((error)=>{ 
      console.log(error);
    })
  }

  authHandler() {
    this.setState({
      auth: !this.state.auth
    });  
  }

  deleteHandler = (id) =>{
    axios.delete("https://jsonplaceholder.typicode.com/posts/" + id).then((res)=>{

    console.log(res);

    }).catch(function(err){
    
      console.log(err);
    })
  }
  
  render(){
    let posts = "";
    if(this.state.posts != null){
      const tenPosts = this.state.posts.splice(0,10);
      posts = tenPosts.map((post)=>{
        return <PostPreview delete={()=>this.deleteHandler(post.id)} key={post.id} title={post.title} body={post.body}/>
      })
    }
   return (
    <>
    <Router>
      <Navbar login={this.authHandler.bind(this)} status={this.state.auth}/>
      <Routes>
        <Route path="/about" element={ <About/>}/>
        <Route path="/posts" element={ this.state.auth === false ? <Navigate to="/"/> : <Home>{posts}</Home>}/>
        <Route path="/create-posts" element={ <Create/> }/>
        <Route path="/" element={ <Header title="Blogger"/>}/>
        <Route path="*" element={ <div className="text-center p-5"><h1>404 Page Not Found.</h1></div> }/>
      </Routes>
      <Footer/>
    </Router>
    </>
    );
  }
}

export default App;
