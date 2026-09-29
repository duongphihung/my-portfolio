import { useState } from 'react';
import { projects } from '../data/projects';
import Icon from './Icon';
import Reveal from './Reveal';
export default function Project() {
    const [showAll, setShowAll] = useState(false);
    return (
        <section id="projects" className="section work-section">
            <div className="container">
                <Reveal className="section-heading">
                    <div>
                        <p className="eyebrow">01 / SELECTED WORK</p>
                        <h2>
                            A few things
                            <br />
                            I’ve <span className="serif-word">built.</span>
                        </h2>
                    </div>
                    <p>
                        A mix of ideas, interfaces, and thoughtful details.
                        <br />
                        Take a closer look at the work behind the screen.
                    </p>
                </Reveal>
                <div className="project-grid">
                    {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
                        <Reveal
                            key={project.slug}
                            className={index === 0 ? 'project-featured' : ''}
                            delay={(index % 2) * 80}
                        >
                            <a
                                className={`project-card tone-${project.tone}`}
                                href={`#/projects/${project.slug}`}
                                aria-label={`View ${project.name} case study`}
                            >
                                <div className="project-visual">
                                    <div className="project-visual-top">
                                        <span>
                                            {String(index + 1).padStart(2, '0')} / {project.category}
                                        </span>
                                        <span className="project-open">
                                            <Icon />
                                        </span>
                                    </div>
                                    <div className="project-browser">
                                        <div className="browser-bar">
                                            <i />
                                            <i />
                                            <i />
                                            <span>{project.name.toLowerCase().replaceAll(' ', '')}.design</span>
                                        </div>
                                        <img
                                            src={project.image}
                                            alt={`${project.name} interface preview`}
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="view-case">
                                        View case study <Icon size={17} />
                                    </span>
                                </div>
                                <div className="project-meta">
                                    <div>
                                        <h3>{project.name}</h3>
                                        <p>{project.tagline}</p>
                                    </div>
                                    <span className="project-tech">
                                        {project.stack[0]} <span>↗</span>
                                    </span>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>
                <Reveal className="work-bottom">
                    <span>ALWAYS EXPLORING. ALWAYS BUILDING.</span>
                    <button
                        className="button button-outline"
                        onClick={() => setShowAll(!showAll)}
                        aria-expanded={showAll}
                    >
                        {showAll ? 'Show selected work' : `More projects (${projects.length - 3})`}
                        <Icon name={showAll ? 'arrow-up-right' : 'arrow-down'} size={17} />
                    </button>
                </Reveal>
            </div>
        </section>
    );
}
