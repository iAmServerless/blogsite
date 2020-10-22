import styles from './skills.module.css';
import utilStyles from './../../styles/utils.module.css';

  let skills = [
    {
        name: 'react',
        logo: '/react.svg',
        desc: 'advanced knowledge of reactjs'
    },
    {
        name: 'node',
        logo: '/node.svg',
        desc: 'advanced knowledge of nodejs'
    },
    {
        name: 'HTML',
        logo: '/html.svg',
        desc: 'advanced knowledge of HTML'
    },
    {
        name: 'css',
        logo: '/css.svg',
        desc: 'advanced knowledge of CSS'
    },
    {
        name: 'js',
        logo: '/js.svg',
        desc: 'advanced knowledge of javascript'
    },
    {
        name: 'Akamai',
        logo: '/akamai.svg',
        desc: 'intermidiate knowledge of Akamai CDN'
    },
    {
        name: 'AWS',
        logo: '/aws.svg',
        desc: 'intermidiate knowledge of Amazon Web Services'
    },
    {
        name: 'Nginx',
        logo: '/nginx.svg',
        desc: 'intermidiate knowledge of Nginx Server'
    }
  ]

function SkillsCard({skill}) {
    return <div>
        <img src={skill.logo} alt={skill.desc}/>
    </div>
}

export default function Skills() {
    return <div className={styles.container}>
        <h1 className={`${utilStyles.headingXl} ${utilStyles.fadeBlack} ${utilStyles.underline}`}>Skills</h1>
        <div className={styles.cards}>
            {
                skills.map((skill, i) => {
                     return  <SkillsCard key={i} skill={skill}/>
                })
            }
        </div>
    </div>

}