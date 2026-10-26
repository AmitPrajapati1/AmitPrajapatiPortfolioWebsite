import React, { Suspense, lazy, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Layers3, Smartphone, Download, ExternalLink, Sparkles } from 'lucide-react';
import './styles.css';

const Projects = lazy(() => import('./sections/Projects.jsx'));
const Skills = lazy(() => import('./sections/Skills.jsx'));
const Resume = lazy(() => import('./sections/Resume.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Resume', '#resume'], ['Contact', '#contact']];
  return <header className="header">
    <a className="brand" href="#home" aria-label="Amit Prajapati home"><span className="brand-mark">A.</span><span>AMIT PRAJAPATI<span className="brand-sub">DEVELOPER PORTFOLIO</span></span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav nav-open' : 'nav'}>{links.map(([name, href]) => <a key={name} href={href} onClick={() => setOpen(false)}>{name}</a>)}<a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15}/></a></nav>
  </header>;
}
function App() {
  return <><Header/><main>
    <section className="hero section-wrap" id="home">
      <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</div>
        <h1>Building digital<br/><span className="muted">experiences</span><br/>that matter<span className="accent">.</span></h1>
        <p className="hero-lede">Hi, I’m Amit — a developer who enjoys turning thoughtful ideas into fast, accessible, and beautifully crafted web experiences.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16}/></a></div>
        <div className="hero-meta"><span>BASED IN INDIA</span><span className="meta-line"/><span>REACT · JAVASCRIPT · UI</span></div>
      </div>
      <div className="hero-art" aria-label="Abstract decorative illustration"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="art-card card-back"><span className="mini-label">CURRENT FOCUS</span><Code2 size={23}/><b>Frontend<br/>engineering</b><span className="tiny-code">const craft = "care";</span></div><div className="art-card card-front"><div className="window-dots"><i/><i/><i/></div><div className="code-line"><span>01</span><b>function</b> <em>build</em>() {'{'}</div><div className="code-line"><span>02</span>&nbsp; return <strong>beautiful</strong>;</div><div className="code-line"><span>03</span>{'}'}</div><div className="art-badge"><Sparkles size={15}/> MADE WITH INTENTION</div></div><div className="floating-chip"><span>✳</span> Clean code, clear thinking</div></div>
      <a className="scroll-cue" href="#about"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
    </section>
    <section className="about section-wrap" id="about"><div className="section-kicker">01 / ABOUT ME</div><div className="about-grid"><h2>Curiosity in.<br/><span className="muted">Good work out.</span></h2><div className="about-body"><p className="large-copy">I’m a web developer focused on building useful, user-friendly digital products.</p><p>I enjoy the full process — understanding a problem, shaping a clear interface, writing maintainable code, and polishing the details that make a website feel right. I’m continually learning and looking for opportunities to grow with a team that values craft and collaboration.</p><div className="about-facts"><div><strong>01</strong><span>Thoughtful design</span></div><div><strong>02</strong><span>Responsive by default</span></div><div><strong>03</strong><span>Always learning</span></div></div></div></div></section>
    <Suspense fallback={<div className="loading section-wrap">Loading section…</div>}><Projects/><Skills/><Resume/><Contact/></Suspense>
  </main><footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">A.</span><span>AMIT PRAJAPATI<span className="brand-sub">BUILDING WITH PURPOSE</span></span></a><span>© {new Date().getFullYear()} Amit Prajapati</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer></>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);