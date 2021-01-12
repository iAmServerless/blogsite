import Head from 'next/head'
import themeStyles from '../../styles/theme.module.css'
import styles from './blog.module.css'
import BlogTop from '../../components/blogTop'
import BlogContent from '../../components/blogContent'
import P from '../../components/paragraph'
import Follow from '../../components/followMe'
import Tracker from '../../components/tracker';
import Comments from '../../components/comments';
import Author from './../../components/author';
import Link from 'next/link'

let title = "How to improve your website connection speed in 2021"
let description = "HTTP/3, TLS 1.3, ECC certificates and Online Certificate Status Protocol(OCSP) stapling can give a huge boost to your website connection speed."

export default function Connection() {
    return (
        <div className={`${themeStyles.background} ${themeStyles.textColor} ${styles.removePadding}`}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content="2021-01-11T19:00:00+00:00" />
                <meta property="article:modified_time" content="2021-01-11T19:42:15+00:00" />
                <meta property="og:image" content="https://ashu.online/headoflineblocking.jpg" />
                <meta property="og:url" content="https://ashu.online/blogs/optimize-website-connection-speed-in-2021" />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="Ashutosh Sharma" />
                <meta name="twitter:label2" content="Est. reading time" />
                <meta name="twitter:data2" content="6 minutes" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@iamserverless" />
                <meta name="twitter:creator" content="@iamserverless" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://ashu.online/headoflineblocking.jpg" />
                <meta property="og:site_name" content="Ashutosh Sharma Blogs | ashu.online" />
                <meta name="twitter:image:alt" content="Optimize Wesite Connection Speed" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="HTTP/2, HTTP/3, server push, TLS 1.3, ECC Certificates, Certificate Authority, OSCP Stapling" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://ashu.online/blogs/optimize-website-connection-speed-in-2021" />
            </Head>
            <BlogTop imgSrc='/headoflineblocking.jpg' alt='http2 vs http3 connection image' heading="How to improve your website connection speed in 2021" subHeading=''/>
            <BlogContent>
                <P>
                Out of many performance metrics, one which matters the most is Time To First Byte (TTFB). If TTFB is worse, then it is guaranteed to be a poor performing website.
                </P>
                <P>
                TTFB depends upon many factors. One very critical factor is server connection which happens after DNS resolution. I will discuss how to optimize server connection speed in this article.
                </P>
                <P>
                We will look into how TLS 1.3 and HTTP/3 improves web performance. We will also look into other optimization possibilities like ECC certificates and OCSP stapling.
                </P>
                <Tracker id="25" name="Before HTTP or HTTPS"/>
                <h2>HTTP or HTTPS?</h2>
                <P>Insecure (HTTP) tends to be faster than secure (HTTPS) connections because of the encryption overhead in HTTPS. The difference becomes insignificant as more data processing happens.</P>
                <P>If security is not a concern and performance is supercritical then using HTTP can give some performance gain. I will not recommend doing this because of the following reasons.</P>
                <ol>
                    <li>Browsers are getting more and more restrictive towards HTTP. Firefox released HTTPS-Only Mode in version 83.</li>
                    <li>Chrome planning to assign an insecure badge to sites not using HTTPS. This will be very bad for branding.</li>
                    <li>The performance gain will be very insignificant in front of the security issues and losing the user's trust.</li>
                    <li>Using a mix of HTTP and HTTPS can open security loopholes for the encrypted requests as well.</li>
                </ol>
                <h2>How to improve HTTPS performance?</h2>
                <P>Making a secure connection to the server is a tedious task. Client and Server both go through numerous steps before start sharing data with each other.</P>
                <P>Transport Layer Security(TLS) is an encryption protocol used to encrypt and decrypt data over HTTP protocol. Both HTTP and TLS have come a long way to provide more secure and performant server connections.</P>
                <h3>TLS 1.2 vs TLS 1.3</h3>
                <P>TLS 1.2 which was released in 2008 has served the web for a very long time. It has few security and performance issues which were taken care of in the new shiny TLS 1.3.</P>
                <P>TLS 1.3 is well supported in all major browsers and as per <a href="https://caniuse.com/tls1-3" target="_blank" rel="noopener noreferrer">caniuse.com</a> data, more than 90% of the users have TLS 1.3 support.</P>
                <P>TLS 1.3 comes with lots of improvements from its previous versions. It dropped support for many weaker encryption algorithms. Tries to achieve perfect forward secrecy, which is a process of changing key for each session so that a compromised key will not affect other sessions.</P>
                <P>For performance, TLS 1.3 made two major changes over TLS 1.2</P>
                <ul>
                    <li>
                        Dropped a complete one round trip to establish a server connection.
                    </li>
                </ul>
                <img className={`${styles.image} ${styles.http3Style}`} src="/http2vshttp3.jpg" alt="Http2 vs HTTP3" />
                <ul>
                <li>Zero Round Trip Time (0-RTT)</li>
                </ul>
                <P>0-RTT reduces one more round trip for repeat users by using the previously captured information during the initial connection. 0-RTT is prone to replay attacks which can be solved with proper precautions.</P>
                <P>Because of the security issues with 0-RTT, It is not well supported in major browsers and servers.</P>
                <P>TLS 1.3 is supported in all major browsers and servers. It also has out of the box support in a few CDN's like Akamai and Cloudflare.</P>
                <Tracker id="50" name="how to make the most out of http2"/>
                <h3>How to make the most out of HTTP/2</h3>
                <P>HTTP/2 was a major upgrade over its previous version. It has many optimization features that can significantly boost web performance.</P>
                <P>The major focus on HTTP/2 design was to make full use of available network bandwidth. It multiplexes requests on a single connection. Browser's limit around the number of parallel requests on a domain is not valid on HTTP/2. There is no need to create multiple domains to bypass browser restrictions on parallel requests on a single domain.</P>
                <P>HTTP/2 released server push where the server can send multiple responses for a single request. It was a great idea as in most cases webpages are aware of what will be the next request. Server push has the limitation that it is not aware of browser cache and can send data even when It can be served from the browser cache. There are workarounds but they are not very reliable and tough to put in place.</P>
                <P>Server push was not very well adopted because of its limitations. In November 2020 browsers and servers planned to remove support for server push.</P>
                <P>By enabling HTTP/2 most of its features are out of the box available without doing anything.</P>
                <ol>
                    <b><li>One connection per domain</li></b>
                </ol>
                <P>In HTTP/2 messages are broken into frames and sent over the network stream. This makes multiplexing of requests possible on a single domain. This means only one connection is required for a domain to transfer all data.</P>
                <P>The above statement is not fully correct. There are edge cases where multiple connections are required on the same domain. HTTP/2 session reuse does not happen across credentialed and uncredentialed requests. Fonts will always create a new connection as they are downloaded as an uncredentialed request.</P>
                <ol>
                    <b><li>Headers compression</li></b>
                </ol>
                <P>Every request has some metadata associated with it. Headers are one such metadata. In previous versions, headers are passed as plain text which sometimes occupies a few KBs of the request payload. In HTTP/2 headers are compressed using the HPACK algorithm.</P>
                <ol>
                    <b><li>head-of-line blocking</li></b>
                </ol>
                <P>HTTP/1.x has the limitation that responses can be received only one after another. This causes responses to queue and waits for their turn before usage.</P>
                <P>In HTTP/2 this got fixed because of the multiplexing approach. The response is ready for consumption as soon as it completes.</P>
                <P>HTTP/2 fixes head-of-line blocking when receiving the response but It still has another kind of head-of-line blocking which is fixed in HTTP/3 protocol.</P>
                <h2>Prepare for the new hotness HTTP/3</h2>
                <P>All HTTP protocols before HTTP/3 uses TCP for communication as it was more reliable. TCP ensures to send an acknowledgment for every packet and guarantees packet order. This makes request and response very reliable at the cost of some performance limitations.</P>
                <P>HTTP/2 faces head-of-line blocking on the unreliable network when a packet fails to deliver. This is because of how TCP works. If a packet fails than all subsequent packets even from other request needs to wait as they are part of a single multiplex connection. This becomes serious as HTTP/2 multiplex many requests and all get blocked because of a single packet failure.</P>
                <P>let we have 3 responses A, B, and C each consists of 5 data packets 1 to 5.</P>
                <img className={`${styles.image}`} src="/headoflineblocking.jpg" alt="Head of line blocking http/2" />
                <P>In HTTP/2, if the B1 packet fails then all A, B, and C responses will fail to deliver.</P>
                <P>In HTTP/3, if the B1 packet fails only the B response will block, and the rest A and C will deliver as expected.</P>
                <P>HTTP/3 solves this HTTP/2 issue of head-of-line blocking by using UDP instead of TCP.</P>
                <P>On a reliable network, HTTP/3 might not have any benefit over HTTP/2 but on an unreliable network (like a mobile network) HTTP/3 will shine.</P>
                <P>HTTP/3 does not have very good browser support for now. Chrome support for HTTP/3 will land in version 85. Server-side support is also improving. Nginx and Node have already released HTTP/3.</P>
                <Tracker id="75" name="before ECC"/>
                <h2>Elliptical Curve Cryptography(ECC) Certificates</h2>
                <P>Certificate Authority(CA) issues domain certificates to individuals and organizations after proper verification. The verification steps can differ from one CA to another. Free CA like letsencrypt have very basic verification steps while paid services like DigiCert have more robust verification steps.</P>
                <P>CA provides different kinds of certificates based on the verification steps and support for different encryption algorithms. For some certificates browsers mentions the organization name with the secure badge, this adds more trust to the customers.</P>
                <P>One very secure and fast algorithm is elliptical curve cryptography (ECC). ECC certificates provide strong security and fast encryption and decryption. The speed of encryption/decryption depends upon the size of the key and mathematical computation around it. ECC certificates have both of them in the limit. When the RSA key size starts from 1024 bit, the ECC key size starts from 160 bit.</P>
                <P>For your next certificate prefer to buy an ECC certificate over others.</P>
                <P>Do not forget to check browser support for the ECC certificate. It is not very well supported in legacy browsers like IE11</P>
                <h2>Online Certificate Status Protocol (OCSP) stapling</h2>
                <P>Browsers download a certificate from the server and to verify the authenticity of the certificate it recursively downloads certificates used to sign the current one until finds the root certificate.</P>
                <P>To avoid this entire process server can query the OCSP responder. OCSP responder is the Certificate Authority server which provides a digital signature to verify the certificate. The server can cache the query response and now the browser will have to only verify the CA signature.</P>
                <P>OCSP stapling has good server and browser support but the most popular AWS ELB and ALB lack behind in OCSP stapling support.</P>
                <h2>Conclusion</h2>
                <ol>
                    <li>Prefer to use TLS 1.3 for strong and fast encryption and decryption of data over the network.</li>
                    <li>Prepare for HTTP/3 It will be around the corner in the next few months.</li>
                    <li>Prefer ECC certificates they are fast and more secure than RSA or SHA based algorithms.</li>
                    <li>OCSP stapling is a very simple and effective web performance optimization.</li>
                </ol>
                <Tracker id="100" name="After conclusion"/>
                <Author link="/" heading="WRITTEN BY" author="Ashutosh Sharma" description="Engineering Manager @ Housing.com. I love learning and teaching. Web performance enthusiast."/>
                <div className={styles.linking}>
                    <Link href='/blogs/lighthouse-performance-auditing-things-you-should-know'><a>Lighthouse: Expectation vs. Reality &rarr;</a></Link>
                </div>
                <Comments />
            </BlogContent>
            <Follow />
        </div>)
}

