import styles from './blog.module.css';
import Link from 'next/link'
import Masonry from 'react-masonry-css'
import utilStyles from './../../styles/utils.module.css';


const breakpointColumnsObj = {
    1100: 1,
    700: 1,
    500: 1
  };

  let blogs = [
    {
          title: 'Lighthouse: Expectations vs. Reality',
          author: 'Ashutosh Sharma',
          description: 'Your core metrics may not have a direct correlation with lighthouse scores.',
          url: '/blogs/lighthouse-performance-auditing-things-you-should-know'
    },
    {
          title: "Optimize your DNS Resolution today, don't ignore the first thing that happens on the web",
          author: 'Ashutosh Sharma',
          description: 'Optimize the most common missed opportunity to keep an edge over your competitors.',
          url: '/blogs/optimize-dns-resolution-for-fast-website'
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