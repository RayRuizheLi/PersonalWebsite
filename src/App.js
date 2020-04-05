import React, {useState, useEffect} from 'react';
import './App.css';
import desktopImage from './JapanAgain.jpg';
import mobileImage from './fengReiMen.jpg';

const App = () => {
  
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">
        <h1 style={{color:`white`}}>Japan</h1>
        <p style={{color:`white`}}>It was like a dream.</p>
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
