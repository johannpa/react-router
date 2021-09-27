import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useLocation, useHistory} from "react-router-dom";
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/posts/2">Post 2</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/posts" exact component={Posts}/>
          <Route path="/posts/:slug" component={Post}/>
          <Route path="/about" exact component={About}/>
          <Route path="*" exact>
            Not Found
            <Redirect to="/"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Accueil</h1>
    </div>
  );
}

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}

const Post = () => {
  let { slug } = useParams();
  let history  = useHistory();
  let location  = useLocation();

console.log(location);

  return (
    <div>
      <h1>Article {slug}</h1>
      <p>{location.pathname}</p>
      <Link 
        to={{
          pathname: "/about",
          state: {
            postTitle: slug,
          },
        }}
      >
        Go
      </Link>
      <button onClick={() => history.goBack()}>Prev</button>
      <button onClick={() => history.goForward()}>Next</button>
    </div>
  );
}


export default App;
