export default function Footer() {
    return (
        <footer className="container footer">
            <a className="wordmark" href="#home">
                phihung<span>®</span>
            </a>
            <p>© {new Date().getFullYear()} Phi Hung. Crafted with intention.</p>
            <a className="footer-top" href="#home">
                Back to home ↑
            </a>
        </footer>
    );
}
