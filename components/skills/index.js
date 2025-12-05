import { portfolioData } from '../../data/portfolio';
import styles from './skills.module.css';

export default function Skills() {
    return (
        <section id="skills" className="section container">
            <div className={styles.header}>
                <h2 className={styles.heading}>Technical Expertise</h2>
                <div className={styles.line}></div>
            </div>

            <div className={styles.grid}>
                {/* Leadership First */}
                <div className={styles.categoryCard}>
                    <h3 className={styles.categoryTitle}>Leadership & Strategy</h3>
                    <div className={styles.skillList}>
                        {portfolioData.skills.leadership.map((skill, index) => (
                            <div key={index} className={styles.skillTag}>{skill.name}</div>
                        ))}
                    </div>
                </div>

                {/* Technical Domains */}
                <div className={styles.techGrid}>
                    {Object.entries(portfolioData.skills).filter(([key]) => key !== 'leadership').map(([category, skills]) => (
                        <div key={category} className={styles.techCategory}>
                            <h4 className={styles.techTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                            <ul className={styles.techList}>
                                {skills.map((skill, index) => (
                                    <li key={index} className={styles.techItem}>
                                        <span className={styles.techName}>{skill.name}</span>
                                        <div className={styles.techBar}>
                                            <div className={styles.techFill} style={{ width: `${skill.level}%` }}></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}