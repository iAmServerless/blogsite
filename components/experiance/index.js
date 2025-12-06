import { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import Modal from '../modal';
import styles from './experiance.module.css';

export default function Experiance() {
    const [selectedExp, setSelectedExp] = useState(null);

    return (
        <section id="experience" className="section container">
            <div className={styles.header}>
                <h2 className={styles.heading}>Professional Experience</h2>
                <div className={styles.line}></div>
            </div>

            <div className={styles.grid}>
                {portfolioData.experiences.map((exp, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.role}>{exp.role}</h3>
                            <h4 className={styles.company}>{exp.company}</h4>
                            <span className={styles.date}>{exp.duration}</span>
                        </div>

                        <div className={styles.cardPreview}>
                            {exp.achievements ? (
                                <ul className={styles.previewList}>
                                    {exp.achievements.slice(0, 2).map((item, i) => (
                                        <li key={i} className={styles.previewItem}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className={styles.previewDescription}>
                                    {exp.description?.substring(0, 100)}...
                                </p>
                            )}
                        </div>

                        <button
                            className={styles.viewMoreBtn}
                            onClick={() => setSelectedExp(exp)}
                        >
                            View More
                        </button>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedExp}
                onClose={() => setSelectedExp(null)}
                title={`${selectedExp?.role} @ ${selectedExp?.company}`}
            >
                {selectedExp && (
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeaderInfo}>
                            <span className={styles.modalDate}>{selectedExp.duration}</span>
                        </div>
                        {selectedExp.achievements ? (
                            <ul className={styles.achievementList}>
                                {selectedExp.achievements.map((item, i) => (
                                    <li key={i} className={styles.achievementItem}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className={styles.description}>{selectedExp.description}</p>
                        )}
                    </div>
                )}
            </Modal>
        </section>
    );
}