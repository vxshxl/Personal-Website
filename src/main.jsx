import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import { categories, projects } from './projects.js';
import { timeline, skillGroups } from './profile.js';
import './styles.css';

const LINKEDIN = 'https://www.linkedin.com/in/vishal-n-tailor/';
const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', issued: 'March 2025', credential: 'f822df2eac43409f8aabdfe34046286a' },
  { name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', issued: 'December 2024', credential: '7EF1A0BEC0122BF1' },
];
const Arrow = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>;
function Logo() {
  const [missing, setMissing] = useState(false);
  return missing ? <span className="logo-fallback">Vishal.</span> : <span className="logo-crop"><img src="/vxsh.png" alt="VXSH" onError={()=>setMissing(true)}/></span>;
}
function LinkedInLink({ children, className = '' }) {
  return <a className={className} href={LINKEDIN} target="_blank" rel="noopener noreferrer">{children}<Arrow/></a>;
}
function Wireform() {
  return <svg className="wireform" viewBox="0 0 300 300" aria-hidden="true"><g>{Array.from({length:18},(_,i)=><ellipse key={i} cx="150" cy="150" rx={45+i*4} ry={104-i*1.9} transform={`rotate(${i*10} 150 150)`} fill="none" stroke={i%5===0?'#ff343b':'#44f5ee'} strokeWidth=".7" opacity=".6"/>)}</g></svg>;
}
function Project({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  return <article id={`project-${project.slug}`} className="project">
    <div className="project-top"><span className="project-number">{project.id.padStart(2,'0')}</span><div className="project-description"><div className="project-meta"><span>{project.category}</span><span>{project.status}{project.year && ` / ${project.year}`}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="project-visual" aria-hidden="true">{project.image && !imageFailed ? <img src={project.image} alt="" onError={()=>setImageFailed(true)}/> : project.slug==='personal-orbit' ? <div className="mini-site"><div className="mini-toolbar"><i/><i/><i/></div><p>Vishal Tailor<span>Ideas into<br/>something useful.</span></p><span className="mini-accent"/></div> : <span className="project-code">{project.category==='Algorithms'?'O(n)':project.category==='Machine learning'?'f(x)':project.category==='Web development'?'〈/〉':project.category==='Mobile development'?'app()':'{ }'}</span>}</div></div>
    <details className="project-details"><summary>How I built it <span className="details-plus" aria-hidden="true">+</span></summary><div className="project-detail-content"><div><h4>The problem</h4><p>{project.problem}</p></div><div><h4>The approach</h4><ul>{project.approach.map((step,i)=><li key={i}>{step}</li>)}</ul></div><div><h4>The result</h4><p>{project.outcome}</p>{project.lessons && <p>{project.lessons}</p>}</div>{project.complexity && <div><h4>Complexity</h4><p>Time: {project.complexity.time}<br/>Space: {project.complexity.space}</p></div>}{(project.repositoryUrl || project.demoUrl) && <div className="project-links">{project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">Source code <Arrow/></a>}{project.demoUrl && <a href={project.demoUrl} target={project.demoUrl.startsWith('https://')?'_blank':undefined} rel={project.demoUrl.startsWith('https://')?'noopener noreferrer':undefined}>View project <Arrow/></a>}</div>}</div></details>
  </article>;
}
function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [category,setCategory] = useState('All');
  const [showAllProjects,setShowAllProjects] = useState(()=>window.location.hash.startsWith('#project-'));
  const published = projects.filter(project=>!project.template);
  const matching = published.filter(project=>category==='All'||project.category===category);
  const visible = category==='All' && !showAllProjects ? matching.slice(0,2) : matching;
  useEffect(()=>{
    const close=e=>{if(e.key==='Escape')setMenuOpen(false)};
    document.addEventListener('keydown',close);
    const openLinkedProject=()=>{
      const hash=decodeURIComponent(window.location.hash.slice(1));
      if(!hash.startsWith('project-')) return;
      setShowAllProjects(true);
      setCategory('All');
      requestAnimationFrame(()=>{
        const entry=document.getElementById(hash);
        if(entry){entry.querySelector('details').open=true;entry.scrollIntoView();}
      });
    };
    window.addEventListener('hashchange',openLinkedProject);
    openLinkedProject();
    return()=>{document.removeEventListener('keydown',close);window.removeEventListener('hashchange',openLinkedProject);};
  },[]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="header-logo" href="#home" aria-label="Vishal home"><Logo/></a><div className="header-name"><strong>Vishal <span>Tailor</span></strong><span>Cloud · Machine learning</span></div><nav id="navigation" className={menuOpen?'navigation open':'navigation'} aria-label="Main navigation">{[['Work','work'],['About','about'],['Contact','contact']].map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)}>{label}<Arrow/></a>)}</nav><LinkedInLink className="header-linkedin"><span aria-label="LinkedIn">in</span></LinkedInLink><button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?'Close −':'Menu +'}</button></header>
    <main id="main" className="shell">
      <section id="home" className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow"><span className="status-dot"/>Hi, I’m Vishal.</p><h1 id="hero-title">From ideas<br/><span>to working code<span className="headline-period">.</span></span></h1><p className="hero-description">I’m a cloud engineer at Vanguard and study machine learning at Georgia Tech. I’m interested in the ideas behind good software — and turning those ideas into things people can use.</p><div className="hero-actions"><a className="button" href="#work">See my work <Arrow/></a><LinkedInLink className="text-link">Connect on LinkedIn</LinkedInLink></div></div><div className="hero-aside"><Wireform/><span className="art-caption">A little structure. A little curiosity.</span><div className="quick-facts"><div><span>WORK</span><p>Cloud Engineer<span>Vanguard</span></p></div><div><span>STUDY</span><p>Georgia Tech<span>MS Computer Science · Machine Learning</span></p></div></div></div></section>
      <section id="work" className="work-section" aria-labelledby="work-title"><div className="section-heading"><div><p className="eyebrow section-eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Ideas into something useful.</h2></div><label className="category-select"><span className="sr-only">Filter projects by category</span><select value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(item=><option key={item} value={item}>{item==='All'?'All projects':item}</option>)}</select></label></div><div id="project-list" className="project-list" aria-live="polite">{visible.map(project=><Project project={project} key={project.slug}/>)}{!visible.length && <div className="empty-projects"><p>{published.length ? `I’m preparing my ${category.toLowerCase()} projects for this space.` : 'Projects will be added here soon.'}</p><button className="text-link" onClick={()=>setCategory('All')}>See all projects <Arrow/></button></div>}</div>{category==='All' && matching.length>2 && <button className="show-projects text-link" aria-expanded={showAllProjects} aria-controls="project-list" onClick={()=>setShowAllProjects(!showAllProjects)}>{showAllProjects?'Show fewer projects':`Show all ${matching.length} projects`}<span aria-hidden="true">{showAllProjects?'−':'+'}</span></button>}</section>
      <section id="about" className="about-section" aria-labelledby="about-title"><div className="about-copy"><p className="eyebrow section-eyebrow">02 / A LITTLE BACKGROUND</p><h2 id="about-title">Learning by doing.</h2><p>I graduated from Drexel with a BS in Computer Science, concentrating in AI and Algorithms & Data Structures. I’m now pursuing an MS at Georgia Tech with a focus on Machine Learning.</p><p>I’m based in Pennsylvania. This portfolio is where I share what I’ve built and what I’ve learned.</p><LinkedInLink className="text-link">Experience & education on LinkedIn</LinkedInLink></div><div id="certifications" className="certifications"><h3>Cloud certifications <span>02</span></h3>{certifications.map(cert=><details className="certification" key={cert.name}><summary><span className="certification-mark" aria-hidden="true">{cert.issuer==='Microsoft'?'⊞':'☁'}</span><div><h4>{cert.name}</h4><p>{cert.issuer} · {cert.issued}</p></div><span className="details-plus" aria-hidden="true">+</span></summary><div className="certification-detail">{cert.credential && <p>Credential ID: <span>{cert.credential}</span></p>}<LinkedInLink className="text-link">View on LinkedIn</LinkedInLink></div></details>)}</div></section>
      <section id="experience" className="resume-section" aria-labelledby="experience-title">
        <div className="experience-column"><p className="eyebrow section-eyebrow">03 / EXPERIENCE & EDUCATION</p><h2 id="experience-title">The path so far.</h2>
          <ol className="experience-timeline">{timeline.map(event => <li key={`${event.date}-${event.title}`} className={event.current ? 'current-event' : ''}>
            <time dateTime={event.date}>{event.period}</time><h3>{event.title}</h3><p className="timeline-organization">{event.organization}</p><p className="timeline-description">{event.description}</p>
            <details className="timeline-more"><summary>More details <span className="details-plus" aria-hidden="true">+</span></summary><ul>{event.highlights.map(item => <li key={item}>{item}</li>)}</ul></details>
          </li>)}</ol>
        </div>
        <div id="skills" className="skills-column" aria-labelledby="skills-title"><p className="eyebrow section-eyebrow">TOOLS I WORK WITH</p><h2 id="skills-title">A practical toolkit.</h2>
          <dl className="skill-groups">{skillGroups.map(group => <div key={group.name}><dt>{group.name}</dt><dd>{group.skills.join(' · ')}</dd></div>)}</dl>
        </div>
      </section>
      <section id="contact" className="contact-section" aria-labelledby="contact-title"><div><p className="eyebrow section-eyebrow">04 / GET IN TOUCH</p><h2 id="contact-title">Have something in mind?</h2><p>I’d be glad to hear about it.</p></div><LinkedInLink className="button">Let’s connect</LinkedInLink></section>
    </main><footer className="footer shell"><span>© {new Date().getFullYear()} Vishal Tailor</span><a href="#home" className="text-link">Back to top ↑</a></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
