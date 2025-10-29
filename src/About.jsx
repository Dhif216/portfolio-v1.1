import React from 'react';
import StarBorder from './components/StarBorder/StarBorder';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        I'm a passionate UX/UI designer creating clean and interactive interfaces. 
        I love transforming ideas into beautiful designs that work.
      </p>

      {/* Skills with StarBorder effect */}
      <div className="skills">
        <StarBorder as="span" color="#06ee2dff" speed="6s">Figma</StarBorder>
        <StarBorder as="span" color="#06ee2dff" speed="6s">Adobe XD</StarBorder>
        <StarBorder as="span" color="#e85f0aff" speed="6s">React</StarBorder>
        <StarBorder as="span" color="#06ee2dff" speed="6s">HTML/CSS</StarBorder>
        <StarBorder as="span" color="#9ac223ff" speed="6s">JavaScript</StarBorder>
      </div>
    </section>
  );
};

export default About;
