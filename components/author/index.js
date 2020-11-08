import styles from './author.module.css';
import Link from 'next/link'

export default function Author({heading, author, description, link}) {
    return (
        <Link href={link}>
                <a>
        <div className={styles.author}>
                    <div className={styles.imageContainer}>
                        <img className={styles.profileImage} src="/profile.jpg" />
                    </div>
                    <div>
                        <div className={styles.heading}>{heading}</div>
                        <div className={styles.subHeading}><strong>{author}</strong></div>
                        <div className={styles.description}>{description}</div>
                    </div>
        </div>
        </a>
            </Link>
    )
}