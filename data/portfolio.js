export const portfolioData = {
  title: "Ashutosh Sharma",
  subtitle: "Senior Engineering Manager",
  description: "Accomplished Senior Engineering Manager with over 11 years of experience leading cross-functional teams in backend, full-stack, and frontend projects. Expertise in architecting high-scale fullstack systems, optimizing performance, and ensuring service reliability.",
  websiteUrl: "https://ashutosharma.com",
  keywords: [
    "Senior Engineering Manager",
    "Fullstack Architect",
    "Engineering Leadership",
    "Razorpay",
    "Housing.com",
    "React",
    "Node.js",
    "GoLang",
    "System Design",
    "Scalability"
  ],
  social: {
    email: "mailto:you@ashutosharma.com",
    twitter: "http://twitter.com/iamserverless",
    linkedin: "http://linkedin.com/in/iamserverless",
    github: "https://github.com/iAmServerless"
  },
  experiences: [
    {
      company: 'Razorpay',
      role: 'Senior Engineering Manager',
      duration: '2022 - Present',
      achievements: [
        'Led a cross-functional team of 24 engineers across multiple backend and frontend projects, focusing on system reliability, API performance, and infrastructure improvements.',
        'BU-Level Quality Champion: Defined and enforced engineering standards across the business unit, improving SLA adherence by 20% and significantly reducing technical debt.',
        'Strategic Cost Optimization (CMS): Delivered a self-serve CMS for marketing teams, reducing GTM time from 15 days to 2 days and cutting engineering bandwidth by 80%, driving significant cost optimization through resource reallocation.',
        'Platformize Partnership Module: Directed the architectural revamp of the partnership service (sub-merchants, commissions, payouts), resulting in a >90% drop in customer escalations (145 to 4 per month).',
        'Org-Wide Mentorship Program: Spearheaded and drove a comprehensive mentorship initiative, fostering talent development and career growth for engineers across the organization.',
        'Built and launched an AI-powered Docs Search platform using LLMs, resulting in a 70% reduction in customer complaints caused by missing information.',
        'Logging Infra for External Developers: Oversaw the implementation of logging infrastructure allowing external developers to debug payment failures, reducing integration escalation tickets by 20%.',
        'POS Partnership: Steered the development of tooling to onboard merchants on-the-fly during sales pitches, reducing onboarding time from 3 days to 20 minutes.',
        'Achieved 99.99% system availability by driving infrastructure OKRs, implementing canary deployments, and enhancing end-to-end testing coverage.',
        'Reduced MTTR from 9 minutes to 4 minutes through proactive monitoring and cross-team collaboration.',
        'Managed recruitment, growing the team from 4 to 17 members by establishing robust hiring pipelines and technical interview frameworks.'
      ]
    },
    {
      company: 'Housing.com',
      role: 'Engineering Manager',
      duration: '2018 - 2022',
      achievements: [
        'Led an engineering team of 17 engineers, delivering platform products across 5 teams while balancing project delivery with architectural modernization.',
        'Housing Demand Service: Managed the end-to-end delivery for "Buy" and "Rent" categories, maintaining the core platform used by cross-functional teams.',
        'Orchestrated the migration from monolithic architecture to micro-frontends, driving a 3x increase in release frequency using module federation.',
        'Implemented CI/CD pipelines that reduced release times by 40%, incorporating automated testing and performance monitoring to ensure high-quality releases.',
        'Drove performance optimizations, reducing build sizes by 22% and improving load times with full-page caching at the CDN level.',
        'Fostered a culture of continuous improvement by conducting regular retrospectives, resulting in enhanced team dynamics and optimized delivery processes.'
      ]
    },
    {
      company: 'Times Internet',
      role: 'Software Manager',
      duration: '2017 - 2018',
      achievements: [
        'Led the design and implementation of a mobile-optimized web application, integrating PWA features for an enhanced user experience.',
        'Architected reusable React components, reducing development time by 30% and ensuring cross-platform design consistency.',
        'Introduced frontend monitoring and error reporting, improving system stability and drastically reducing issue resolution time.'
      ]
    },
    {
      company: 'Goibibo (MMT)',
      role: 'Software Engineer',
      duration: '2016 - 2017',
      achievements: [
        'Played a key role in building the GoTrains and GoCars platforms from scratch, contributing to ideation, product planning, and technical scope definition.'
      ]
    },
    {
      company: 'Zoho Corporation',
      role: 'Software Engineer',
      duration: '2014 - 2016',
      achievements: [
        'Worked on Exchange Reporter Plus, leading the delivery of multiple projects.',
        'Built a unified ManageEngine Dashboard to consolidate multiple products, improving usability and streamlining access to key administrative tools.',
        'Integrated Active Directory using ADSI via PowerShell scripts to fetch and analyze data.'
      ]
    }
  ],
  skills: {
    leadership: [
      { name: 'Team Leadership', level: 95 },
      { name: 'Stakeholder Management', level: 90 },
      { name: 'OKR Setting', level: 90 },
      { name: 'Cost Optimization', level: 85 },
      { name: 'Mentorship', level: 95 }
    ],
    backend: [
      { name: 'GoLang', level: 85 },
      { name: 'Node.js', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'Distributed Systems', level: 85 },
      { name: 'Microservices', level: 90 }
    ],
    frontend: [
      { name: 'React / Next.js', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'PWA', level: 85 },
      { name: 'Web Performance', level: 90 }
    ],
    devops: [
      { name: 'AWS', level: 85 },
      { name: 'Terraform', level: 80 },
      { name: 'Docker / K8s', level: 80 },
      { name: 'CI/CD (Jenkins/Spinnaker)', level: 85 }
    ]
  },
  projects: [
    {
      name: 'Razorpay CMS',
      image: '/cms.png',
      description: 'Delivered a self-serve CMS for marketing teams, reducing GTM time from 15 days to 2 days and cutting engineering bandwidth by 80%.',
      link: 'https://razorpay.com',
      tags: ['Cost Optimization', 'System Design', 'Leadership']
    },
    {
      name: 'Housing.com Platform',
      image: '/housing.jpg',
      description: 'Orchestrated migration from monolithic architecture to micro-frontends, driving a 3x increase in release frequency.',
      link: 'https://housing.com',
      tags: ['Micro-frontends', 'Architecture', 'Scale']
    },
    {
      name: 'Partnership Service',
      image: '/partnership.png',
      description: 'Revamped partnership service (sub-merchants, commissions), resulting in >90% drop in customer escalations.',
      link: 'https://razorpay.com',
      tags: ['Reliability', 'Backend', 'Revamp']
    },
    {
      name: 'Times Prime PWA',
      image: '/tp.jpg',
      description: 'Mobile-optimized web application with PWA features. Architected reusable React components reducing development time by 30%.',
      link: 'https://timesprime.com',
      tags: ['PWA', 'React', 'Mobile']
    },
    {
      name: 'Goibibo Trains',
      image: '/goibibo.jpg',
      description: 'Revamped the train booking experience with a focus on speed and reliability. Introduced offline-first PWA capabilities.',
      link: 'https://www.goibibo.com/trains',
      tags: ['PWA', 'Performance', 'Mobile Web']
    },
    {
      name: 'Georbis Intelligence',
      image: '/georbis.jpg',
      description: 'Developed complex geospatial data visualization tools for defense and enterprise use cases using WebGL.',
      link: 'https://www.vizexperts.com',
      tags: ['WebGL', 'Data Viz', 'Three.js']
    },
    {
      name: 'Exchange Reporter Plus',
      image: '/zoho.jpg',
      description: 'Windows infrastructure insights tool. Built unified dashboards and integrated Active Directory using ADSI.',
      link: 'https://demo.exchangereporterplus.com',
      tags: ['Java', 'Ember.js', 'Enterprise']
    }
  ]
};
