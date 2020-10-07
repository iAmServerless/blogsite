import styles from './blog.module.css';
import Link from 'next/link'
import utilStyles from './../../styles/utils.module.css';

export default function Description(props) {
    return <div className={styles.container}>
        <Link href='/'><a className={styles.logo}><img src="/logo.png" /></a></Link>
        <img className={styles.heroImage} src={props.imgSrc} alt={props.imageAlt} />
        <div className={`${styles.title}`}>
            <h1 className={utilStyles.gradient2}>Do not chase the perfect lighthouse performance score</h1>
            <h3 className={utilStyles.gradient2}>Make an informative decision before picking another optimization suggestion</h3>
        </div>
    </div>

}