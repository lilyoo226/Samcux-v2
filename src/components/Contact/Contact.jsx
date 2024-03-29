import React, { useEffect, useState } from "react";
import {  Fade } from "react-awesome-reveal";
import AnimatedLettersFast from "../RuberBand/RubberBand";
import "./Contact.css";
const Contact = () => {

  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const getInTouch = "Get In Touch".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 30);
  });


  return (
    <section>
      <div id="contact" className="contact-container">
        <p className="intro-intro">
          <span>03.</span> What’s Next?
        </p>
        <Fade>

        <h2>
        <AnimatedLettersFast
            letterClass={letterClass}
            strArray={getInTouch}
            idx={15}
            />
          </h2>
            </Fade>
        <p className="contact-des">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a href="mailto:samuellove228@gmail.com">
       <Fade> <h3 className="intro-button contact-btn">Say Hello</h3></Fade> </a>
       </div>
    </section>
  );
};

export default Contact;
