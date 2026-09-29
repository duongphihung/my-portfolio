import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
export default function Contact() {
    const [copyState, setCopyState] = useState('Copy email');
    async function copyEmail() {
        try {
            await navigator.clipboard.writeText('dphung1010@gmail.com');
            setCopyState('Email copied!');
        } catch {
            setCopyState('Please select and copy the email above.');
        }
    }
    return (
        <section id="contact" className="section container contact-section">
            <Reveal>
                <p className="eyebrow">04 / NEXT CHAPTER</p>
                <div className="contact-title">
                    <h2>
                        Have something
                        <br />
                        <span className="serif-word">in mind?</span>
                    </h2>
                    <a
                        className="contact-arrow"
                        href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=dphung1010%40gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email Phi Hung via Gmail"
                    >
                        <Icon size={64} />
                    </a>
                </div>
                <div className="contact-bottom">
                    <div>
                        <p>Let’s turn a good conversation into a great product.</p>
                        <a
                            className="email-link"
                            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=dphung1010%40gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            dphung1010@gmail.com
                        </a>
                        <button className="copy-email" onClick={copyEmail} aria-live="polite">
                            {copyState}
                        </button>
                    </div>
                    <div className="contact-details">
                        <span>BASED IN DA NANG, VIETNAM</span>
                        <a href="tel:+84948434867">
                            (+84) 948 434 867 <Icon size={16} />
                        </a>
                        <a href="https://www.linkedin.com/in/phi-hung-97/" target="_blank" rel="noreferrer">
                            Let’s connect on LinkedIn <Icon size={16} />
                        </a>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
