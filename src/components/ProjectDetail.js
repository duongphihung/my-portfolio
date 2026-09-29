import { projects } from '../data/projects';
import Icon from './Icon';
import Reveal from './Reveal';
export default function ProjectDetail({ project }) {
    if (!project)
        return (
            <section className="container not-found">
                <p className="eyebrow">404 / PROJECT NOT FOUND</p>
                <h1>
                    This page took
                    <br />a different path.
                </h1>
                <a href="#projects" className="button button-primary">
                    <Icon name="arrow-left" /> Back to projects
                </a>
            </section>
        );
    const next = projects[(projects.indexOf(project) + 1) % projects.length];
    return (
        <article className="project-detail container">
            <a href="#projects" className="text-link back-link">
                <Icon name="arrow-left" size={17} /> All projects
            </a>
            <div className="detail-heading">
                <p className="eyebrow">CASE STUDY / {project.category.toUpperCase()}</p>
                <h1>
                    {project.name}
                    <span className="accent">.</span>
                </h1>
                <p>{project.tagline}</p>
                <span className="sample-label">Illustrative case study · Sample content</span>
            </div>
            <div className="detail-facts">
                <div>
                    <span>MY ROLE</span>
                    <p>{project.role}</p>
                </div>
                <div>
                    <span>PROJECT TYPE</span>
                    <p>{project.type}</p>
                </div>
                <div>
                    <span>TECHNOLOGIES</span>
                    <p>{project.stack.join(' / ')}</p>
                </div>
            </div>
            <div className={`detail-cover tone-${project.tone}`}>
                <div className="project-browser">
                    <div className="browser-bar">
                        <i />
                        <i />
                        <i />
                        <span>{project.name}</span>
                    </div>
                    <img src={project.image} alt={`${project.name} project interface`} />
                </div>
            </div>
            <Reveal className="case-row">
                <div>
                    <p className="eyebrow">01 / THE OVERVIEW</p>
                    <h2>
                        Behind the
                        <br />
                        <span className="serif-word">interface.</span>
                    </h2>
                </div>
                <div>
                    <p className="case-lead">{project.description}</p>
                    {(project.liveUrl || project.githubUrl) && (
                        <div className="hero-actions">
                            {project.liveUrl && (
                                <a
                                    className="button button-primary"
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live project <Icon />
                                </a>
                            )}
                            {project.githubUrl && (
                                <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                                    Source code <Icon />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </Reveal>
            <Reveal className="case-split">
                <div>
                    <span className="eyebrow">THE CHALLENGE</span>
                    <h3>Start with the problem.</h3>
                    <p>{project.challenge}</p>
                </div>
                <div>
                    <span className="eyebrow">THE APPROACH</span>
                    <h3>Build a thoughtful solution.</h3>
                    <p>{project.solution}</p>
                </div>
            </Reveal>
            <Reveal className="case-row">
                <div>
                    <p className="eyebrow">02 / THE EXPERIENCE</p>
                    <h2>
                        Details that
                        <br />
                        <span className="serif-word">make it work.</span>
                    </h2>
                </div>
                <ul className="feature-list">
                    {project.features.map((feature) => (
                        <li key={feature}>
                            <Icon name="check" size={19} />
                            {feature}
                        </li>
                    ))}
                </ul>
            </Reveal>
            <Reveal className="case-process">
                <p className="eyebrow">03 / FROM IDEA TO IMPLEMENTATION</p>
                <div className="process-grid">
                    {project.process.map((step, index) => (
                        <div key={step}>
                            <span>0{index + 1}</span>
                            <p>{step}</p>
                        </div>
                    ))}
                </div>
            </Reveal>
            <Reveal className="case-row outcome-row">
                <div>
                    <p className="eyebrow">04 / THE TAKEAWAY</p>
                    <h2>
                        Built to
                        <br />
                        <span className="serif-word">learn from.</span>
                    </h2>
                </div>
                <p className="case-lead">{project.outcome}</p>
            </Reveal>
            <a className="next-project" href={`#/projects/${next.slug}`}>
                <div>
                    <span className="eyebrow">EXPLORE THE NEXT PROJECT</span>
                    <h2>{next.name}</h2>
                </div>
                <Icon size={48} />
            </a>
        </article>
    );
}
