import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import About from './components/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <>
        <Router>
            <Navbar/>
            <About/>
        <Switch>
            <Route path='/' exact />
            <Route path='/skills' component={Skills}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/contact' component={Contact}/>
        </Switch>    
        </Router>
        </>
    )
}

export default App;