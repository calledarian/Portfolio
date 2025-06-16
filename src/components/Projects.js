import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

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
    const [modalState, setModalState] = useState({
        isOpen: false,
        projectImages: [],
        currentImageIndex: 0,
        projectTitle: ''
    });

    const openModal = (images, title, startIndex = 0) => {
        setModalState({
            isOpen: true,
            projectImages: images,
            currentImageIndex: startIndex,
            projectTitle: title
        });
    };

    const closeModal = () => {
        setModalState({
            isOpen: false,
            projectImages: [],
            currentImageIndex: 0,
            projectTitle: ''
        });
    };

    const goToNextImage = () => {
        setModalState(prev => ({
            ...prev,
            currentImageIndex: (prev.currentImageIndex + 1) % prev.projectImages.length
        }));
    };

    const goToPrevImage = () => {
        setModalState(prev => ({
            ...prev,
            currentImageIndex: prev.currentImageIndex === 0
                ? prev.projectImages.length - 1
                : prev.currentImageIndex - 1
        }));
    };

    const goToImage = (index) => {
        setModalState(prev => ({
            ...prev,
            currentImageIndex: index
        }));
    };

    return (
        <>
            <section id="projects" className="projects-section">
                <div className="section-container">
                    <h2 className="section-title">My Projects</h2>

                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            <div className="project-card" key={project.id}>
                                <div className="project-image">
                                    <img
                                        src={project.images[0]}
                                        alt={`${project.title} thumbnail`}
                                        onClick={() => openModal(project.images, project.title, 0)}
                                        style={{ cursor: 'pointer' }}
                                    />
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

                                        {project.codeLinkBackend && (
                                            <a
                                                href={project.codeLinkBackend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                Backend Code
                                            </a>
                                        )}

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
                                            <div className="project-link">Live</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {modalState.isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <X size={24} />
                        </button>

                        <div className="modal-content">
                            <div className="modal-image-container">
                                <img
                                    src={modalState.projectImages[modalState.currentImageIndex]}
                                    alt={`${modalState.projectTitle} - ${modalState.currentImageIndex + 1}`}
                                    className="modal-image"
                                />

                                {modalState.projectImages.length > 1 && (
                                    <>
                                        <button
                                            className="modal-nav modal-prev"
                                            onClick={goToPrevImage}
                                        >
                                            <ChevronLeft size={30} />
                                        </button>
                                        <button
                                            className="modal-nav modal-next"
                                            onClick={goToNextImage}
                                        >
                                            <ChevronRight size={30} />
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="modal-info">
                                <h3 className="modal-title">{modalState.projectTitle}</h3>
                                {modalState.projectImages.length > 1 && (
                                    <div className="modal-counter">
                                        {modalState.currentImageIndex + 1} of {modalState.projectImages.length}
                                    </div>
                                )}
                            </div>

                            {modalState.projectImages.length > 1 && (
                                <div className="modal-thumbnails">
                                    {modalState.projectImages.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className={`modal-thumbnail ${index === modalState.currentImageIndex ? 'active' : ''}`}
                                            onClick={() => goToImage(index)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                /* Modal Styles */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    padding: 20px;
                }

                .modal-container {
                    background: white;
                    border-radius: 12px;
                    max-width: 90vw;
                    max-height: 90vh;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }

                .modal-close {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: rgba(0, 0, 0, 0.7);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 1001;
                    transition: background 0.2s;
                }

                .modal-close:hover {
                    background: rgba(0, 0, 0, 0.9);
                }

                .modal-content {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .modal-image-container {
                    position: relative;
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f8f9fa;
                    min-height: 400px;
                }

                .modal-image {
                    max-width: 100%;
                    max-height: 70vh;
                    object-fit: contain;
                    border-radius: 8px;
                }

                .modal-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(0, 0, 0, 0.7);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .modal-nav:hover {
                    background: rgba(0, 0, 0, 0.9);
                }

                .modal-prev {
                    left: 20px;
                }

                .modal-next {
                    right: 20px;
                }

                .modal-info {
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid #e5e5e5;
                }

                .modal-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin: 0;
                    color: #333;
                }

                .modal-counter {
                    font-size: 0.9rem;
                    color: #666;
                    background: #f0f0f0;
                    padding: 5px 12px;
                    border-radius: 15px;
                }

                .modal-thumbnails {
                    display: flex;
                    gap: 10px;
                    padding: 15px 20px;
                    background: #f8f9fa;
                    overflow-x: auto;
                    border-top: 1px solid #e5e5e5;
                }

                .modal-thumbnail {
                    width: 60px;
                    height: 40px;
                    object-fit: cover;
                    border-radius: 4px;
                    cursor: pointer;
                    opacity: 0.6;
                    transition: opacity 0.2s;
                    flex-shrink: 0;
                }

                .modal-thumbnail:hover {
                    opacity: 0.8;
                }

                .modal-thumbnail.active {
                    opacity: 1;
                    border: 2px solid #007bff;
                }

                /* Image count badge */
                .image-count-badge {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: rgba(0, 0, 0, 0.7);
                    color: white;
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                .project-image {
                    position: relative;
                }

                .project-image img:hover {
                    opacity: 0.9;
                    transition: opacity 0.2s;
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .modal-container {
                        max-width: 95vw;
                        max-height: 95vh;
                    }
                    
                    .modal-image {
                        max-height: 60vh;
                    }
                    
                    .modal-nav {
                        width: 40px;
                        height: 40px;
                    }
                    
                    .modal-prev {
                        left: 10px;
                    }
                    
                    .modal-next {
                        right: 10px;
                    }
                    
                    .modal-info {
                        padding: 15px;
                        flex-direction: column;
                        gap: 10px;
                        align-items: flex-start;
                    }
                    
                    .modal-title {
                        font-size: 1.2rem;
                    }
                    
                    .modal-thumbnails {
                        padding: 10px 15px;
                    }
                }
            `}</style>
        </>
    );
}