export default function Home() {
  return (
    <div className="content-container">
      <h1 className="page-title">Hey there, I&#39;m Jiya — welcome to my corner of the web!</h1>
      <p className="site-description">A beautifully responsive, statically-generated site powered by Next.js, curiosity, and just the right amount of caffeine.</p>
      <div className="welcome-text">
        <p>Feel free to scroll around — check out who I am, what I build, what I dream up, or drop a hello.</p>
        <p className="welcome-text">
          Curious how this came together? Peek at the source <a href="https://github.com/jiya-gidwani/portfolio" target="_blank" rel="noopener noreferrer">here</a>.<br />
          <a href="/projects" className="source-link" style={{ marginTop: '1rem', display: 'inline-block' }}>Projects</a> | <a href="/resume" className="source-link" style={{ marginTop: '1rem', display: 'inline-block' }}>Resume</a>
        </p>
      </div>
    </div>
  );
} 