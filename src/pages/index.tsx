import Layout from '../components/Layout';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="content-container">
        <h1 className="page-title">Hey there, I&#39;m Jiya — welcome to my corner of the web!</h1>
        <p className="site-description">A beautifully responsive, statically-generated site powered by Next.js, curiosity, and just the right amount of caffeine.</p>
        <div className="welcome-text">
          <p>Feel free to scroll around — check out who I am, what I build, what I dream up, or drop a hello.</p>
          <p>Curious how this came together? <a href="https://github.com/JiyaaG/portfolio.git" target="_blank" rel="noopener noreferrer" className="source-link">Peek at the source here</a>.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 