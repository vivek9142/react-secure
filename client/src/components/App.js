import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import history from '../history';
import Loading from './Loading';

import Jumbotron from './Jumbotron';
import Feed from './Feed';
import Contact from './Contact';
import About from './About';
import data from '../data/data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: "Manny Henri",
      jumbotronTitle: "List of courses",
      feeds: [],
    }
  }

  async componentDidMount() {
    const url = 'http://localhost:4000/courses';
    const res = await axios.get(url);
    return this.setState({feeds:res.data});
  }

  render() {
    const {loading}  = useAuth0;
    
    if(loading) return <Loading/>

    return (
      <Router history={history}>
        <div className="container">
          <Navigation />
          <Jumbotron title={this.state.jumbotronTitle}/>
          <Routes>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route exact path="/" element={<Feed feeds={this.state.feeds} />} />
          </Routes>
          <div className="footer">
                <p>&copy; {this.state.name} Inc.</p>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
