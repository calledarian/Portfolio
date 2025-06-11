// Resume.jsx
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import '../Resume.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Resume() {
    const handleDownload = async () => {
        const element = document.querySelector('.print-wrapper');

        if (!element) return;

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
        });

        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Arian_Khadem_Resume.pdf');
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
                        <p>Website: <a href='https://ariankhadem.vercel.app/' target='_blank' rel='noopener noreferrer'>ariankhade.vercel.app</a></p>
                    </div>
                </header>

                {/* Summary */}
                <section className="resume-section">
                    <h2>Summary</h2>
                    <p>
                        Self-taught full-stack developer with a focus on scalable backend logic, intuitive UI design, and strong database architecture. Delivered 5+ full CRUD applications, improving client workflows, user engagement, and system reliability.

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
                            <li> Designed for a Southeast Asia-based local guide and deployed to production.</li>
                        </ul>
                    </div>

                    <div className="project-item">
                        <h3>Personal Library Manager</h3>
                        <p><strong>Tech:</strong> React, NestJS, PostgreSQL</p>
                        <ul>
                            <li>Streamlined personal book management, improving organization and accessibility for 100+ titles.</li>
                        </ul>
                    </div>

                    <div className="project-item">
                        <h3>Bible Storytelling Platform</h3>
                        <p><strong>Tech:</strong> React, NestJS, PostgreSQL, Cloudinary</p>
                        <ul>
                            <li>Built a storytelling site for youth using React and NestJS. </li>
                            <li>Added user comment and Q&A features to boost engagement. </li>
                            <li>Designed for ease of use by teens learning Bible stories online and used in Sunday school classes.</li>
                        </ul>
                    </div>
                </section>

                {/* Experience */}
                <section className="resume-section">
                    <h2>Experience</h2>

                    <div className="experience-item">
                        <div className="experience-header">
                            <h3>Freelance Developer</h3>
                            <span className="date">Dec 2024 – Present</span>
                        </div>
                        <ul>
                            <li>Successfully developed and delivered over 5 production-ready web applications to diverse clients, implementing custom features that resolved specific business challenges and improved operational workflows.</li>
                            <li>Managed the complete software development lifecycle, including designing frontend and backend architectures, coding, deploying to production environments, and providing ongoing maintenance and support.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="experience-header">
                            <h3>Bible Education Centre & CSP Cambodia</h3>
                            <span className="date">Sep 2024 – Present</span>
                        </div>
                        <ul>
                            <li>Maintained internal tools and websites for BEC & Sustainability Project.</li>
                            <li>Developed a basic cattle tracking system for the farm, improving data organization and facilitating easy management of cattle records.</li>
                            <li>Supported farm tasks and educational activities such as teaching English through Bible in Phnom Penh.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="experience-header">
                            <h3>Real Estate Agent</h3>
                            <span className="date">Aug 2023 – Sep 2023</span>
                        </div>
                        <ul>
                            <li>Leveraged multilingual skills to act as an interpreter and agent for Persian property owners in Türkiye.</li>
                            <li>Successfully closed 3 deals and managed property listings on Telegram, facilitating transactions with local buyers.</li>
                        </ul>
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

