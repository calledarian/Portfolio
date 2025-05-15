import React from 'react';

// Put your projects info in this array
const projectsData = [
    {
        id: 1,
        title: "Bible Education Center",
        description:
            "A full-stack Bible education platform with a secure admin dashboard for managing articles and lessons. Built for churches and youth groups.",
        tags: ["React", "NestJS", "PostgreSQL", "TypeScript/JavaScript"],
        image: "./bec.png",
        codeLink: "https://github.com/calledarian/my-ecclesia-website",
        liveDemo: "https://bibleec.vercel.app/",
    },
    {
        id: 2,
        title: "Christadelphian Sustainability Farm",
        description:
            "A simple responsive website for a local farm in Cambodia, showcasing their mission, products, and location.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        image: "./farm.png",
        codeLink: "https://github.com/calledarian/farm",
        liveDemo: "https://christadelphiancambodia.netlify.app/",
    },
    {
        id: 3,
        title: "Library Book Management",
        description:
            "A CRUD-based library management system to organize and track books with clean admin features.",
        tags: ["NestJS", "React", "PostgreSQL", "JavaScript/TypeScript"],
        image: "./bookshell.png",
        codeLink: "https://github.com/calledarian/library",
        liveDemo: null,
    },
    {
        id: 4,
        title: "Norphealey Cafe Shop",
        description:
            "A clean and stylish static site for a Phnom Penh café, designed to showcase the brand and menu offerings.",
        tags: ["React", "JavaScript"],
        image: "./norph.png",
        codeLink: "https://github.com/calledarian/norph",
        liveDemo: "https://norphealey.vercel.app/",
    },
    {
        id: 5,
        title: "Gospel For Youths",
        description:
            "A full-stack youth-focused gospel website with a content management system, video embeds, and blog features.",
        tags: ["React", "TypeScript", "NestJS", "Docker"],
        image: "./gospelfy.png",
        codeLink: "https://github.com/calledarian/GospelForYouths-backend",
        liveDemo: "https://gospelforyouths.vercel.app/",
    },
];



export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <h2 className="section-title">My Projects</h2>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div className="project-card" key={project.id}>

                            <div className="project-image">
                                <img src={project.image} alt={`${project.title} thumbnail`} />
                            </div>

                            <div className="project-details">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span className="project-tag" key={i}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        Code
                                    </a>
                                    {project.liveDemo ? (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            Live Demo
                                        </a>
                                    ) : (
                                        <div className="project-link">Not Live</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
