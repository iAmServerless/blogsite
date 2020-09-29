import Head from 'next/head'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark as dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import themeStyles from '../../styles/theme.module.css'
import utilStyle from './../../styles/utils.module.css'
import styles from './blog.module.css'
import BlogTop from '../../components/blogTop'
import BlogContent from '../../components/blogContent'
import P from '../../components/paragraph'
import Follow from '../../components/followMe'

let serialCodeString = `
 let numberOfTests = 5;
 let url = 'https://housing.com';
 let resultsArray = [];
 (async function tests() {
  for(let i =1;i <= numberOfTests; i++) {
   let results = await launchChromeAndRunLighthouse(url, opts)
   let score = results.categories.performance.score*100;
   resultsArray.push(score);
  }
  console.log(median(resultsArray));
  console.log(resultsArray);
 }());
`

let parallelCodeString = `
const exec = require('child_process').exec;
const lighthouseCli = require.resolve('lighthouse/lighthouse-cli');
const {computeMedianRun as median} = require('lighthouse/lighthouse-core/lib/median-run.js');

let results = [], j=0;
for (let i = 0; i < 5; i++) {
exec(\`node \${lighthouseCli} 
 https://housing.com 
 --output=json\`, (e, stdout, stderr) => {
   j++;
   results.push(JSON.parse(stdout).categories.performance.score);
   if(j === 5) {
    console.log(median(results));
    console.log(results);
    }
  });
}
`


