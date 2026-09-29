import about from '../assets/images/project_person.png';
import cv from '../assets/CV_Duong_Phi_Hung.pdf';
import Icon from './Icon';
import Reveal from './Reveal';
export default function About() {
    return (
        <section id="about" className="section container about-section">
            <Reveal className="about-visual">
                <div className="about-image">
                    <img src={about} alt="A portrait of Phi Hung" loading="lazy" />
                    <span className="about-image-label">THE PERSON BEHIND THE PIXELS</span>
                </div>
                <div className="experience-stamp">
                    <strong>3+</strong>
                    <span>
                        YEARS OF
                        <br />
                        EXPERIENCE
                    </span>
                    <span className="stamp-star">✳</span>
                </div>
            </Reveal>
            <Reveal className="about-copy" delay={100}>
                <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
                <h2>
                    A developer.
                    <br />A collaborator.
                    <br />
                    <span className="serif-word">A problem solver.</span>
                </h2>
                <p>
                    I’m Phi Hung, a frontend developer based in Da Nang, Vietnam. For over 3 years, I’ve been turning
                    complex requirements into responsive, approachable web experiences.
                </p>
                <p>
                    My work goes beyond the interface. I meet directly with clients to understand their needs, clarify
                    requirements, and help bring projects from the first conversation through implementation and
                    delivery.
                </p>
                <p className="about-education">
                    A graduate of the Vietnam–Korea University of Information and Communication Technology, with a
                    curiosity for better ways to build.
                </p>
                <a className="text-link" href={cv} download="CV_Duong_Phi_Hung.pdf">
                    Download my CV <Icon name="download" size={18} />
                </a>
            </Reveal>
            <Reveal className="approach-row">
                <div>
                    <span>01</span>
                    <h3>Understand the problem</h3>
                    <p>Listen to clients, ask the right questions, and align on what matters.</p>
                </div>
                <div>
                    <span>02</span>
                    <h3>Build with intention</h3>
                    <p>Translate requirements into maintainable code and intuitive interfaces.</p>
                </div>
                <div>
                    <span>03</span>
                    <h3>Bring it to life</h3>
                    <p>Collaborate through feedback, refine the details, and support delivery.</p>
                </div>
            </Reveal>
        </section>
    );
}
