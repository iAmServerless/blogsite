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
          title: 'Lighthouse Auditing, things you should know',
          author: 'Ashutosh Sharma',
          description: 'Lighthouse is an awesome tool to quickly find out the performance issues in your web application and list down all the actionable items.',
          url: '/blogs/lighthouse-performance-auditing-things-you-should-know'
    }
  ]

function BlogDetails({blog}) {
    return <Link href={blog.url}>
    <a>
    <div className={styles.blogCard}>
        <div>
        <h3 className={`${utilStyles.headingXl} ${utilStyles.gradient2}`}>{blog.title}</h3>
        <h4 className={`${utilStyles.headingLg} ${utilStyles.gradient2}`}>{blog.author}</h4>
        <p className={`${utilStyles.paragraph} ${utilStyles.gradient2}`}>{blog.description}</p>
        <div className={`${styles.clickIndication} ${utilStyles.gradient2}`}>Click to open</div>
        </div>
    </div>
    </a>
    </Link>
}

export default function Blogs() {
    if(!blogs.length) return null;
    return <div className={styles.container}>
        <h1 className={`${utilStyles.heading2Xl} ${utilStyles.underline} ${utilStyles.gradient} ${utilStyles.margin4}`}>Blog Posts</h1>
        <div className={styles.cards}>
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles['my-masonry-grid']}
        columnClassName={styles['my-masonry-grid_column']}
         >
            {
                blogs.map((blog, i) => {
                    return <BlogDetails key={i} blog={blog}/>
                })
            }
        </Masonry>
        </div>
    </div>

}