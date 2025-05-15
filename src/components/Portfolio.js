import { Link } from 'react-router-dom';



export default function Portfolio() {
    return (
        <div id='portfolioo'>
            <header className="header">
                <div className="header-content">
                    <h1 className="logo">Developer</h1>
                    <p className="date-text">
                        {new Date().getFullYear()} / {new Date().getMonth() + 1} / {new Date().getDate()}
                    </p>
                </div>
            </header>

            <section className="hero-section">
                <div className="hero-content">
                    <div className="profile-image">
                        <img src="./MArian2.png" alt="Profile" />
                    </div>
                    <h1 className="hero-title">Arian Khadem</h1>
                    <p className="hero-subtitle">A developer who’s here to build friendly, reliable websites for real people.</p>
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
