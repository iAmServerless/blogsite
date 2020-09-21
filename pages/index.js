import Head from 'next/head'
import Description from '../components/description';
import Experiance from '../components/experiance';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Layout from '../components/layouts/homepage'
import Testimonials from '../components/testimonials';
import Contact from '../components/contact';
import Blogs from '../components/blog';

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8"></meta>
        <title>Ashutosh Sharma | Frontend Architect at housing.com | Ex Times Internet, Goibibo, Zoho | Javascript, React, Rust</title>
        <meta name="description" content="Ashutosh Sharma is a frontend architect at housing.com and is proficient in high-performance web applications. He worked extensively on Javascript, React, CI/CD, performance tracking, and writing scalable frontend application" />
        <meta name="keywords" content="Ashutosh Sharma, Frontend Architect, Frontend performance, React, Javascript" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ashu.online/" />
      </Head>
      <Description />
      <Blogs />
      <Experiance />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </Layout>
  )
}
