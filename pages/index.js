import Head from 'next/head'
import Description from '../components/description';
import Experiance from '../components/experiance';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Layout from '../components/layouts/homepage'
import Testimonials from '../components/testimonials';
import Contact from '../components/contact';
import Blogs from '../components/blog';

let title = "Ashutosh Sharma | Frontend Architect at housing.com | Ex Times Internet, Goibibo, Zoho | Javascript, React, Rust";
let description = "Ashutosh Sharma is a frontend architect at housing.com and is proficient in high-performance web applications. He worked extensively on Javascript, React, CI/CD, performance tracking, and writing scalable frontend application"

export default function Home() {
  return (
    <Layout>
      <Head>
        <html lang='en' />
        <meta charSet="utf-8" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8"></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://ashutosharma.com/profile.png" />
        <meta property="og:url" content="https://ashutosharma.com/blogs/optimize-dns-resolution-for-fast-website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="preload" as="image" href="/ashutosh.jpeg" />
        <meta name="keywords" content="Ashutosh Sharma, Frontend Architect, Frontend performance, React, Javascript" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ashutosharma.com/" />
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
