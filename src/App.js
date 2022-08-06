import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Projects from './components/Projects/Projects.jsx';
import Technologies from './components/Technologies/Technologies.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Welcome />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
};

export default App;
