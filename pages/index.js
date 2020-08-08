import Head from 'next/head'
import Description from '../components/description';
import Experiance from '../components/experiance';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Layout from '../components/layouts/homepage'
import Testimonials from '../components/testimonials';
import Contact from '../components/contact';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Description />
      <Experiance />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </Layout>
  )
}
