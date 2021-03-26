import React, { useEffect } from 'react'
import { Image } from 'react-bootstrap';
import Aos from 'aos';
import '../css/Competence.css'


const Competence = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
        return (
            <div>
                <div className='skills'>
                    <Image
                    src='images/skills.jpg'
                    path='/skills'> 
                    </Image>
                </div>
                <div id="main" role="main" data-section-title="Beny. Full Stack developer and code lover.">
                    <section id="more-content">
                        <section class="first" id="about" data-section-title="About me. Beny">
                            <div class="section-inner">
                                <div class="clearfix" id="skills-chart">
                                <ul id="chart-legend">
                                    <li id="label01" style={{height: "54px"}}><span class="legend-label"><strong>Uh?</strong><br/>Next question?</span></li>
                                    <li id="label02" style={{height: "54px"}}><span class="legend-label"><strong>Basic</strong>, you can't<br/>always win...</span></li>
                                    <li id="label03" style={{height: "54px"}}><span class="legend-label"><strong>Medium</strong>, I'm trying<br/>to improve.</span></li>
                                    <li id="label04" style={{height: "54px"}}><span class="legend-label"><strong>High</strong>, <br/>I'm pretty good.</span></li>
                                    <li id="label05" style={{height: "54px"}}><span class="legend-label">I'm the <strong>master</strong><br/>of the universe.</span></li>
                                    </ul>
                                <ul id="chart-data" class="clearfix">
								    <li id="bar01" style={{width: '11.1111%'}}>
                                        <div  class="data-bar" style={{height: '100px'}}>
                                            <span class="data-label" data-abbr="" style={{opacity: '1'}}>
                                                <span>UX design</span>
                                                </span>
                                                </div>
                                                </li>
                                    <li id="bar02" style={{width: '11.1111%'}}>
                                        <div class="data-bar" style={{height: '117px'}}>
                                            <span class="data-label" data-abbr="" style={{opacity: '1'}}>
                                                <span>html &amp; css</span>
                                                </span>
                                        </div>
                                    </li>
                                    <li id="bar03" style={{width: '11.1111%',}}>
                                        <div class="data-bar" style={{height: '122px'}}>
                                            <span class="data-label" data-abbr="" style={{opacity: '1'}}>
                                                <span>javascript</span>
                                                </span>
                                        </div>
                                    </li>
                                    <li id="bar09" style={{width: '11.1111%'}}>
                                        <div class="data-bar" style={{height: '122px'}}>
                                            <span class="data-label" data-abbr="flash" style={{opacity: '1'}}>
                                            <span>jquery</span>
                                            </span>
                                        </div>
                                    </li>
                                    <li id="bar07" style={{width: '11.1111%'}}>
                                        <div class="data-bar" style={{height: '105px'}}>
                                            <span class="data-label" data-abbr="" style={{opacity: '1'}}>
                                            <span>ES6 &amp; React</span>
                                            </span>
                                        </div>
                                    </li>
                                    <li id="bar04" style={{width: '11.1111%'}}>
                                        <div class="data-bar" style={{height: '220px'}}>
                                            <span class="data-label" data-abbr="" style={{opacity: '1'}}>
                                                <span>gaming</span>
                                                </span>
                                        </div>
                                    </li>
                                    <li id="bar05" style={{width: '11.1111%'}}>
                                        <div class="data-bar" style={{height: '10px'}}>
                                            <span class="data-label" data-abbr="php" style={{opacity: '1'}}>
                                                <span>php</span>
                                                </span>
                                        </div>
                                    </li>
                                    <li id="bar06" style={{width: '11.1111%'}}>
                                        <div class="data-bar" style={{height: '140px'}}>
                                            <span class="data-label" data-abbr="" style={{opacity: '1'}}>
                                                <span>Digital illustration</span>
                                                </span>
                                        </div>
                                    </li>
                                    <li id="bar08" style={{width: '11.1111%'}}>
                                        <div class="data-bar" style={{height: '55px'}}>
                                            <span class="data-label" data-abbr="video &amp; 3d" style={{opacity: '1'}}>
                                                <span>video editing</span>
                                                </span>
                                        </div>
                                    </li>
							</ul>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        )
    }


export default Competence;