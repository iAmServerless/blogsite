import Link from 'next/link';
import styles from './blog.module.css';

const blogs = [
    {
        title: "How to improve website connection speed in 2021",
        author: 'Ashutosh Sharma',
        description: 'Optimize your website connection speed with HTTP/3, TLS 1.3, ECC Certificates, OCSP Stapling, etc',
        url: '/blogs/optimize-website-connection-speed-in-2021',
        date: 'Jan 2021'
    },
    {
        title: "DNS Resolution: Optimization Tools and Opportunities",
        author: 'Ashutosh Sharma',
        description: 'DNS resolution is the first thing that happens when a request is made to a remote server. Find ways to optimize your sites dns resolution',
        url: '/blogs/optimize-dns-resolution-for-fast-website',
        date: 'Dec 2020'
    },
    {
        title: 'The Truth of Google Lighthouse Performance',
        author: 'Ashutosh Sharma',
        description: 'Your core metrics may not have a direct correlation with lighthouse scores.',
        url: '/blogs/lighthouse-performance-auditing-things-you-should-know',
        date: 'Nov 2020'
    }
];

export default function Blogs() {
    return (
        <section id="blogs" className="section container">
            <h2 className={styles.heading}>Latest Articles</h2>
            <div className={styles.grid}>
                {blogs.map((blog, index) => (
                    <Link key={index} href={blog.url}>
                        <a className={`${styles.card} glass`}>
                            <div className={styles.content}>
                                <span className={styles.date}>{blog.date}</span>
                                <h3 className={styles.title}>{blog.title}</h3>
                                <p className={styles.description}>{blog.description}</p>
                                <div className={styles.readMore}>Read Article →</div>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </section>
    );
}