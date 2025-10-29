import React from "react";
import CountUp from "./components/CountUp"; // import your CountUp component
import './Skills.css';

const Skills = () => {
  const skillGroups = [
    [
      { name: "UI Design", percent: 95 },
      { name: "UX Research", percent: 90 },
      { name: "Wireframing", percent: 95 },
      { name: "Prototyping", percent: 88 },
    ],
    [
      { name: "Figma", percent: 98 },
      { name: "Adobe XD", percent: 92 },
      { name: "Adobe Photoshop", percent: 85 },
      { name: "Adobe Illustrator", percent: 80 },
    ]
  ];

  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2>My <span className="text-gradient">Skills</span></h2>
        <div className="divider"></div>
        <p>I've honed my skills in various areas of UI/UX design, continuously learning and adapting to new technologies and methodologies.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="skills-column">
            {group.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-title">
                  <h4>{skill.name}</h4>
                  {/* CountUp for animated percentages */}
                  <span><CountUp to={skill.percent} />%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
