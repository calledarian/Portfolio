// Resume.js
import React from 'react';
import './Resume.css'; // Make sure to link the CSS file
import { Link } from 'react-router-dom';

function Resume() {
    return (
        <div className="resume-container">
            <header className="resume-header">
                <h1>Arian Khadem</h1>
                <p>Developer | Age: 17</p>
                <p>Contact: ariankhadem4@gmail.com</p>
            </header>

            <section className="resume-section">
                <h2>Experience</h2>
                <div className="experience">
                    <h3>Freelance Developer</h3>
                    <p>Dec 2024 - Present</p>
                    <ul>
                        <li>Developed full-stack websites for clients in various industries.</li>
                        <li>Built interactive web applications with React, NestJS, and PostgreSQL.</li>
                        <li>Ensured responsive design and user-friendly interfaces.</li>
                    </ul>
                </div>
            </section>

            <section className="resume-section">
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript/TypeScript (React, Node.js, NestJS)</li>
                    <li>HTML, CSS</li>
                    <li>MySQL, PostgreSQL</li>
                    <li>Version Control (Git)</li>
                </ul>
                <h2>Languages</h2>
                <ul>
                    <li>
                        English
                    </li>
                    <li>
                        Turkish
                    </li>
                    <li>
                        Persian
                    </li>
                </ul>
            </section>
            <footer className="resume-footer">
                <Link to="/">Back to Home</Link>

                <button onClick={() => window.print()} className="download-button">
                    Download PDF
                </button>
            </footer>
        </div >
    );
}

export default Resume;
