import myImg from "../../assets/me.jpeg"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import facebook from "../../assets/facebook.png"
import email from "../../assets/email.png"

import "./About.css"

const AboutScreen = () => {

    return (
        <>
            <div className="aboutContainer">
                <div className="aboutHeadCont">
                    <img alt="myImage" src={myImg} className="aboutHeadImg" />
                    <div className="aboutMeCont">
                        <h2 className="aboutMeText">ABOUT ME</h2>
                        <p className="aboutMe">
                            HI!. My name is Sahak. I am 18 years old. I am an creative,
                            self-motivated and hard working person who enjoys a challenge 
                            and achieving personal goals. My present career aim is to work within it because i enjoy working with computers,
                            i enjoy the environment and i find the work interesting and satisfying.
                            the opportunity to learn new skills and work with new technologies is particularly attractive to me.
                        </p>
                    </div>
                </div>
                <div className="miniCont">
                    <div className="miniBox">
                        <h2 align="center" className="miniBoxTitle">Skills</h2>
                        <div className="miniBoxCont">
                            <p className="miniBoxText" >HTML, CSS, bootstrap, javascript, react, redux, react-native, expo, node.js, RESTful API, mongoDB, firebase, git</p>
                            <div style={{marginTop: 25}}> 
                            <h2 align="center" className="miniBoxTitle">Education</h2>
                            <p className="miniBoxText" >*  Hovhannes Tumanyan Basic School No.32 </p>
                            <p className="miniBoxText" >* TUMO - CENTER FOR CREATIVE TECHNOLOGIES </p>
                            </div>
                        </div>
                    </div>
                    <div className="miniBox">
                        <h2 align="center" className="miniBoxTitle">Contact</h2>
                        <div className="miniBoxCont">
                           <a href="mailto:stepanyansahak@gmail.com" ><img alt="email" className="miniBoxImg" src={email} /></a>
                           <a href="https://www.linkedin.com/in/sahak-stepanyan-10788b185/" target="_blank" rel="noreferrer"><img alt="linkedin" className="miniBoxImg" src={linkedin} /></a>
                           <a href="https://github.com/sahak77" target="_blank" rel="noreferrer"><img className="miniBoxImg" alt="github" src={github} /></a>
                           <a href="https://www.facebook.com/sahak.stepanyan.31" target="_blank" rel="noreferrer"> <img className="miniBoxImg" alt="facebook" src={facebook} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutScreen;