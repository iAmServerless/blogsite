import Head from 'next/head'
import Layout from '../components/layouts/homepage'
import Description from '../components/description'
import Experiance from '../components/experiance'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'
import Blogs from '../components/blog'
import { portfolioData } from '../data/portfolio'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{portfolioData.title} | {portfolioData.subtitle}</title>
        <meta name="description" content={portfolioData.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Description />
      <Experiance />
      <Skills />
      <Projects />
      <Testimonials />
      <Blogs />
      <Contact />
    </Layout>
  )
}
