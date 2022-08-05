import Project from '../Project/Project.jsx';
import styles from './Projects.module.css';

const Projects = () => {
  return(
  <div className={styles.projects} id='projects'>
    <h1>Projects</h1>
    <div className={styles.container}>
      <Project image='https://i.stack.imgur.com/Lv9Nd.png' name='asd' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste harum in perspiciatis natus cum. Sint quae dolores vel aspernatur eveniet! Inventore eaque distinctio sequi quis enim quidem tempora deserunt minima!' deploy='https://www.linkedin.com/in/ignaciodebortoli/' repo='https://www.linkedin.com/in/ignaciodebortoli/' />
      <Project image='https://i.stack.imgur.com/Lv9Nd.png' name='asd' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste harum in perspiciatis natus cum. Sint quae dolores vel aspernatur eveniet! Inventore eaque distinctio sequi quis enim quidem tempora deserunt minima!' deploy='https://www.linkedin.com/in/ignaciodebortoli/' repo='https://www.linkedin.com/in/ignaciodebortoli/' />  
    </div>
  </div>
  )
}

export default Projects;
