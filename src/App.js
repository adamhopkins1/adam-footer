import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Home from './Website/Home'

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="header">
              <li>
                <Link to="Nav">Nav</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/footer">Footer</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home/>}></Route>
                 <Route exact path='Nav' element={< Nav />}></Route>
                 <Route exact path='/blog' element={< Blog />}></Route>
                 <Route exact path='/footer' element={< Footer />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}

export default App;