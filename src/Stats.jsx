import React from "react";
import CountUp from "./components/CountUp"; // Adjust path if needed
import "./Stats.css";

const statsData = [
  { number: 5, suffix: "+", label: "Years Experience" },
  { number: 30, suffix: "+", label: "Projects Completed" },
  { number: 10, suffix: "+", label: "Happy Clients" },
  { number: 1, suffix: "+", label: "Award Winning" },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div className="stat-card fade-in" key={index}>
            <div className="stat-number">
              <CountUp to={stat.number} className="count" />
              {stat.suffix}
            </div>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
