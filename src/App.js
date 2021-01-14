import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';

const particlesOption = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 200
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles 
        className='particles'
        params={particlesOption}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      
      {/* 
      <FaceRecognition />
       */}
    </div>
  );
}

export default App;
