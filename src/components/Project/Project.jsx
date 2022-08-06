import styles from './Project.module.css';

const Project = ({ image, name, description, deploy, repo }) => {
  return(
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <span>
        <a href={deploy} target='_blank'>Deploy </a>
        <a href={repo} target='_blank'> Repo</a>
      </span>
    </div>
  );
};

export default Project;
