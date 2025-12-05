import styles from './blog.module.css';

export default function BlogTop(props) {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img className={styles.heroImage} src={props.imgSrc} alt={props.alt || props.heading} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.titleWrapper}>
                <h1 className={styles.heading}>{props.heading}</h1>
                {props.subHeading && <h4 className={styles.subHeading}>{props.subHeading}</h4>}
            </div>
        </div>
    );
}