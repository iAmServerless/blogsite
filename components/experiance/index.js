import styles from './experiance.module.css';
import Masonry from 'react-masonry-css'
import utilStyles from './../../styles/utils.module.css';


const breakpointColumnsObj = {
    1100: 1,
    700: 1,
    500: 1
  };

  let experiances = [
    {
          name: 'Housing.com',
          role: 'Technology Lead',
          year: 'Jun 2018 - Present',
          responsibility: 'Managing a team of Senior Engineers responsible for Housing demand-side application. Led the development of continuous delivery infrastructure to enable build, automation, deployment, and monitoring. Designed a monitoring system to perform real-user performance monitoring. This infrastructure helps housing.com to keep perfect track of performance per release. Responsible for recruiting, training, and mentoring talented engineers'
    }, {
        name: 'Times Internet',
        role: 'Frontend Manager',
        year: 'Aug 2017 - Nov 2018',
        responsibility: 'Owned the frontend of timesprime.com a comprehensive digital membership service'
    }, {
        name: 'Goibibo',
        role: 'Software Engineer',
        year: 'Aug 2016 - Oct 2017',
        responsibility: 'Responsible for architecture and development of Trains and gocars module.'
    }, {
          name: 'Zoho Corporation Pvt. Ltd',
          role: 'Member of Technical Staff',
          year: 'Jun 2014 - Dec 2015',
          responsibility: 'Responsible for collecting logs using Active Directory Service Interface (ADSI), processing them and generating human readable reports for system admins. writing reusable javascript components'
    },
  ]

function ExperianceDetails({experiance}) {
    return <div className={styles.experianceCard}>
        <div>
        <div>{experiance.year}</div>
        <h3 className={utilStyles.headingXl}>{experiance.name}</h3>
        <h4 className={utilStyles.headingLg}>{experiance.role}</h4>
        <p className={utilStyles.paragraph}>{experiance.responsibility}</p>
        </div>
    </div>
}

export default function Experiance() {
    return <div className={styles.container}>
        <h1 className={`${utilStyles.heading2Xl} ${utilStyles.underline} ${utilStyles.gradient} ${utilStyles.margin4}`}>Experiance</h1>
        <div className={styles.cards}>
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles['my-masonry-grid']}
        columnClassName={styles['my-masonry-grid_column']}
         >
            {
                experiances.map((experiance, i) => {
                    return <ExperianceDetails key={i} experiance={experiance}/>
                })
            }
        </Masonry>
        </div>
    </div>

}