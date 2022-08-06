import Project from '../Project/Project.jsx';
import styles from './Projects.module.css';

const Projects = () => {
  return(
  <div className={styles.projects} id='projects'>
    <h1>Projects</h1>
    <div className={styles.container}>
      <Project image='https://i.stack.imgur.com/Lv9Nd.png' name='Soundwave' description="Soundwave is a music streaming platform that I developed together with 7 of my bootcamp's classmates. The page consumes data from deezer API, which is stored in our own database, but also has the feature of uploading your own music if you're an artist. It was a huge challenge where I learned how to work alongside my partners and to use some new technologies like audio streaming libraries." deploy='https://soundwave-swart.vercel.app/' repo='https://github.com/SoundWavePF' />
      <Project image='https://i.stack.imgur.com/Lv9Nd.png' name='PI Countries' description='In this project I created a webpage that consumes data from restcountries.com API. Various pieces of information about the different countries can be seen. Countries can be filtered or ordered by different criteria.' deploy='https://picountries-nanodebortoli.vercel.app/' repo='https://github.com/nanodebortoli/PICountries' />  
    </div>
  </div>
  );
};

export default Projects;
