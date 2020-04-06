import React, {useState, useEffect} from 'react';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';
import './App.css';
import desktopImage from './JapanAgain.jpg';
import mobileImage from './fengReiMen.jpg';

const App = () => {
  
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;
  
  return (
    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">
        <h1>Japan</h1>
        <h2>It was like a dream.</h2>
        <h2><a href="https://google.com" target="_blank" rel="noopener noreferrer"> Resume <TiDocumentText /></a>, 
            <a href="https://github.com/RayRuizheLi" target="_blank" rel="noopener noreferrer"> Github <FaGithub /></a>,
            <a href="https://www.linkedin.com/in/ray-ruizhe-li/" target="_blank" rel="noopener noreferrer"> LinkedIn <FaLinkedin /></a>,
            <a href="https://devpost.com/RayRuizhe?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer"> DevPost <FaDev /></a>
        </h2>
        <a href="https://google.com">Google</a>
      </div>
    </div>
  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowWidth;
};

export default App;
