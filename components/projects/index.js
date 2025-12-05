import { portfolioData } from '../../data/portfolio';
import styles from './project.module.css';

export default function Projects() {
    return (
        <section id="projects" className="section container">
            <div className={styles.header}>
                <h2 className={styles.heading}>Selected Work</h2>
                <div className={styles.line}></div>
            </div>

            <div className={styles.grid}>
                {portfolioData.projects.map((project, index) => (
                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={project.image} alt={project.name} className={styles.image} />
                            <div className={styles.overlay}>
                                <span className={styles.viewBtn}>View Project &rarr;</span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{project.name}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.tags}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}