import { useState } from "react";
import "./App.css";

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Интернет магазин",
      description: "Магазин на React",
      link: "#",
      icon: "🛒"
    },
    {
      title: "Калькулятор",
      description: "Калькулятор на JavaScript",
      link: "#",
      icon: "🧮"
    },
    {
      title: "Todo List",
      description: "Список задач на React",
      link: "#",
      icon: "✅"
    }
  ];

  function showMyProjects() {
    setShowProjects(!showProjects);
  }

  return (
    <div className="hero">
       <div className="profile-card">
        <img 
        className="profile-image"
        src="/Мое лицо.jpeg"
        alt="face"/>
      <h1>Санжар Бексеитов</h1>

      <h2>Frontend Developer</h2>

      <p>
        Изучаю React и создаю современные веб-приложения
      </p>
      <div className="contacts">
    <p>📍 Кокшетау, Казахстан</p>
    <p>💻 React Developer</p>
  </div>
<div className="social">
  <a href="#">Telegram</a>
  <a href="#">Instagram</a>
  <a href="#">GitHub</a>
</div>
</div>
      <button className="projects-button" onClick={showMyProjects}>
  Мои проекты
</button>

      {showProjects && (
        <section className="projects">
          <h2> Проекты</h2>

          <div className="projects-list">
            {projects.map(function(project) {
              return (
                <div
                  className="project-card"
                  key={project.title}>  
                  <div className="project-icon">
                  {project.icon}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link}>Открыть проект</a>
                   <button onClick={function() {
                  setSelectedProject(project);
                     }}>
                   Подробнее
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;