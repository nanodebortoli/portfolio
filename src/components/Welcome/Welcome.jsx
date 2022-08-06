import styles from './Welcome.module.css';

const Welcome = () => {
  return(
    <div className={styles.welcome}>
      <h1>Welcome to my portfolio</h1>
      <div>
        <span>I'm Ignacio Debórtoli and I'm a Full Stack Web Developer</span>
        <a href='https://1drv.ms/b/s!AqzScWXjraYnbi7xFUREDN-OjB4?e=b0223C' target='_blank'>Download my resume</a>
      </div>
    </div>
  );
};

export default Welcome;
