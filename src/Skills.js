export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <h2 className="section-title">Tech Stack</h2>

                <div className="skills-grid">
                    {/* Frontend */}
                    <div className="skill-card">
                        <h3 className="skill-title">Frontend</h3>
                        <ul className="skill-list">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>HTML5 / CSS3</li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="skill-card">
                        <h3 className="skill-title">Backend</h3>
                        <ul className="skill-list">
                            <li>Node.js</li>
                            <li>NestJS</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>

                    {/* Tools & Others */}
                    <div className="skill-card">
                        <h3 className="skill-title">Tools & Others</h3>
                        <ul className="skill-list">
                            <li>Git / GitHub</li>
                            <li>MySQL / PostgreSQL</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}