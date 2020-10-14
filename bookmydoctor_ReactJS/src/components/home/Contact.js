import React from 'react'
import "./Contact.css"

export default function Contact() {
    return (
        <div>
            <div>
                <h5 className="word">  <b>So many ways to <i className="letter">Reach Us</i> from wherever you are - online, by email,
             over a call,<br /> in your city, or even on social media.</b></h5>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <i class="fas fa-envelope fa-3x"></i><br /><br />
                    Ask query<br />
                        <b>Mail Us </b><br />
                        <i className="letter">bookmydoctor@gmail.com</i>

                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <i class="fas fa-phone fa-3x"></i><br /><br />
                        <b> Call Us (24/7)</b><br />
                    Any time<br />
                        <i className="letter">+91-9987675123</i><br />
                        <i className="letter"><b>080 22069449</b></i>
                    </div>

                </div>
            </div>
        </div>
    )
}
