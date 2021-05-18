import React from 'react'
import Navbar from '../components/Navbar';
import '../css/Client.css'
import { init } from 'emailjs-com';

function Contact () {
    return (
        <div>
            <Navbar/>
            <div id="loading-page" style={{opacity: 0, visibility: 'hidden', zIndex: -1}}>
                <div id="loading-page-logo" style={{opacity:0}}>
                </div>
            </div>
            <div id="contact__content-page" class="vc_row wpb_row vc_row-fluid" style={{paddingTop:'0px', paddingBottom:'0px', marginTop:'0px', marginBottom: '0px', top: '0px', bottom:'0px', zIndex:'', marginLeft:'px', marginRight:'px', boxshadow:'',  overflow:'', position:'relative'}}>
                <div class="container after-clear">
                    <div class="wpb_column vc_column_container vc_col-sm-12">
                        <div class="vc_column-inner ">
                            <div class="wpb_wrapper">
                                <div class="vc_row wpb_row vc_inner vc_row-fluid">
                                    <div class="row">
                                        <div class="col-xl-5 col-lg-5 col-md-5 col-10 col-full-height left-content-info-contact wpb_column vc_column_container vc_col-sm-6">
                                            <div class="vc_column-inner ">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                                
            <div class="wpb_wrapper">
                <h1 data-aos='zoom-in'style={{overflow: 'hidden'}} class="vc_custom_heading text__mask mb-xl-3 mb-lg-4 mb-0 pb-xl-1 pb-lg-1 pb-1 animated">
            <div  class="text__mask-wrap" style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>Let’s collaborate</div>
                </h1>
        <div class="wpb_text_column wpb_content_element text__mask animated" data-screen_offset=".1"
            style={{overflow: 'hidden'}}>
            <div class="text__mask-wrap" style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                <div data-aos='zoom-in' class="wpb_wrapper">
                    <p><a href="mailto:b.ntambwe97@gmail.com" style={{marginLeft:'10%'}}>b.ntambwe97@gmail.com</a></p>

                </div>
            </div>
        </div>
        <div data-aos="zoom-in" class="contact__info">
            <div class="row">
                <div class="contact__info-social col-xl-6 col-5 text__fade-horizontal animated" data-screen_offset=".2" style={{bottom: "20vh"}}>
                    <div class="text__fade-horizontal-wrap" style={{opacity: 1, marginLeft:'10%', marginBottom: '5%', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                        <h4 class="contact__info-title">Find me</h4>
                        <ul class="contact__info-list-social row justify-content-start mb-0 pl-0">
                            <li class="social__item col-auto">
                                <a target="_blank" href="https://github.com/BenyNtb"><i class="fab fa-github"></i></a>
                            </li>
                            <li class="social__item col-auto">
                                <a target="_blank" href="https://be.linkedin.com/in/benedicte-modi-ntambwe"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            </div>
{/* fin */}
        <div class="col-xl-4 col-lg-4 col-md-5 col-10 offset-xl-1 offset-lg-1 offset-0 right-from-content wpb_column vc_column_container vc_col-sm-6">
            <div class="vc_column-inner ">
                <div data-aos="flip-left" class="wpb_wrapper">
                    <h4 style={{overflow: 'hidden'}} class="vc_custom_heading mt-xl-2 mt-lg-3 mt-2 pt-xl-1 pt-lg-0 pt-1 mb-xl-2 mb-lg-2 pb-xl-1 pb-lg-1 pb-0 mb-2 text__mask animated" data-screen_offset=".1">
                        <div class="text__mask-wrap" style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>Send your inquiry</div>
                        </h4>
                        <div class="contact__form-wrap text__fade-horizontal animated" data-screen_offset=".15">
                    <div class="text__fade-horizontal-wrap" style={{opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                        <div id="form-message"></div>
                        <form action="#" method="POST" id="contact__form" novalidate="novalidate">
                            <input type="hidden" name="wp_nonce" value="7edc7384e0"></input>
                            <div class="row">
                                <div class="form-group col-5">
                                    <label for="name" class="text-uppercase">Name</label>
                                    <div class="wrap-input">
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Your name"></input>
                                    </div>
                                </div>
                                <div class="form-group col-5">
                                    <label for="country" class="text-uppercase">Subject</label>
                                    <div class="wrap-input">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Your subject"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-5">
                                    <label for="company" class="text-uppercase">Company</label>
                                    <div class="wrap-input">
                                        <input type="text" class="form-control" name="company" id="company" placeholder="Your company"></input>
                                    </div>
                                </div>
                                <div class="form-group col-5">
                                    <label for="email" class="text-uppercase">Email</label>
                                    <div class="wrap-input">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Email address"></input>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="message" class="text-uppercase">Message</label>
                                <div class="wrap-input">
                                <textarea class="form-control" name="message" id="message" rows="5" placeholder="Start typing here"></textarea>
                                </div>
                            </div>

                            <div class="contact__form-button">
                                <button type="submit" id="contact__form-button" data-text_sending="Sending..." class="d-block d2__button row no-gutters align-items-center">
                                    <span class="d2__button-text col-auto">Submit</span>
                                    <span class="d2__button-icon col-auto">
                                        <svg width="31" height="17" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 31 17" style={{height: '17px', width: '31px'}}>
                                            <path d="M0 8.2h30M22.2.4L30 8.2 22.2 16" stroke="#000" stroke-miterlimit="10"></path>
                                            </svg>
                                    </span>
                                <span class="d2__button-shadow" style={{transform: 'matrix(1, 0, 0, 1, -120, 0)'}}></span></button>
                            </div>
                        </form>
                    </div>
                </div>
                        


                </div></div></div>
                    
        </div>
    )
}

export default Contact;