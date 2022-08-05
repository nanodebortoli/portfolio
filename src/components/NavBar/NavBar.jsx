import styles from './NavBar.module.css';

const NavBar = () => {
  return(
    <nav>
      <div className={styles.leftContainer}>
        <a href='#' className={styles.logo}>
          <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
          <div className={styles.name}>
            <span>Ignacio</span>
            <span>Debortoli</span>
          </div>
        </a>
        <a href='#projects' className={styles.button}>
          Projects
        </a>
        <a href='#technologies' className={styles.button}>
          Technologies
        </a>
        <a href='#contact' className={styles.button}>
          Contact
        </a>
      </div>
      <div className={styles.rightContainer}>
        <a href='https://github.com/nanodebortoli' target='_blank'><img src={process.env.PUBLIC_URL + '/github.svg'} alt='github' className={styles.socials}/></a>
        <a href='https://www.linkedin.com/in/ignaciodebortoli/' target='_blank'><img src={process.env.PUBLIC_URL + '/linkedin.svg'} alt='linkedin' className={styles.socials}/></a>
      </div>
    </nav>
  )
}

export default NavBar;
