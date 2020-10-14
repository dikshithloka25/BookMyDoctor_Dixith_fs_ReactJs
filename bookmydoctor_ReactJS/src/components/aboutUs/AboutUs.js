
import React,{useState} from 'react';
import './AboutUs.css';
import {FcSms,FcCallTransfer,FcSmartphoneTablet,FcBiotech} from "react-icons/fc";
import {FaStar,FaStarHalfAlt} from "react-icons/fa";

export default function  AboutUs(){

    return(
        <div class="container">
            <div class="row">
            <div class="col-md-6">
            <div class="card card-about">
                <div class="card-body about">
                    <div class="row">
                       <div class="col-md-3">
                           <h1><FcSms/></h1>
                       </div>
                       <div class="col-md-6">
                           <h5 id="about-us">Medical Advice</h5>
                           <p id="about-us">through instant <br/> Doctor chat</p>
                       </div>
                    </div>
                    
                </div>
                </div>
                <div class="card card-about">
                <div class="card-body about">
                <div class="row">
                       <div class="col-md-3">
                           <h1><FcSmartphoneTablet/></h1>
                       </div>
                       <div class="col-md-6">
                           <h5 id="about-us">Video</h5>
                           <p id="about-us">Consultation</p>
                       </div>
                    </div>
                    
                </div>
                </div>
                <div class="card card-about">
                <div class="card-body about">
                <div class="row">
                       <div class="col-md-3">
                           <h1><FcCallTransfer/></h1>
                       </div>
                       <div class="col-md-6">
                           <h5 id="about-us">Phone</h5>
                           <p id="about-us">Consultation</p>
                       </div>
                    </div>
                    
                </div>
                </div>
                <div class="card card-about">
                <div class="card-body about">
                <div class="row">
                <div class="col-md-3">
                           <h1><FcBiotech/></h1>
                       </div>
                       <div class="col-md-6">
                           <h5 id="about-us">Book</h5>
                           <p id="about-us">Lab text-online</p>
                       </div>
                    </div>
                </div>
                </div>
               
                </div>
                <div class="col-md-1">

                </div>
                <div class="col-md-4">
                <div class="card side-card">
                    <div class="card-body side">
                      <h2>Our</h2>
                      <h2>Services</h2>
                    </div>
                </div>

                <div class="card side-card-2">
                    <div class="card-body side-2">
                     <h4 id="rating">Ratings</h4><br/>
                     <h5 id="user">user ratings</h5><br/>
                     <h2 id="star"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></h2>
                     <h2 id="points">4.6</h2>

                    </div>
                </div>

            </div>
            </div>

             {/* <div class="card bottom">
                    <div class="card-body bottom">

                    </div>
                </div> */}
            </div>
            
        
    )
} 