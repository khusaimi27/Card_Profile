import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

const educationlist = [
  {
    University: "University Malaysia Pahang",
    Course: "Bachelor of Engineering in Mechatronic",
    faculty: "Faculty of Engineering Technology Mechatronic and Manufacturing",
    color: "blue",
  },
  {
    University: "German Malaysian Institute",
    Course: "Bachelor of Engineering in Mechatronic",
    faculty: "Faculty of Engineering Technology Mechatronic and Manufacturing",
    color: "Red",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
        <EducationList />
        <Footer />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="photo_2023-01-25_10-47-41.jpg"
      alt="Mohd Khusaimi Ariff Bin Rossly"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Mohd Khusaimi Ariff</h1>
      <p>
        Full Stack developer and teacher at udemy. When not coding or preparing
        a course, I like to play board games, to cook (and eat), or to just
        enjoy the portugese sun at the beach
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

// format - color - susun atur
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "babay emoji"}
        {level === "intermidiate" && "strong hand"}
        {level === "advanced" && "stronghand"}
      </span>
    </div>
  );
}

function EducationList() {
  return (
    <div className="education-list">
      {educationlist.map((education) => (
        <Education
          propsUniversity={education.University}
          propsCourse={education.Course}
          propsFaculty={education.faculty}
          propsColor={education.color}
        />
      ))}
    </div>
  );
}

function Education({ propsUniversity, propsCourse, propsFaculty, propsColor }) {
  return (
    <div className="education" style={{ backgroundColor: propsColor }}>
      <span>{propsUniversity}</span>
      <span>{propsCourse}</span>
      <span>{propsFaculty}</span>
    </div>
  );
}

function Footer() {}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
