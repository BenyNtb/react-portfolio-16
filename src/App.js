import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import About from './components/About'
import './App.sass';
import { AnimatedText } from './components/AnimatedText/AnimatedText';

function App() {
    const [scrollbar, setScrollbar] = React.useState('0%')

    React.useEffect(() => {
        const listenToScrollEvent = () => {
            document.addEventListener('scroll', () => {
                const totalHeight = document.body.scrollHeight - window.innerHeight
                const progressHeight = ((window.pageYOffset/totalHeight)*100) +'%'
                setScrollbar(progressHeight)
            })
        }
        listenToScrollEvent()
    })
    return (
        <Fragment>
            
            <main>
                <div id='progressbar' style={{height:scrollbar}}>
                <div id='scrollPath'></div>
                </div>
            </main>
            <div className="App">
                <AnimatedText
                    textColor='#FFFFFF'
                    overlayColor='#ff8585'
                >
                    {/* <h1>{props.titre}</h1> */}
                </AnimatedText>    
            </div>
        <Router>
            <Navbar/>
            <About titre='Beny'/>
        <Switch>
            <Route path='/' exact component={AboutMe}/>
            <Route path='/skills' component={Skills}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/contact' component={Contact}/>
        </Switch>    
        </Router>
        </Fragment>
    )
}

export default App;