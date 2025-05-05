export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <h2 className="section-title">My Projects</h2>

                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-image">
                            <img src="./bec.png" alt="Project thumbnail" />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">Bible Education Center</h3>
                            <p className="project-description">
                                A fullstack website for Cambodia Bible Education Center with secure admin panel and dashboard to controller posts on the page.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">React</span>
                                <span className="project-tag">NestJS</span>
                                <span className="project-tag">PostgreSQL</span>
                                <span className="project-tag">TypeScript/JavaScript</span>

                            </div>
                            <div className="project-links">
                                <a href="https://github.com/calledarian/my-ecclesia-website" target="blank" className="project-link">Code</a>
                                <a href="https://bibleec.vercel.app/" target="blank" className="project-link">Live Demo</a>
                            </div>
                        </div>

                    </div>

                    {/* Project 2 */}
                    <div className="project-card">
                        <div className="project-image">
                            <img src="./farm.png" alt="Sustainability Farm Project thumbnail" />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">Christadelphian Sustainability Farm</h3>
                            <p className="project-description">
                                A website for a sustainability farm project that supports ecclesias in Cambodia with self-sufficiency through donations, resources, and community initiatives.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">HTML5</span>
                                <span className="project-tag">CSS3</span>
                                <span className="project-tag">JavaScript</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/calledarian/farm" target="blank" className="project-link">Code</a>
                                <a href="https://christadelphiancambodia.netlify.app/" target="blank" className="project-link">Live Demo</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image">
                            <img src="./bookshell.png" alt="Library Project" />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">Library Book Management</h3>
                            <p className="project-description">
                                A small library website that you can Creat, Read, Update, Delete books from it.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">NestJS</span>
                                <span className="project-tag">Reactjs</span>
                                <span className="project-tag">PostgreSQL</span>
                                <span className="project-tag">JavaScript/TypeScript</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/calledarian/library" target="blank" className="project-link">Code</a>
                                <div className="project-link">Not Live</div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image">
                            <img src="./norph.png" alt="Project thumbnail" />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">Norphealey Cafe Shop</h3>
                            <p className="project-description">
                                A dynamic react created website for a local cafe shop in phenom penh.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">React</span>
                                <span className="project-tag">JavaScript</span>

                            </div>
                            <div className="project-links">
                                <a href="https://github.com/calledarian/norph" target="blank" className="project-link">Code</a>
                                <a href="https://norphealey.vercel.app/" target="blank" className="project-link">Live Demo</a>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section >
    )
}
