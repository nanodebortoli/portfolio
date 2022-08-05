import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Projects from './components/Projects/Projects.jsx';
import Technologies from './components/Technologies/Technologies.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Projects />
      <Technologies />
    </>
  );
}

export default App;
