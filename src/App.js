import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';

function getRoute() {
    return window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : '/';
}
export default function App() {
    const [route, setRoute] = useState(getRoute);
    useEffect(() => {
        const navigate = () => setRoute(getRoute());
        window.addEventListener('hashchange', navigate);
        return () => window.removeEventListener('hashchange', navigate);
    }, []);
    const isHome = route === '/';
    const project = projects.find((item) => route === `/projects/${item.slug}`);
    useEffect(() => {
        document.title = project ? `${project.name} — Phi Hung` : 'Phi Hung — Frontend Developer';
        const frame = requestAnimationFrame(() => {
            const target = isHome && document.getElementById(window.location.hash.slice(1));
            if (target) target.scrollIntoView({ behavior: 'instant' });
            else window.scrollTo({ top: 0, behavior: 'instant' });
            if (!isHome) document.getElementById('main-content')?.focus({ preventScroll: true });
        });
        return () => cancelAnimationFrame(frame);
    }, [route, isHome, project]);
    return (
        <>
            <a className="skip-link" href="#main-content">
                Skip to content
            </a>
            <Navbar isHome={isHome} route={route} />
            <main id="main-content" tabIndex={-1} key={route} className="page-enter">
                {isHome ? (
                    <>
                        <Hero />
                        <Project />
                        <About />
                        <Skills />
                        <Contact />
                    </>
                ) : (
                    <ProjectDetail project={project} />
                )}
            </main>
            <Footer />
        </>
    );
}
