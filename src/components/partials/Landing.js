import React from "react";
import LandingImage from '../images/landing/Landing-Image.png';
import "./styles/LandingStyles.css"
import "./styles/Fonts.css"

function Landing()
{
    return(
        <div>
            <div id="landing-section">
                <div className="container">
                    <div className="row my-auto">
                        <div className="col-lg-5">
                            <img className="landing-img mx-auto d-block" src={LandingImage}></img>
                        </div>
                        <div className="col-lg-7 landing-row-2">
                            <h3 id="landing-title">
                                <span className="highlight-area">Tech Fashion</span> Enthusiast 
                                <br/> From <span className="highlight-area">Brazil</span> 
                            </h3>

                            <h5 className="highlight-area model-name">PITIYAQ ANA →</h5>

                            <p id="landing-paragraph">
                                To the untrained, techwear can look like a more pocket-loving 
                                offshoot of the kind of drapey, all-black clothing the 
                                <span className="highlight-area"> Rick Owens </span> and 
                                <span className="highlight-area"> Yohji Yamamoto </span> acolytes were wearing at the start of 
                                the decade →
                            </p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
}

export default Landing;