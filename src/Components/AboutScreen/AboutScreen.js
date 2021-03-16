import myImg from "../../assets/me.jpeg"

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
                            when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially 
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="miniCont">
                    <div className="miniBox"></div>
                    <div className="miniBox"></div>
                </div>
            </div>
        </>
    );
}

export default AboutScreen;