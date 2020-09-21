import styles from './blog.module.css';
import utilStyles from './../../styles/utils.module.css';

export default function Description(props) {
    return <div className={styles.container}>
        <img className={styles.heroImage} src={props.imgSrc} alt={props.imageAlt} />
        <div className={`${styles.title} ${utilStyles.gradient2}`}>
            <h1>Lighthouse Auditing, things you should know</h1>
            <h3>It's not always what you think</h3>
        </div>
    </div>

}