import { portfolioData } from '../../data/portfolio';
import styles from './experiance.module.css';

export default function Experiance() {
    return (
        <section id="experience" className="section container">
            <div className={styles.header}>
                <h2 className={styles.heading}>Professional Experience</h2>
                <div className={styles.line}></div>
            </div>

            <div className={styles.timeline}>
                {portfolioData.experiences.map((exp, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineLeft}>
                            <span className={styles.date}>{exp.duration}</span>
                            <h4 className={styles.company}>{exp.company}</h4>
                        </div>
                        <div className={styles.timelineRight}>
                            <h3 className={styles.role}>{exp.role}</h3>
                            {exp.achievements ? (
                                <ul className={styles.achievementList}>
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className={styles.achievementItem}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className={styles.description}>{exp.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}