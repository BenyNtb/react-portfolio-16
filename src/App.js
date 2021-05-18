import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutMe from './pages/Home';
import Skills from './pages/AboutMe';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.sass';


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
        <>
            
            <main>
                <div id='progressbar' style={{height:scrollbar}}>
                <div id='scrollPath'></div>
                </div>
            </main>
            {/* <div className="App">
                <h2>
                    <withTranslation i18nKey="welcomeMsg" />
                </h2>
                <withTranslation i18nKey='nested.startMsg'/>
                <br/>
                <ChangeLanguage/>
            </div> */}
        <Router>
            {/* <Navbar/> */}
            {/* <About titre='Beny'/> */}
        <Switch>
            <Route path='/' exact component={AboutMe}/>
            <Route path='/skills' component={Skills}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/contact' component={Contact}/>
        </Switch>    
        </Router>
        
        </>
    )
}

export default (App);

