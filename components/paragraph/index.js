import styles from './p.module.css'


export default function Paragraph({children}) {
    return <p className={styles.container}>
        {children}
    </p>
}