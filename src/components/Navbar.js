import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
const links = [
    ['Work', 'projects'],
    ['About', 'about'],
    ['Expertise', 'skills'],
    ['Contact', 'contact'],
];
export default function Navbar({ isHome, route }) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');
    const toggle = useRef(null);
    useEffect(() => {
        const close = (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
                toggle.current?.focus();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, []);
    useEffect(() => {
        if (!isHome || !('IntersectionObserver' in window)) {
            setActive('');
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-15% 0px -55% 0px' },
        );
        ['home', ...links.map(([, id]) => id)].forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, [isHome, route]);
    return (
        <header className="site-header">
            <nav className="container nav" aria-label="Main navigation">
                <a className="wordmark" href="#home" onClick={() => setOpen(false)} aria-label="Phi Hung home">
                    phihung<span>®</span>
                </a>
                <button
                    className="menu-toggle"
                    ref={toggle}
                    aria-expanded={open}
                    aria-controls="navigation-links"
                    aria-label={open ? 'Close navigation' : 'Open navigation'}
                    onClick={() => setOpen(!open)}
                >
                    <Icon name={open ? 'close' : 'menu'} />
                </button>
                <div id="navigation-links" className={`nav-links ${open ? 'is-open' : ''}`}>
                    {links.map(([label, id]) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={active === id ? 'active' : ''}
                            aria-current={active === id ? 'location' : undefined}
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        className="nav-contact"
                        href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=dphung1010%40gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Let’s talk <Icon size={16} />
                    </a>
                </div>
            </nav>
        </header>
    );
}
