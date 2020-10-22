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
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
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