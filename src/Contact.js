import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="section-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-other">
                    <div className="contact-links">
                        <a href="mailto:ariankhadem4@gmail.com" className="contact-link">
                            <FaEnvelope className="icon" />
                        </a>
                        <a href="https://github.com/calledarian" className="contact-link" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/ariankhadem" className="contact-link" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
