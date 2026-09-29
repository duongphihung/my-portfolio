import Reveal from './Reveal';
import Icon from './Icon';
const groups = [
    {
        number: '01',
        icon: 'code',
        title: 'Frontend engineering',
        text: 'Responsive, component-driven interfaces built for real people.',
        skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
        number: '02',
        icon: 'globe',
        title: 'Interface & experience',
        text: 'The details that make a product feel cohesive and easy to use.',
        skills: ['Responsive design', 'UI implementation', 'Performance', 'REST APIs'],
    },
    {
        number: '03',
        icon: 'people',
        title: 'Client collaboration',
        text: 'A shared understanding, from the first meeting to the final handoff.',
        skills: ['Client meetings', 'Requirements', 'Implementation', 'Delivery'],
    },
];
export default function Skills() {
    return (
        <section id="skills" className="section expertise-section">
            <div className="container">
                <Reveal className="section-heading">
                    <div>
                        <p className="eyebrow">03 / WHAT I BRING</p>
                        <h2>
                            The tools. The craft.
                            <br />
                            <span className="serif-word">The human side.</span>
                        </h2>
                    </div>
                    <p>
                        Good software takes more than code.
                        <br />
                        Here’s how I contribute to the whole picture.
                    </p>
                </Reveal>
                <div className="expertise-grid">
                    {groups.map((group, index) => (
                        <Reveal key={group.title} delay={index * 80} className="expertise-card">
                            <div className="expertise-top">
                                <Icon name={group.icon} size={29} />
                                <span>{group.number}</span>
                            </div>
                            <h3>{group.title}</h3>
                            <p>{group.text}</p>
                            <div className="tags">
                                {group.skills.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
