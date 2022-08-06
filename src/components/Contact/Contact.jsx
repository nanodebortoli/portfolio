import styles from './Contact.module.css';

const Contact = () => {
  return(
    <div id='contact' className={styles.contact}>
      <h1>Contact</h1>
      <h4>Want to know more about me? You can contact me via:</h4>
      <div className={styles.ways}>
        <div className={styles.container}>
          <img src={process.env.PUBLIC_URL + '/whatsapp.svg'} alt='whatsapp logo' className={styles.logo} />
          <a href='https://wa.me/542396612354' target='_blank' className={styles.datos}>Whatsapp</a>
        </div>
        <div className={styles.container}>
          <img src={process.env.PUBLIC_URL + 'mail.svg'} alt='email icon' className={styles.logo} />
          <a href='mailto:ignaciodebortoli@outlook.com' className={styles.datos}>Email</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
