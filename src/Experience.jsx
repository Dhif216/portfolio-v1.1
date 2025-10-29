import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      date: "2021 - Present",
      title: "Senior UI/UX Designer - Freelance",
      description:
        "Working with global clients to deliver exceptional user experiences across various digital products.",
      details: [
        "Led the UX research and design for over 8 successful projects",
        "Collaborated with development teams to ensure design integrity",
        "Implemented user-centered design methodologies",
        "Delivered projects for clients in fintech, e-commerce, and education sectors",
      ],
    },
    {
      date: "2018 - 2021",
      title: "UI/UX Designer - Tech Solutions Inc.",
      description:
        "Worked as part of a cross-functional team to create innovative digital solutions.",
      details: [
        "Designed responsive web interfaces and mobile applications",
        "Conducted user testing and implemented feedback",
        "Created design systems to maintain consistency",
        "Collaborated with product managers to align design with business goals",
      ],
    },
    {
      date: "2016 - 2018",
      title: "Junior UI Designer - Creative Agency",
      description:
        "Started my professional journey in the digital design field.",
      details: [
        "Assisted senior designers in creating visual assets",
        "Learned and applied UI/UX design principles",
        "Contributed to multiple web design projects",
        "Developed skills in various design tools and software",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-header fade-in">
        <h2>
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className="divider"></div>
        <p>
          My professional journey as a UI/UX designer, including freelance
          projects and collaborations.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item fade-in">
            <div className="experience-card">
              <span className="experience-date">{exp.date}</span>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-description">{exp.description}</p>
              <ul>
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
