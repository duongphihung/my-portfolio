import { useRef } from 'react';
import hero from '../assets/images/hero.png';
import Icon from './Icon';
export default function Hero() {
    const portrait = useRef(null);
    const move = (event) => {
        if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const box = event.currentTarget.getBoundingClientRect();
        portrait.current.style.setProperty('--tilt-x', `${(event.clientY - box.top - box.height / 2) / -55}deg`);
        portrait.current.style.setProperty('--tilt-y', `${(event.clientX - box.left - box.width / 2) / 55}deg`);
    };
    const reset = () => {
        portrait.current.style.setProperty('--tilt-x', '0deg');
        portrait.current.style.setProperty('--tilt-y', '0deg');
    };
    return (
        <section id="home" className="hero container">
            <div className="hero-topline">
                <span>
                    <i className="status-dot" /> Frontend developer · Vietnam
                </span>
                <span className="hero-edition">PERSONAL PORTFOLIO / 01</span>
            </div>
            <div className="hero-grid">
                <div className="hero-copy">
                    <p className="eyebrow">HELLO, I’M PHI HUNG</p>
                    <h1>
                        Thoughtful code.
                        <br />
                        Meaningful
                        <br />
                        <span className="accent handwritten-line">experiences.</span>
                    </h1>
                    <p className="hero-description">
                        I turn ideas into intuitive digital products. With <strong>3+ years of experience</strong>, I
                        connect client needs with carefully crafted frontend experiences.
                    </p>
                    <div className="hero-actions">
                        <a className="button button-primary" href="#projects">
                            Explore my work <Icon name="arrow-down" size={18} />
                        </a>
                        <a className="text-link" href="#contact">
                            Let’s connect <Icon size={18} />
                        </a>
                    </div>
                    <div className="hero-proof">
                        <span className="proof-number">
                            3<span>+</span>
                        </span>
                        <span>
                            Years of building
                            <br />
                            <strong>with purpose.</strong>
                        </span>
                        <span className="proof-divider" />
                        <Icon name="people" size={28} />
                        <span>
                            From client conversations
                            <br />
                            <strong>to product delivery.</strong>
                        </span>
                    </div>
                </div>
                <div className="portrait-scene" onPointerMove={move} onPointerLeave={reset}>
                    <div className="portrait-frame" ref={portrait}>
                        <div className="portrait-grid" />
                        <span className="portrait-cross cross-one">+</span>
                        <span className="portrait-cross cross-two">+</span>
                        <div className="portrait-halo" />
                        <span className="portrait-type" aria-hidden="true">
                            PH.
                        </span>
                        <img
                            className="hero-portrait"
                            src={hero}
                            alt="Phi Hung, frontend developer"
                            loading="eager"
                        />
                        <div className="portrait-caption">
                            <span>DUONG PHI HUNG</span>
                            <span>DEVELOPER & COLLABORATOR</span>
                        </div>
                    </div>
                    <div className="floating-note code-note">
                        <span className="note-icon">
                            <Icon name="code" />
                        </span>
                        <span>
                            Built with care.<small>React · TypeScript · UI</small>
                        </span>
                    </div>
                    <div className="floating-note delivery-note">
                        <span className="note-icon">
                            <Icon name="check" />
                        </span>
                        <span>
                            Ideas → interfaces<small>Every detail matters.</small>
                        </span>
                    </div>
                    <span className="portrait-side-label">A LITTLE CURIOSITY. A LOT OF CRAFT.</span>
                </div>
            </div>
            <div className="hero-bottom">
                <span>GOOD PRODUCTS START WITH GOOD CONVERSATIONS.</span>
                <a href="#projects">
                    Scroll to explore <Icon name="arrow-down" size={15} />
                </a>
            </div>
        </section>
    );
}
