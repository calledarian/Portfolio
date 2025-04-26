import { Link } from 'react-router-dom';



export default function Portfolio() {
    return (
        <div>
            <header className="header">
                <div className="header-content">
                    <h1 className="logo">Sowtware Developer</h1>
                    <p className="date-text">
                        {new Date().getFullYear()} / {new Date().getMonth() + 1} / {new Date().getDate()}
                    </p>
                </div>
            </header>

            <section className="hero-section">
                <div className="hero-content">
                    <div className="profile-image">
                        <img src="./arianInSuit.jpg" alt="Profile" />
                    </div>
                    <h1 className="hero-title">Arian Khadem</h1>
                    <p className="hero-subtitle">Full-Stack Developer passionate about creating innovative solutions with modern technologies.</p>
                    <div className="hero-buttons">
                        <Link to="/resume" className="button primary-button">
                            My Resume
                        </Link>

                        <a href="#projects" className="button secondary-button">View Projects</a>
                    </div>
                </div>
            </section>
        </div>
    )
}