export default function Home() {
    return (
        <div className={`${themeStyles.background} ${themeStyles.textColor} ${styles.removePadding}`}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="content-type" content="text/html; charset=utf-8"></meta>
                <title>Google lighhouse auditing - things you should know before believing the results</title>
                <meta name="description" content="believing lighthouse results needs lot more understanding about how your reports are generated. Any action you plan based on suggestion from lighthouse report needs through understanding of how it will impact your web application" />
                <meta name="keywords" content="lighthouse auditing, performance scores, lighthouse report, lighthouse limitations cpu, memory issues, lighthouse-ci server and web.dev" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://ashu.online/lighthouse-performance-auditing-things-you-should-know" />
            </Head>
            <BlogTop imgSrc='/lighthouse.png' alt='hero lighthouse score image in background' />
            <BlogContent>
                <P>
                    When someone starts looking for optimizing the performance of their web application they immediately come across this tool called lighthouse by google.</P>
                <P>
                    Lighthouse is an awesome tool to quickly find out the performance issues in your web application and list down all the actionable items. This list helps you quickly fix the issues and see the green color performance score on your lighthouse report. With time lighthouse has become a defacto standard for web performance measurement and Google is pushing it everywhere from chrome dev tools to browser extensions, page speed insight to web.dev, and even webmaster search console. Anywhere if you talk about performance you will see the lighthouse auditing tool.

      </P>
                <P>
                    This article will cover the usage of lighthouse and its strengths and weaknesses. Where to trust it and where to not. Google has eagerly advertised all the benefits of the tools and integrated it in all of its other major tools like search console, page speed insight, and web.dev. This directly or indirectly forces people to improve their score sometime at the cost of something important. I have seen many teams do weird things to see green ticks in their lighthouse report without knowing the exact impact of it on their conversion and usability.
      </P>
                
                    <ul>
                        <li>
                            <a className={styles.linkNav} href="#issues-to-be-solved">Issues which needs to be solved</a>
                            <ul>
                                <li><a className={styles.linkNav} href="#cpu-power-issue">CPU power issue</a></li>
                                <li><a className={styles.linkNav} href="#application-behavior">Lighthouse covers only the most generic issues and does not understand your application behavior</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className={styles.linkNav} href="#score-inconsistency-issues">Solving the score consistency issue</a>
                            <ul>
                                <li><a className={styles.linkNav} href="#using-hoisted-service">Using hoisted services</a></li>
                                <li><a className={styles.linkNav} href="#self-hoisted-lighthouse-instance">Self hoisted lighthouse instance</a></li>
                                <li><a className={styles.linkNav} href="#web-vitals">Integrating Web Vitals</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className={styles.linkNav} href="#considering-lighthouse-suggestions">Considering lighthouse suggestions</a>
                            <ul>
                                <li><a className={styles.linkNav} href="#intial-render">How fast page rendered (FCP, LCP, Speed Index)</a></li>
                                <li><a className={styles.linkNav} href="#page-interactivity">Page Interactivity (TBT, TTI)</a></li>
                                <li><a className={styles.linkNav} href="#stability">Stability (CLS)</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className={styles.linkNav} href="#conclusion">Conclusion</a>
                        </li>
                    </ul>
                <h2 className={utilStyle.gradient2} id="issues-to-be-solved" className={utilStyle.gradient2}>Issues which needs to be tackled</h2>
                <h3 className={utilStyle.gradient2} id="cpu-power-issue" className={utilStyle.gradient2}>A) CPU power issue</h3>
                <P>
                    Lighthouse has made it very easy to generate your site performance report. Just open your site, go to dev-tools click Audit Tab and run the test. Boom you got the results. But wait can you trust the score you just got the answer to this is a big no. Your results vary a lot when they are executed on a high-end machine vs when executed on a low-end machine because of different available CPU cycles to the lighthouse process. You can check the CPU/Memory power available to the lighthouse process during the test at the bottom of your lighthouse report.
                </P>
                <br />
                <img className={`${styles.image} ${styles.lighthouse_meta_data}`} src="/lighthouse_screen_shot.png" alt="lighthouse meta data" />
                <P>
                    The Lighthouse team has done a great job in throttling the CPU to bring computation cycles down to an average of most used devices like MOTO G4 or Nexus 5X.
                    But on a very high-end machine like new fancy MacBook Pro throttling CPU cycles does not drop CPU cycles to the desired level.
                </P>
                <h4>For example</h4>
                <P>
                    let a high-end processor like intel i7 can execute 1200 instructions in a sec by throttling it 4x only 300 instructions will get executed. Similarly, a low-end processor like intel i3 can only execute 400 instructions in a sec and by throttling it to 4x only 100 instructions can get executed.
                </P>
                <P>
                    It means everything on intel i7 or any other higher-end processor will be executed faster and we will see much better scores. One of the critical matrices in the lighthouse is TBT (Total Blocking Time) which depends heavily on CPU availability. High CPU availability ensures a fewer number of long tasks (tasks which take more than 50ms) and less the number of long tasks lower is the TBT value and higher is the performance score.
                </P>
                <P>This is not the only problem, lighthouse scores can differ between multiple executions on the same machine. This is because lighthouse or in fact any application cannot control the CPU cycles as this is the job of the operating system. The operating system decides which process will get how many computation cycles and can reduce or increase CPU availability based on a number of factors like CPU temperature, other high priority tasks, etc.
                </P>
                <P>
                    Below are the lighthouse scores on the same machine when the lighthouse is executed 5 times for  housing.com once serially and once in parallel.  When executed serially results are completely different than when run in parallel. This is because available CPU cycles from the operating system get distributed to all 5 processes when run in parallel and are available to a single process when executed in serial.
                </P>
                <h4 className={utilStyle.gradient2}>When the lighthouse is executed 5 times on the housing home page serially.</h4>
                <SyntaxHighlighter language="javascript" style={dark} customStyle={{ fontSize: '16px' }}>
                    {serialCodeString}
                </SyntaxHighlighter>
                <P>
                    Median - 84
                </P>
                <P>
                    [ 83, 83, 84, 84, 85]
                </P>
                <P>
                    Results are pretty much consistent.
                </P>
                <h4 className={utilStyle.gradient2}>When the same test is executed in parallel.</h4>
                <SyntaxHighlighter language="javascript" style={dark} customStyle={{ fontSize: '16px' }}>
                    {parallelCodeString}
                </SyntaxHighlighter>
                <P>
                    Median -  26
                </P>
                <P>
                    [ 22, 25, 26, 36, 36 ]
                </P>
                <P>
                    You can clearly see the difference in scores  between the two approaches.
                </P>

                <h2 className={utilStyle.gradient2} className={utilStyle.gradient2} id="application-behavior">B) Lighthouse covers only the most generic issues and do not understand your application behavior</h2>
                <P>
                    This is the most complex issue which I see with lighthouse reporting. Every application is different and optimizes the available resource where it sees the best fit.
                </P>
                <P>
                    The best example I see in this case is Gmail. Gmail prioritizes emails over any other things and mails get interactive as soon as the application loads in the browser. Other applications like Calendar, Peak, Chat, Tasks keep loading in the background. If you will open the dev tools when Gmail is loading you might get a heart attack seeing the number of requests it makes to its servers. Calendar, Chat, Peak, etc adds too much to its application payload but Gmail’s entire focus is on emails. Lighthouse fails to understand that and gives a very pathetic score to Gmail applications.
                </P>
                <P>
                    There are many similar applications like Twitter, Revamped version of Facebook which has worked extensively on performance but lighthouse mark them as poor performance applications.
                </P>
                <P>
                    All of these companies have some of the best brains who very well understand the limitations of the tool so they know what to fix and what aspects to be ignored from lighthouse suggestions. The problem is with organizations who do not have resources to and time to explore and understand these limitations. Search google for “perfect lighthouse score” and you will find 100’s of blogs explaining how to achieve 100 on the lighthouse. Most of them have never checked other critical metrics like conversion or Bounce rate.
                </P>
                <P>
                    One big issue with google’s integration of lighthouses is that these tools are mostly used by non-technology people. Google search console which helps in analysing the sites position in google search result is mostly used by marketing teams. Marketing teams report performance issues reported in the search console to higher management who do not understand the limitations of the tool and force the tech team to improve performance at any cost (as it may bring more traffic). Now the tech team has two options Either to push back and explain limitations of the tool to higher management which happens rarely or take bad decisions that may impact other critical metrics like conversion, bounce rate, etc. I know many large companies lack processes to regularly check these crucial metrics.
                </P>
                <P>
                    The only solution I see to this issue is to measure more and regular. Define core metrics your organization is concerned about and prioritize them properly. Performance has no meaning if it is at the cost of your core metrics like conversion.
                </P>
                <h2 className={utilStyle.gradient2} id="score-inconsistency-issues">Solving the score inconsistency issue</h2>
                <P>
                    Inconsistency in lighthouse scores cannot be solved with 100% accuracy but can be controlled to a greater extent. The three possibilities I see are
                </P>
                <h3 className={utilStyle.gradient2} id="using-hoisted-service">A) Using hoisted services</h3>
                <P>
                    Cloud services are again an awesome way to test your site quickly and get a basic performance idea. Some of the google implementations like page speed insight tries to limit the inconsistency by including lighthouse lab data and field data (google tracks the performance score of all sites you visit if you allow Google to sync your history). Webpagetest queue the test request to control CPU cycles.
                </P>
                <P>But again they also have their own limitations.</P>
                <ul>
                    <li>
                        Cannot make all tests serial as this will increase waiting time for tests. Making them parallel on different machines will increase infra cost to infinity. Parallel execution on the same machine will result in uneven CPU cycle distribution.
                    </li>
                    <li>
                        Different providers have different throttling settings like some prefer to not throttle CPU when executing tests for the desktop site. Which may or may not be a perfect setting for most people.
                    </li>
                    <li>
                        Services need to have servers all around the world (webpagetest already has this feature) to understand the latency behavior in your target location.
                    </li>
                </ul>
                <P>Results of 10 tests of a single page on web.dev  you will be amazed to see the delta in between min and max score. We usually prefer to take the median of all results or remove the first and last 3 outliers and take avg of the remaining 4 tests.</P>
                <h3 className={utilStyle.gradient2} id="self-hoisted-lighthouse-instance">B) Self hoisted lighthouse instance</h3>
                <P>
                    Lighthouse team has again done a great job here by providing a CI layer for self hoisting. The product is <a href="https://github.com/GoogleChrome/lighthouse-ci" target="_blank">lighthouse CI</a>.
                This is an amazing tool that can be integrated with your CI Provider (Github Actions, Jenkins, Travis, etc) and you can configure it as per your needs. You can check the performance diff between two commits, Trigger lighthouse test on your new PR request.  Create a docker instance of it, this is a way where you can control CPU availability to some extent and get consistent results. We are doing this at housing.com and pretty much happy with the consistency of results.
                </P>
                <P>
                    The only problem at present I see with this approach is It is too complex to set up. We have wasted weeks to understand what exactly is going on. Documentation needs a lot of improvement and the process of integration should be simplified.
                </P>
                <h3 className={utilStyle.gradient2} id="web-vitals">C) Integrating Web Vitals</h3>
                <P>
                    Web vitals are core performance metrics provided by chrome performance api and have clear mapping with lighthouse. It is used to track field data. Send data tracked to GA or any other tool you use for that sake. We are using <a href="https://zizzamia.github.io/perfume/" target="_blank">perfume.js</a> as it provides more metrics we are interested in along with all provided by web vitals.
                </P>
                <P>
                    This is the most consistent and reliable among all the other approaches as It is the average performance score of your entire user base. We are able to make huge progress in optimizing our application by validating this data.
                </P>
                <P>Metrics we are tracking</P>
                <br />
                <img className={`${styles.image} ${styles.perf_matrics}`} src="/metrics.png" alt="performance metrics tracked at housing" />
                <br />
                <P>
                    We worked on improving our Total Blocking Time(TBT) and Largest Contentful Paint(LCP) after identifying problem areas
                </P>
                <br />
                <img className={`${styles.image} ${styles.perf_matrics}`} src="/tbt.png" alt="total blocking time improvement at housing.com" />
                <br />
                <img className={`${styles.image} ${styles.perf_matrics}`} src="/lcp.png" alt="improvement in largest contentful paint graph housing.com" />
                <P>
                    The above improvements were only possible because we were measuring things. Measuring your critical metrics is the only way to maintain the right balance between performance, conversion etc. Measuring will help you know when performance improvement is helping your business and when it is creating problems.
                </P>
                <P>
                    I know developers apply all sorts of tricks to improve their lighthouse score. From lazy loading offscreen content (We ourselves did this without measuring its impact but now we have a plan to run experiments around it) to delaying some critical third-party scripts. In most cases, developers do not measure the impact of their change on user experience or the users lost by the marketing team.
                </P>
                <h2 className={utilStyle.gradient2} id="considering-lighthouse-suggestions">Considering lighthouse suggestions</h2>
                <P>Lighthouse performance scores mostly depend upon the three parameters</P>
                <ol>
                    <li><a className={styles.linkNav} href="#intial-render">How fast page rendered (FCP, LCP, Speed Index)</a></li>
                    <li><a className={styles.linkNav} href="#page-interactivity">Page Interactivity (TBT, TTI)</a></li>
                    <li><a className={styles.linkNav} href="#stability">Stability (CLS)</a></li>
                </ol>
                <P>
                    To improve your performance score, the lighthouse report provides tons of suggestions. You need to understand the suggestions and check how feasible they are and how much value those suggestions will bring to your website.
                </P>
                <P>
                    I will take a few suggestions from each category of lighthouse report and see where they will bring benefit and where they will cause harm.
                </P>
                <h3 className={utilStyle.gradient2} id="intial-render">How fast page rendered (FCP, LCP, Speed Index)</h3>
                <P>
                    Lighthouse suggests optimizing images by using modern image formats such as webp or avif and also resizing them to the dimension of the image container. This is a very cool optimization and can have a huge impact on your LCP score. You can enhance it further by preloading first fold images or serving them via server push.
                </P>
                <P>
                    To build a system where images are resized on the fly or pre resized to multiple possible dimensions on upload is a tedious task. In both ways, depending upon your scale you might need to take a huge infra burden that needs to be maintained and also continuously invest.
                </P>
                <P>
                    A better approach is to implement it on a single page for a limited image and track your most critical metrics like conversion, bounce rate, etc. And if you are really happy with the ROI then take it live for all of your images.
                </P>
                <h3 className={utilStyle.gradient2} id="page-interactivity">Page Interactivity (TBT, TTI)</h3>
                <P>
                    Lighthouse recommends reducing your Javascript, CSS size as much as possible. Javascript or CSS execution can choke the main thread and CPU will be unavailable for more important stuff like handling user interaction. This is a fair idea and most people understand the limitation of js being single-threaded.
                </P>
                <P>
                    But Google took the wrong path here. In the upcoming version, the lighthouse will start suggesting the replacement of larger libraries with their smaller counterparts. There are multiple problems with this approach.
                </P>
                <ol>
                    <li>
                        <P>
                            Most libraries get larger because they solve more corner cases and feature requests. Why do people say webpack is tough because it handles so many edge cases that no other bundler handles. Imagine if webpack did not exist then half of us would have stuck in understanding the different kinds of module systems js supports. Similarly, the popular frontend frameworks are large because they handle too many things, from backward compatibility to more bugs. Jumping to a new library may cause issues like weak documentation, bugs, etc. So if you plan to pick this item get ready to have an expert developer team.
                        </P>
                    </li>
                    <li>
                        <P>
                            This is purely my thought but I strongly believe google will not recommend the replacement of highly popular libraries with their smaller counterpart. It is highly unlikely that Google will recommend Preact to react because of the emotional attachment community has with the React framework. Doing this is unprincipled and unfair with the maintainers of projects whose community is not aggressive in nature.
                        </P>
                    </li>
                    <li>
                        <P>
                            Google itself does not follow rules created by themselves. Most of the google products load way too much of Javascript. A company which has the best resources around the world has never focused on their lighthouse score but wants the entire world to take it seriously. There seems to be a hidden agenda of google behind this. Faster the web better is the ad revenue of google and lesser is the crawl infra requirement can be some of the benefits.
                        </P>
                    </li>
                </ol>
                <P>
                    Before taking any step to reducing javascript on your page like lazy loading off-screen components please calculate its impact on your primary metrics like conversion, user experience, etc.
                </P>
                <h3 className={utilStyle.gradient2} id="stability">Stability (CLS)</h3>
                <P>
                    Every website must try to avoid any kind of layout shift which may cause issues in user experience. But there will be cases where you will not have many options to avoid CLS.
                </P>
                <P>
                    Let a website want to promote app downloads to users who have already not installed the app. Chrome has added support to detect if your app is already installed on the device(using getInstalledRelatedApps API) but this information is not available to the server on the first request. What the server can do is make a guess and decide if it needs to append the app download banner on the page or not. If the server decides to add it and the app is already present on the device, the Download banner needs to be removed from the page and similarly when the server decides to not include the download banner and the app is already not installed on the device it will be appended to the DOM on the client which will trigger Cumulative layout shift(CLS).
                </P>
                <P>
                    To avoid CLS you will remove the banner from the main layer of the page and show it as a modal, floating element or find some other way to show it, but what if you get maximum downloads when the banner is part of your page. Where will you compromise?
                </P>
                <P>
                    On the funny note, I think most of the people have already experienced CLS on the google search result page.
                </P>
                <br />
                <P>
                <img className={`${styles.image} ${styles.clsImage}`} src="/cls.gif" alt="google search result cls gif image" />
                </P>
                <br />
                <h2 className={utilStyle.gradient2} id="conclusion">Conclusion</h2>
                <ol>
                    <li>Lighthouse is an awesome performance tool built by Google and can help you improve your website performance.</li>
                    <li>There are multiple issues related to how lighthouse work and the consistency of the results.</li>
                    <li>Devices with different configurations can give completely different scores so it is important to stick to a single device configuration while running a lighthouse.
</li>
                    <li>The same device can give different scores based on how much CPU is available to the lighthouse process during the test.
</li>
                    <li>Using cloud solutions like web.dev is a better solution to get consistent results than running a lighthouse on your local machine.</li>
                    <li>Running self hoisted service is better than cloud solutions because results in cloud solutions can get inconsistent based on the amount of traffic they are handling. Also, lighthouse settings can be better manipulated in a self-hosted environment.</li>
                    <li>A self-hosted environment requires expertise and time because of limited resources and documentation but is very scalable and integrates very well with most popular CI providers.</li>
                    <li>Tracking real user data is the most reliable approach to track web performance. Google web vital or perfume.js is some of the lovely libraries to track real user data.</li>
                    <li>Define critical metrics to your website like conversion, bounce rate, user experience, etc. Plan any optimization suggestion from the lighthouse after tracking the impact of it on your critical metrics.</li>
                    <li>Never do premature optimization for the sake of a high lighthouse score. Simple lazy loading of offscreen components to reduce javascript size in some cases can drastically reduce user experience so prefer caution while making such changes.</li>
                </ol>
            </BlogContent>
            <Follow />
        </div>
    )
}
