import React from 'react';
import '../skills.css'; // Your CSS file for styling

// Helper component to render inline SVG strings safely
function SvgIcon({ svg }) {
    return <span className="tech-icon" dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default function Skills() {
    const techStacks = {
        frontend: [
            {
                name: "JavaScript",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                iconSvg: `<svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="#F7DF1E" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2h20v20H2z"/>
          <path d="M12 17.5h2.5v-5H12v5zM7 11h2v6H7v-6z" fill="#000"/>
        </svg>`
            },
            {
                name: "React",
                link: "https://reactjs.org",
                iconSvg: `<svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path stroke="#61DAFB" stroke-width="1.5" d="M12 2c3 0 6 4 6 10s-3 10-6 10-6-4-6-10 3-10 6-10z"/>
        </svg>`
            },
            {
                name: "HTML5 / CSS3",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                iconSvg: `<svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="#E34F26" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2h20v20H2z"/>
          <text x="12" y="16" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">HTML5</text>
        </svg>`
            }
        ],
        backend: [
            {
                name: "Node.js",
                link: "https://nodejs.org",
                iconSvg: `<svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="#339933" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l10 5v10l-10 5-10-5V7z"/>
          <text x="12" y="16" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">Node</text>
        </svg>`
            },
            {
                name: "NestJS",
                link: "https://nestjs.com",
                iconSvg: `<svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="#E0234E" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7v10l10 5 10-5V7z"/>
          <path d="M7 17l5-7 5 7" stroke="#fff" stroke-width="1.5" fill="none"/>
        </svg>`
            },
            {
                name: "TypeScript",
                link: "https://www.typescriptlang.org",
                iconSvg: `<svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="#3178C6" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" ry="4" fill="#3178C6"/>
          <text x="12" y="16" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">TS</text>
        </svg>`
            }
        ],
        tools: [
            {
                name: "Git / GitHub",
                link: "https://github.com",
                iconSvg: `<svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="#181717" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 6.838 9.487c.5.09.682-.217.682-.482 0-.237-.01-1.025-.015-1.85-2.782.604-3.37-1.342-3.37-1.342-.455-1.157-1.11-1.465-1.11-1.465-.907-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.527 2.34 1.086 2.91.831.09-.646.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.944 0-1.09.39-1.98 1.03-2.678-.104-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 5 0c1.91-1.296 2.75-1.027 2.75-1.027.546 1.378.204 2.396.1 2.65.64.698 1.028 1.588 1.028 2.678 0 3.842-2.337 4.687-4.566 4.935.36.31.68.92.68 1.855 0 1.337-.012 2.415-.012 2.743 0 .268.18.577.688.479A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>`
            },
            {
                name: "Docker",
                link: "https://www.docker.com",
                iconSvg: `<svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="#2496ED" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12a2 2 0 0 1-2 2h-2v-2h2v-2h-2V8h2a2 2 0 0 1 2 2z"/>
                  <rect x="2" y="9" width="20" height="2" fill="#2496ED"/>
                  <rect x="4" y="11" width="16" height="4" fill="#2496ED"/>
                  <rect x="6" y="15" width="12" height="2" fill="#2496ED"/>
                </svg>`
            },
            {
                name: "Postman",
                link: "https://www.postman.com",
                iconSvg: `<svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="#FF6C37" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12l20-6v12l-20-6z"/>
          <circle cx="8" cy="12" r="2" fill="#fff"/>
        </svg>`
            }
        ]
    };

    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <h2 className="section-title">Tech Stack</h2>

                <div className="skills-grid">
                    {/* Frontend */}
                    <div className="skill-card">
                        <h3 className="skill-title">Frontend</h3>
                        <ul className="tech-stack-list">
                            {techStacks.frontend.map((tech, index) => (
                                <li key={index} className="tech-item">
                                    <a
                                        href={tech.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="tech-link"
                                    >
                                        <SvgIcon svg={tech.iconSvg} />
                                        <span className="tech-name">{tech.name}</span>
                                        <span className="tech-arrow">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="skill-card">
                        <h3 className="skill-title">Backend</h3>
                        <ul className="tech-stack-list">
                            {techStacks.backend.map((tech, index) => (
                                <li key={index} className="tech-item">
                                    <a
                                        href={tech.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="tech-link"
                                    >
                                        <SvgIcon svg={tech.iconSvg} />
                                        <span className="tech-name">{tech.name}</span>
                                        <span className="tech-arrow">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools & Others */}
                    <div className="skill-card">
                        <h3 className="skill-title">Tools & Others</h3>
                        <ul className="tech-stack-list">
                            {techStacks.tools.map((tech, index) => (
                                <li key={index} className="tech-item">
                                    <a
                                        href={tech.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="tech-link"
                                    >
                                        <SvgIcon svg={tech.iconSvg} />
                                        <span className="tech-name">{tech.name}</span>
                                        <span className="tech-arrow">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
