import styles from './blog.module.css';
import Link from 'next/link'
import utilStyles from './../../styles/utils.module.css';

  let blogs = [
    {
        title: "How to improve website connection speed in 2021",
        author: 'Ashutosh Sharma',
        description: 'Optimize your website connection speed with HTTP/3, TLS 1.3, ECC Certificates, OCSP Stapling, etc',
        url: '/blogs/optimize-website-connection-speed-in-2021'
    },
    {
        title: "DNS Resolution: Optimization Tools and Opportunities",
        author: 'Ashutosh Sharma',
        description: 'DNS resolution is the first thing that happens when a request is made to a remote server. Find ways to optimize your sites dns resolution',
        url: '/blogs/optimize-dns-resolution-for-fast-website'
    },
    {
          title: 'The Truth of Google Lighthouse Performance',
          author: 'Ashutosh Sharma',
          description: 'Your core metrics may not have a direct correlation with lighthouse scores.',
          url: '/blogs/lighthouse-performance-auditing-things-you-should-know'
    }
  ]

function BlogDetails({blog}) {
    return <Link href={blog.url}>
    <a className={styles.blogCardWidth}>
    <div className={styles.blogCard}>
        <div>
        <h3 className={`${styles.gray} ${styles.heading}`}>{blog.title}</h3>
        <p className={`${utilStyles.paragraph} ${styles.color}`}>{blog.description}</p>
        <div className={`${styles.clickIndication}`}>Read more..</div>
        </div>
    </div>
    </a>
    </Link>
}

export default function Blogs() {
    if(!blogs.length) return null;
    return <div className={styles.container}>
        <h1 className={`${utilStyles.headingXl} ${utilStyles.fadeBlack} ${utilStyles.underline}`}>ARTICLES</h1>
        <div className={styles.cards}>
            {
                blogs.map((blog, i) => {
                    return <BlogDetails key={i} blog={blog}/>
                })
            }
        </div>
    </div>

}