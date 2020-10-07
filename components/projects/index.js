import styles from './project.module.css';
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import utilStyles from './../../styles/utils.module.css';

const breakpointColumnsObj = {
    1100: 1,
    700: 1,
    500: 1
  };

  let projects = [
    {
        name: 'Housing.com',
        logo: '/housing.jpg',
        desc: 'Housing is a real estate platform',
        link: 'https://housing.com'
    },
    {
        name: 'Timesprime.com',
        logo: '/tp.jpg',
        desc: 'TimesInternet Entity',
        link: 'https://timesprime.com'
    },
    {
        name: 'Goibibo.com',
        logo: '/goibibo.jpg',
        desc: 'Book Flight, Train, Bus and Hotel',
        link: 'https://www.goibibo.com'
    },
    {
        name: 'Georbis',
        logo: '/georbis.jpg',
        desc: 'ISRO and BSF project for deep understanding about mountain tarrian',
        link: 'https://www.vizexperts.com/georbis-geospatial-intelligence'
    },
    {
        name: 'Exchange Reporter Plus',
        logo: '/zoho.jpg',
        desc: 'Tool to help windows administrators by providing them insights about their infrastructure',
        link: 'https://demo.exchangereporterplus.com/exchange/index.html#/home'
    }
  ]

function ProjectCard({project}) {
    return <div className={styles.projectCard}>
        <a href={project.link} target='_blank'>
            <img className={styles.projectImage} src={project.logo} alt={project.desc}/>
            <div className={`button ${styles.buttonStyle}`}>{project.name}</div>
        </a>
    </div>
}

export default function Projects() {
    return <div className={styles.container}>
        <h1 className={`${utilStyles.heading2Xl} ${utilStyles.underline} ${utilStyles.gradient} ${utilStyles.margin4}`}>Projects</h1>
        <div className={styles.cards}>
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles['my-masonry-grid']}
        columnClassName={styles['my-masonry-grid_column']}
         >
            {
                projects.map((project, i) => {
                     return  <ProjectCard key={i} project={project}/>
                })
            }
            </Masonry>
        </div>
    </div>

}