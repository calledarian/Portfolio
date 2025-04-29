// Resume.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

function Resume() {
    return (
        <div className="resume-container">
            <header className="resume-header">
                <h1>Arian Khadem</h1>
                <p>Developer | Age: 17</p>
                <p>Gmail: <a href="mailto:ariankhadem4@gmail.com">ariankhadem4@gmail.com</a></p>
                <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                    <p>Telegram: <a href="https://t.me/calledarian" target="_blank" rel="noopener noreferrer">@calledarian</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/ariankhadem" target="_blank" rel="noopener noreferrer">@ariankhadem</a></p>
                </div>
            </header>

            <section className="resume-section">
                <h2>Experience</h2>
                <div className="experience">
                    <h3>Freelance Developer</h3>
                    <p><strong>Dec 2024 – Present</strong></p>
                    <ul>
                        <li>Developed full-stack websites for clients across various industries.</li>
                        <li>Built interactive web apps using React, NestJS, and PostgreSQL.</li>
                        <li>Implemented responsive designs and user-friendly interfaces.</li>
                    </ul>
                </div>
                <div className="experience">
                    <h3>Bible Education Centre & Christadelphian Sustainability Project</h3>
                    <p><strong>Sep 2024 – Present</strong></p>
                    <ul>
                        <li>Maintained websites and created systems for BEC and CSP.</li>
                        <li>Supported farm tasks like date palm caretaking, gyprocking, and painting.</li>
                        <li>Assisted educational activities at the BEC Centre.</li>
                    </ul>
                </div>
            </section>

            <section className="resume-section">
                <h2>TechStacks</h2>
                <ul>
                    <li>JavaScript / TypeScript (React, NestJS)</li>
                    <li>HTML, CSS</li>
                    <li>MySQL, PostgreSQL</li>
                    <li>Git / Version Control</li>
                </ul>
            </section>

            <section className="resume-section">
                <h2>Languages</h2>
                <ul>
                    <li>English</li>
                    <li>Turkish</li>
                    <li>Persian</li>
                </ul>
            </section>

            <footer className="resume-footer">
                <Link to="/" className="back-home">← Back to Home</Link>
                <button onClick={() => window.print()} className="download-button">Download PDF</button>
            </footer>
        </div>
    );
}

export default Resume;
