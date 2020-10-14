import React from 'react'
import "./Home.css"
import doctorMain from "./bookmydoctor.jpg"

export default function Home() {

    const myFunction = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more...";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less...";
            moreText.style.display = "inline";
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="text">
                        <div className="text1">

                            <h5>Keep Your</h5>
                        </div>
                        <div className="text2">
                            <h3><b>Family More Healthy</b></h3>

                        </div>
                        <div className="text3">
                            <p>Find the best Doctors during <b>COVID-19</b> Pandemic to get instant medical advice and second opinion for your health problems.
                                    Consult our doctors online on face-to-face video chat for professional<span id="dots">...</span><span id="more">
                                    advice from the comfort of your home.Share your health
                                    concerns with our medical experts and we will help you find the right Doctor. All the doctors are registered medical practitioners.
                                    Along with qualifying degrees - experience, research and track-record of practice are taken into account before a doctor is credentialed
                                     with 1mg and is given access to answer patient queries.</span></p>


                        </div>
                        <div >
                            <p className="btn text4" onClick={myFunction} id="myBtn">Read more...</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">

                    <img className="doctor" src={doctorMain} />

                </div>

            </div>
        </div>

    )
}
