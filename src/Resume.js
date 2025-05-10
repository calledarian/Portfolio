import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import './Resume.css';

function Resume() {
    const handleDownload = () => {
        window.print();
    };

    const currentYear = new Date().getFullYear();
    const age = currentYear - 2008;

    return (
        <div className="resume-container">
            <div className="print-wrapper">
                <header className="resume-header">
                    <h1 tabIndex="0">Arian Khadem</h1>
                    <p className="title">Developer | Age: {age}</p>

                    <div className="contact-info">
                        <p>Email: <a href="mailto:ariankhadem4@gmail.com">ariankhadem4@gmail.com</a></p>
                        <p>Telegram: <a href="https://t.me/calledarian" target="_blank" rel="noopener noreferrer">t.me/calledarian</a></p>
                        <p>LinkedIn: <a href="https://linkedin.com/in/ariankhadem" target="_blank" rel="noopener noreferrer">linkedin.com/in/ariankhadem</a></p>
                    </div>
                </header>

                <div className="resume-main">
                    <section className="resume-section">
                        <h2>Experience</h2>

                        <div className="experience-item">
                            <div className="experience-header">
                                <h3>Freelance Developer</h3>
                                <span className="date">Dec 2024 – Present</span>
                            </div>
                            <ul>
                                <li>Developed full-stack websites for clients across various industries.</li>
                                <li>Built interactive web apps using React, NestJS, and PostgreSQL.</li>
                                <li>Implemented responsive designs and user-friendly interfaces.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <div className="experience-header">
                                <h3>Bible Education Centre & Christadelphian Sustainability Project</h3>
                                <span className="date">Sep 2024 – Present</span>
                            </div>
                            <ul>
                                <li>Maintained websites and created systems for BEC and CSP.</li>
                                <li>Supported farm tasks like date palm caretaking, gyprocking, and painting.</li>
                                <li>Assisted educational activities at the BEC Centre.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <div className="experience-header">
                                <h3>Real Estate Agent</h3>
                                <span className="date">Aug 2023 – Sep 2023</span>
                            </div>
                            <ul>
                                <li>Helped Persian real estate and vehicle owners in Türkiye to find Turkish customers.</li>
                                <li>Managed marketing process through Telegram channels.</li>
                                <li>Acted as an interpreter between parties.</li>
                            </ul>
                        </div>
                    </section>

                    <div className="columns-container">
                        <section className="resume-section">
                            <h2>Tech Stacks</h2>
                            <ul className="tech-list">
                                <li>JavaScript / TypeScript (React, NestJS)</li>
                                <li>HTML, CSS</li>
                                <li>MySQL, PostgreSQL</li>
                            </ul>
                        </section>

                        <section className="resume-section">
                            <h2>Languages</h2>
                            <ul className="language-list">
                                <li>English</li>
                                <li>Turkish</li>
                                <li>Persian</li>
                            </ul>
                        </section>
                    </div>
                </div>

                <footer className="resume-footer no-print">
                    <Link to="/" className="back-home">← Back to Home</Link>
                    <button
                        onClick={handleDownload}
                        className="download-button"
                        aria-label="Download resume as PDF"
                    >
                        <Download size={16} />
                        <span>Download PDF</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Resume;
