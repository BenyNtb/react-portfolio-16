import React from 'react'
import { Link } from 'react-router-dom'
function Footer () {
    return (
        <div className="footer-container">
            <section className='footer'>
                <Link>
                    <i className="fab fa-facebook-f"></i>
                    <i className='fab fa-instagram'></i>
                    <i className='fab fa-youtube'></i>
                </Link>
            </section>
        </div>
    )
}
export default Footer;