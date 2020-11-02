import styles from './blog.module.css';
import Link from 'next/link'
import utilStyles from './../../styles/utils.module.css';

export default function Description(props) {
    return <div className={styles.container}>
        <Link href='/'><a className={styles.logo}><img src="/logo.png" /></a></Link>
        <img className={styles.heroImage} src={props.imgSrc} width={props.width} height={props.height} alt={props.imageAlt} />
        <div className={`${styles.title}`}>
<h1 className={`${styles.heading}`}>{props.heading}</h1>
<h4 className={`${styles.subHeading}`}>{props.subHeading}</h4>
        </div>
    </div>
}