// Resume.jsx
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import '../Resume.css';


function Resume() {
    const handleDownload = () => {
        window.print();
    };
    const currentYear = new Date().getFullYear();
    const age = currentYear - 2008;

    return (
        <div className="resume-container">
            <div className="print-wrapper">
                {/* Header */}
                <header className="resume-header">
                    <h1 tabIndex="0">Arian Khadem</h1>
                    <p className="title">Full-Stack Developer | Age: {age}</p>
                    <div className="contact-info">
                        <p>Email: <a href="mailto:ariankhadem4@gmail.com">ariankhadem4@gmail.com</a></p>
                        <p>Telegram: <a href="https://t.me/calledarian" target="_blank" rel="noopener noreferrer">t.me/calledarian</a></p>
                        <p>LinkedIn: <a href="https://linkedin.com/in/ariankhadem" target="_blank" rel="noopener noreferrer">linkedin.com/in/ariankhadem</a></p>
                        <p>Website: <a href='https://ariankhadem.vercel.app/' target='_blank' rel='noopener noreferrer'>https://ariankhadem.vercel.app</a></p>
                    </div>
                </header>

                {/* Summary */}
                <section className="resume-section">
                    <h2>Summary</h2>
                    <p>
                        Self-taught full-stack developer currently interning in a real-world team. Focused on backend logic, clean UIs, and solid database design.
                    </p>
                </section>

                <div className="columns-container">
                    {/* Tech Stack */}
                    <section className="resume-section">
                        <h2>Tech Stack</h2>
                        <ul className="tech-list">
                            <li><strong>Frontend:</strong> React, Vite, HTML, CSS</li>
                            <li><strong>Backend:</strong> NestJS, Node.js</li>
                            <li><strong>Languages:</strong> JavaScript, TypeScript, Python</li>
                            <li><strong>Database:</strong> PostgreSQL, MongoDB (via Mongoose), MySQL</li>
                            <li><strong>DevOps/Tools:</strong> Docker, Git, Cloudinary</li>
                            <li><strong>Security:</strong> JWT, Helmet, bcrypt, reCAPTCHA</li>
                        </ul>
                    </section>

                    {/* Languages */}
                    <section className="resume-section">
                        <h2>Languages</h2>
                        <ul className="language-list">
                            <li>English (Fluent)</li>
                            <li>Turkish (Native)</li>
                            <li>Persian (Native)</li>
                            <li>Khmer (Basic)</li>
                        </ul>
                    </section>
                </div>

                {/* Projects */}
                <section className="resume-section">
                    <h2>Projects</h2>

                    <div className="project-item">
                        <h3>Tour Booking Platform</h3>
                        <p><strong>Tech:</strong> React, NestJS, PostgreSQL, Cloudinary</p>
                        <ul>
                            <li>Developed a tour booking app using React, NestJS, and PostgreSQL.</li>
                            <li>Enabled public tour reservations and admin confirmations through a secure dashboard.</li>
                            <li>Implemented robust security measures (rate limiting, session-based JWT auth, honeypots, reCAPTCHA, bcrypt, Helmet) to protect against common web vulnerabilities and ensure secure user interactions.</li>
                            <li>Designed for a Southeast Asia-based local guide and deployed to production.</li>
                        </ul>
                    </div>
                </section>

                {/* Experience */}

                <section className="resume-section">
                    <h2>Experience</h2>

                    <div className="experience-item">
                        <div className="experience-header">
                            <h3>Software Developer Intern</h3>
                            <span className="date">(Web Essentials Co., Ltd.) July 2025 – Current</span>
                        </div>
                        <ul>
                            <li>Contributing to real client projects by developing features and fixing bugs as needed.</li>
                            <li>Improving problem-solving skills by working through real-world technical challenges.</li>
                            <li>Collaborating with team members and participating in meetings to strengthen communication skills.</li>
                            <li>Actively learning and adapting to new tools, workflows, and project requirements.</li>
                        </ul>
                    </div>


                    <div className="experience-item">
                        <div className="experience-header">
                            <h3>Freelance Developer</h3>
                            <span className="date">Dec 2024 – July 2025</span>
                        </div>
                        <ul>
                            <li>Successfully developed and delivered over 5 production-ready web applications to diverse clients, implementing custom features that resolved specific business challenges and improved operational workflows.</li>
                            <li>Managed the complete software development lifecycle, including designing frontend and backend architectures, coding, deploying to production environments, and providing ongoing maintenance and support.</li>
                        </ul>
                    </div>
                </section>

                {/* Education */}
                <section className="resume-section">
                    <h2>Education</h2>

                    <div className="experience-item">
                        <h3>CS50x – Harvard University</h3>
                        <p><strong>Type:</strong> Online Course, Computer Science</p>
                        <span className="date">Jun 2025 – Aug 2025</span>
                    </div>

                    <div className="experience-item">
                        <h3>Khan Academy – Web Programming</h3>
                        <p><strong>Type:</strong> Online Course, Computer Programming & Web Development</p>
                        <span className="date">Dec 2024 – Feb 2025</span>
                    </div>

                    <div className="experience-item">
                        <h3>Postman - API Fundamentals Student Expert certification</h3>
                        <p><strong>Type:</strong> Online Course, API Fundamentals </p>
                        <span className="date">Jun 2025</span>
                    </div>
                </section>


                {/* Footer */}
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

