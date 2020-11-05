import '../styles/global.css'
import Router from 'next/router'
import Head from 'next/head'
import { useEffect } from 'react'

const GA_TRACKING_ID = 'UA-148141583-1'
const emailJs = 'user_Ui7eii2l7NHZDW3UB8cDD'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

export default function App({ Component, pageProps }) {


    useEffect(() => {
        const handleRouteChange = (url) => {
          pageview(url)
        }
        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
          Router.events.off('routeChangeComplete', handleRouteChange)
        }
      }, [])

    return <>
    <Head>
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@500;700&display=swap" rel="stylesheet"></link>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js"></script>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `
              !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/7a8068e8e0107b9c60659c135/15bd39bb12076a7c78750bd9e.js");
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){
                emailjs.init('${emailJs}');
             })();
          `,
            }}
          />
        </Head>
    <Component {...pageProps} />
    </>
  }