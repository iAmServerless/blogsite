import styles from './blogcontent.module.css'
import utilStyles from './../../styles/utils.module.css';

export default function BlogContent({children}) {
    return <div className={`${styles.container} ${styles.color}`}>{children}</div>
}