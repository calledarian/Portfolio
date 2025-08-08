import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const projectsData = [
    {
        id: 1,
        title: "Tour Booking Webapp",
        description:
            "Automated the client booking process for a local tour guide by building a secure, full-stack platform. It features robust admin controls for managing tour packages, booking confirmations, and user requests, while incorporating spam protection and secure authentication to ensure data integrity.",
        tags: ["React", "NestJS", "Cloudinary", "PostgreSQL", "JavaScript/TypeScript"],
        images: ["./ramboda31.png", "./ramboda30.png", "./ramboda29.png", "./Ramboda28.png", "RAMBODA27.png"],
        codeLink: "https://github.com/calledarian/tour-frontend",
        liveDemo: "https://rambodatour.vercel.app/",
    },
    {
        id: 2,
        title: "Christadelphian Sustainability Farm",
        description:
            "Crafted a clean, responsive website to establish the farm's online presence in Cambodia. The user-friendly layout effectively communicates their mission and showcases local products, helping to attract community interest and support for their sustainability initiatives.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        images: ["./farm.png", "./farm28.png", "./farm29.png", "./farm30.png"],
        codeLink: "https://github.com/calledarian/farm",
        liveDemo: "https://christadelphiancambodia.netlify.app/",
    },
    {
        id: 3,
        title: "Library Book Management",
        description:
            "Streamlined personal book cataloging with a full-stack CRUD application. This tool enables users to effortlessly add, track, update, and manage titles in their collection, featuring a clean and intuitive UI designed for efficient organization and quick access.",
        tags: ["NestJS", "React", "PostgreSQL", "JavaScript/TypeScript"],
        images: ["./bookshell2.png", "./bookshell3.png"],
        codeLink: "https://github.com/calledarian/library",
        liveDemo: "https://bibleec-library.vercel.app/",
    },
    {
        id: 4,
        title: "Norphealey Cafe Shop",
        description:
            "Designed a visually compelling static website to capture the unique brand identity of a Phnom Penh café. The site serves as an attractive digital storefront, showcasing the menu, ambiance, and location to draw in new customers and enhance the café's local profile.",
        tags: ["React", "JavaScript"],
        images: ["./norph.png", "./norph28.png", "./norph29.png"],
        codeLink: "https://github.com/calledarian/norph",
        liveDemo: "https://norphealey.vercel.app/",
    },
    {
        id: 5,
        title: "Bible Education Center",
        description:
            "Developed a full-stack educational platform to serve as a high-performance, centralized hub for BEC's activities. The application empowers administrators to seamlessly manage events and content through a secure dashboard, enhancing the organization's outreach and user engagement.",
        tags: ["React", "NestJS", "PostgreSQL", "Cloudinary", "JavaScript/TypeScript"],
        images: ["./bec.png", "./bec28.png"],
        codeLink: "https://github.com/calledarian/my-ecclesia-website",
        liveDemo: "https://bibleec.vercel.app/",
    },
];


export default function Projects() {
    useEffect(() => {
        GLightbox({
            selector: ".glightbox",
            loop: true,
            touchNavigation: true,
        });
    }, []);

    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <h2 className="section-title">My Projects</h2>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                {/* First image is main thumbnail */}
                                <a
                                    href={project.images[0]}
                                    className="glightbox"
                                    data-gallery={`gallery-${project.id}`}
                                    data-title={project.title}
                                >
                                    <img
                                        src={project.images[0]}
                                        alt={`${project.title} thumbnail`}
                                        style={{ cursor: "pointer" }}
                                    />
                                </a>

                                {/* Hidden extra images for gallery */}
                                {project.images.slice(1).map((img, i) => (
                                    <a
                                        href={img}
                                        className="glightbox"
                                        data-gallery={`gallery-${project.id}`}
                                        data-title={project.title}
                                        key={i}
                                        style={{ display: "none" }}
                                    >
                                        Hidden
                                    </a>
                                ))}

                                {project.images.length > 1 && (
                                    <div className="image-count-badge">
                                        +{project.images.length - 1} more
                                    </div>
                                )}
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
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            Live Demo
                                        </a>
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
