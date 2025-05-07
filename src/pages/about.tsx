import Layout from '../components/Layout';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <Layout>
      <div className="content-container">
        <h1 className="page-title">A Bit More About Me</h1>
        
        <div className="about-content">
          <p>Hey there! I&#39;m Jiya Gidwani — a Full Stack Engineer who loves building responsive, user-friendly web experiences that make a real impact.</p>
          <p>I'm based in Bangalore, where I'm currently working as a Full Stack Developer Intern at Demand-Xpress. In my role, I get to dive deep into awesome tech stacks like React.js, Node.js, and TypeScript, and honestly, there's nothing more satisfying than taking an idea and transforming it into a clean, functional app that people can interact with.</p>
          <p>Web development for me is all about solving problems, creating efficient solutions, and continuously improving. I really enjoy the challenge of making apps not only functional but also intuitive and engaging for users. It&#39;s the little details that make all the difference, and I love perfecting them to make the experience smooth and enjoyable.</p>
          <p>When I'm not coding away, you'll probably find me with a cup of coffee in hand, enjoying some music, or out exploring nature. I'm a huge fan of discovering new places and finding inspiration in the world around me. It helps me recharge and sparks fresh ideas for my next project.</p>
          <p>I believe in staying curious and never stopping the learning process — whether it's a new framework, a fresh approach to coding, or simply something I find exciting in the tech world. I'm always looking to improve and embrace new challenges that come my way.</p>
          <p>In short — I'm someone who's passionate about what I do, loves to learn, and is always up for the next exciting challenge.</p>
        </div>
      </div>
    </Layout>
  );
};

export default About; 