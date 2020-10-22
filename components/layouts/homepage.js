import Head from 'next/head'
import styles from '../../styles/utils.module.css';
import themeStyles from '../../styles/theme.module.css';

export const siteTitle = 'Ashutosh Sharma frontend developer and manager. I am mad for web performance. Ex ZOHO | Housing.com | goibibo.com | Times Internet'

function Layout({ children }) {
    return <div className={`${themeStyles.textColor}`}>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="More than 6 years of experience in design, development, and architecture of large scale frontend applications. I have experience of leading a team, collaborating within a team, and performing as an individual contributor."
        />
        <meta
          property="og:image"
          content={``}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
          {children}
          <style jsx>{`
          `}</style>
    </div>
  }
  
  export default Layout