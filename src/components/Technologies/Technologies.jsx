import styles from './Technologies.module.css';

const Technologies = () => {
  return(
    <div id='technologies' className={styles.technologies}>
      <h1>Technologies</h1>
      <div className={styles.container} >
          <h2>Front End</h2>
          <h2>Back End</h2>
        <div className={styles.front}>
          <div className={styles.tech}>
            <img src={process.env.PUBLIC_URL + '/javascript.svg'} alt="javascript logo" className={styles.techLogo}/>
            <span className={styles.techName}>Javascript</span>
          </div>
          <div className={styles.tech}>
            <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="react logo" className={styles.techLogo}/>
            <span className={styles.techName}>React</span>
          </div>
          <div className={styles.tech}>
            <img src={process.env.PUBLIC_URL + '/redux.svg'} alt="redux logo" className={styles.techLogo}/>
            <span className={styles.techName}>Redux</span>
          </div>
          <div className={styles.tech}>
            <img src={process.env.PUBLIC_URL + '/css.svg'} alt="css logo" className={styles.techLogo}/>
            <span className={styles.techName}>CSS</span>
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.tech}>
              <img src={process.env.PUBLIC_URL + '/node.svg'} alt="node logo" className={styles.techLogo}/>
              <span className={styles.techName}>Node.js</span>
            </div>
            <div className={styles.tech}>
              <img src={process.env.PUBLIC_URL + '/express.svg'} alt="express logo" className={styles.techLogo}/>
              <span className={styles.techName}>Express</span>
            </div>
            <div className={styles.tech}>
              <img src={process.env.PUBLIC_URL + '/postgres.svg'} alt="postgres logo" className={styles.techLogo}/>
              <span className={styles.techName}>PostgreSQL</span>
            </div>
            <div className={styles.tech}>
              <img src={process.env.PUBLIC_URL + '/sequelize.svg'} alt="sequelize logo" className={styles.techLogo}/>
              <span className={styles.techName}>Sequelize</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Technologies;
