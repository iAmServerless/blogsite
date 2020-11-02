import Head from 'next/head'
import themeStyles from '../../styles/theme.module.css'
import styles from './blog.module.css'
import BlogTop from '../../components/blogTop'
import BlogContent from '../../components/blogContent'
import P from '../../components/paragraph'
import Follow from '../../components/followMe'

let title = "Optimize your DNS Resolution today, don't ignore the first thing that happens on the web | Ashutosh Sharma | Housing.com"
let description = "DNS resolution is the first thing that happens on the web. Optimizing it can significantly reduce the DNS resolution latency. There are simple tricks to reduce latency like fixing your Time to Live(TTL), Playing with name servers, using CDN, etc."

export default function Dns() {
    return (
        <div className={`${themeStyles.background} ${themeStyles.textColor} ${styles.removePadding}`}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="https://ashu.online/dns.jpeg" />
                <meta property="og:url" content="https://ashu.online/blogs/optimize-dns-resolution-for-fast-website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ashuanindian" />
                <meta name="twitter:creator" content="@ashuanindian" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://ashu.online/dns.jpeg" />
                <meta property="og:site_name" content="Ashutosh Sharma Blogs | ashu.online" />
                <meta name="twitter:image:alt" content="DNS Performance optimization" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="dns resolution, Time to Live (TTL), A record, AAAA record, CNAME record, route53, custom name server, CDN, root servers, authoritative name servers" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://ashu.online/blogs/optimize-dns-resolution-for-fast-website" />
            </Head>
            <BlogTop imgSrc='/dns.jpeg' alt='hero DNS resolution image in the background' heading="Optimize your DNS Resolution today, don't ignore the first thing that happens on the web" subHeading='Optimize the most common missed opportunity to keep an edge over your competitors.'/>
            <BlogContent>
                <P>
                DNS resolution is the first thing that happens when a request is made to a remote server. It is a process of finding the computer-friendly address of the remote server using a human-friendly domain name.
                </P>
                <P>
                There are few performance improvement possibilities like perfect cache invalidation time. Preferring A record over CNAME. But before all these let's understand how DNS resolution actually works.
                </P>
                <ol>
                    <li>A network request is made to the server using its domain name.</li>
                    <li>The browser first checks its DNS cache, if present use the IP address else asks Operating System.</li>
                    <li>Operating System checks it's cache (and few more things like host file) if present return it else asks resolver.</li>
                    <li>Resolvers are ISP(Internet Service Provider) servers but can be configured to any other DNS service provider.</li>
                    <li>Resolvers check if the domain is in its cache return it else look for root servers.</li>
                    <li>Root servers are top in the DNS hierarchy and know the address of TLDs(top-level domain like .com, .net, .org, etc.) servers.</li>
                    <li>Based on the type of domain, Root servers direct resolver to corresponding TLD servers. For a .com domain, root servers direct to .com TLD servers.</li>
                    <li>TLD servers know the address of name servers.</li>
                    <li>Name servers know the real IP address of the requested domain.</li>
                    <li>The Browser receives the resolved IP address.</li>
                </ol>
                <P>
                Ahh too confusing and too much to remember. Let's keep it simple and know what is in our control and find the scope of performance improvements.
                </P>
                <h2>DNS Management Tools</h2>
                <P>A registrar is a place where one buys a domain. The registrar provides name servers and a few other DNS management tools.</P>
                <h3>Example Registrars and DNS management tools</h3>
                <ol>
                    <li>Amazon Web Service(AWS) - Route 53</li>
                    <li>Google Cloud - domains.google.com</li>
                </ol>
                <h3>The main job of DNS management tools.</h3>
                <ol>
                    <li>Provide name servers details to TLDs</li>
                    <li>Add domain validation and authorization config for third parties.</li>
                    <li>Define cache invalidation time or <strong>Time To Live</strong>(TTL). It's a duration for which resolvers, browsers, etc can cache IP address in their cache.</li>
                    <li>Define how to resolve a particular request. For mails check MX record. For HTTP/HTTPS check A, AAAA, or CNAME record.</li>
                </ol>
                <h2>DNS Performance Optimization Opportunities</h2>
                <h3>Increase cache invalidation time</h3>
                <P>Increasing cache invalidation time will ensure that the domain IP addresses will be served from the nearest cache. This will result in low latency DNS resolution.</P>
                <P>This will be a problem in cases where domain to IP mapping is frequently changed.</P>
                <P>To handle such cases follow these steps.</P>
                <ol>
                    <li>Set TTL to 0 to avoid the cache of any new request.</li>
                    <li>Wait for the previous TTL value time to ensure the previous cache is invalidated.</li>
                    <li>Make the new changes.</li>
                </ol>
                <P>This will fix any downtime possibilities from any known changes. But what if the server crashed or something unexpected happened. For such cases keeping a static IP and assigning it to a new server will help.</P>
                <P>Let's look at the TTL value of some popular domains.</P>
                <ul>
                    <li>apple.com - 60 min</li>
                    <li>Microsoft - 60 min</li>
                    <li>Booking.com - 24 hrs</li>
                    <li>google.com - 5 min</li>
                    <li>indiatimes.com - 20 min</li>
                    <li>godaddy.com - 10 min</li>
                    <li>azure.microsoft.com - 60 min</li>
                </ul>
                <P>Increasing TTL is a tradeoff between availability and performance. Controlling availability with high TTL is possible but needs extra effort and care.</P>
                <h3>Use A or AAAA record wherever possible in place of CNAME</h3>
                <P>CNAME or Canonical Name is like recursion where one domain resolves to another domain. The DNS resolution algorithm keeps looking until it finds the real IP address.</P>
                <P>In most cases replacing CNAME will not be possible because of no control over the resolved IP address. This rule is only applicable for cases where IP address is known but still, CNAME is preferable due to unmanageable DNS records. DNS records if not maintained properly becomes unmanageable in most mid to large-scale organizations.</P>
                <h3>Use CDN which uses their own name servers.</h3>
                <P>CDN works in two ways.</P>
                <ol>
                    <li>Ask to replace registrar name servers with their name servers.</li>
                    <li>Ask to add CNAME for domain resolution.</li>
                </ol>
                <P>Both approaches have their own Pros and Cons. The first one is good for fast DNS resolution. The second one gives more flexibility and control to the maintainer.</P>
                <P>CDN has other limitations they are yet not equipped to serve dynamic content. There is some development in this area like using lambda on the edge(AWS) but still, there is a long path to cover.</P>
                <h3>Use custom name servers (only for large scale applications)</h3>
                <P>The purpose of name servers is to provide a real IP address that corresponds to a domain. Using custom logic a domain can be resolved to a different IP each time it receives a request.</P>
                <P>CDN uses this approach to serve content from the nearest host to the user but they can't be used for dynamic content.</P>
                <P>Using custom name servers to resolve IP addresses based on the region can significantly reduce latency.</P>
                <P>Assume an organization serves its customer on four continents (North America, Europe, Asia, and Australia).
                </P>
                <P>Organization custom name servers resolve the domain to servers</P>
                <ul>
                    <li>In California for users in North America</li>
                    <li>In Paris for users in Europe</li>
                    <li>In Mumbai for users in Asia</li>
                    <li>In Sydney for users in Australia</li>
                </ul>
                <P>Now people in North America can get their content directly from servers in California and people in India get content from Mumbai. Data belongs to a region can be stored along with the region and fallbacks to other regions.</P>
                <P>This gives a lot of flexibility for dynamic logic without any compromising on performance.</P>
                <P>There are lots of complexities in this approach. One problem is database sharding keeping a region's data close to it but still able to serve content from other shards.</P>
                <P>Many large scale organizations use this approach to distribute traffic and serve the request quickly.</P>
                <h2>Conclusion</h2>
                <P>Improving DNS resolution can have a huge impact on the performance of a site. But every possible optimization has some cost.</P>
                <ol>
                    <li>Increasing Time to Live(TTL) reduces latency but impact availability.</li>
                    <li>CNAME is not always replaceable with the corresponding A record.</li>
                    <li>CDN's are not yet ready for dynamic content.</li>
                    <li>Custom name servers are hard to put in place.</li>
                </ol>
                <p><strong>Figure out appetite for performance at your organization and accordingly tune DNS settings.</strong></p>
            </BlogContent>
            <Follow />
        </div>)
}

