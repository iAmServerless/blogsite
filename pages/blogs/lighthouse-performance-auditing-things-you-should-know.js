import Head from 'next/head'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark as dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import themeStyles from '../../styles/theme.module.css'
import styles from './blog.module.css'
import BlogTop from '../../components/blogTop'
import BlogContent from '../../components/blogContent'
import P from '../../components/paragraph'

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
                <meta charset="utf-8" />
                <meta http-equiv="content-type" content="text/html; charset=utf-8"></meta>
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
                    When someone starts looking for optimizing the performance of their web application they immediately come across this tool called lighthouse by google. Lighthouse is an awesome tool to quickly find out the performance issues in your web application and list down all the actionable items. This list helps you quickly fix the issues and see green color performance score on your lighthouse report. With time lighthouse has become a defacto standard for web performance measurement and google is pushing it everywhere from chrome devtools to browser extensions, page speed insight to web.dev and even webmaster search console. Anywhere if you talk about performance you will see lighthouse.
      </P>
                <P>
                    This article will cover the usage of lighthouse its strength and weakness. Where to trust it and where to not. Google has eagerly advertised all the benefits of the tools and integrated it in all of its other major tools like search console, page speed insight and web.dev. This directly or indirectly forces people to improve their score sometime at the cost of something important. I have seen many teams do weird things to see green ticks in their lighthouse report without knowing the exact impact of it on their conversion and usability.
      </P>
                <P>
                    Things I will cover in this article.
                     <ul>
                        <li>Issues which needs to be solved</li>
                        <li>Solving the score consistency issue.</li>
                    </ul>
                </P>
                <h2>Issues which needs to be tackled</h2>
                <h3>A) CPU power issue</h3>
                <P>
                    Lighthouse has made it very easy to generate your site performance report. Just open your site, go to devtools click Lighthouse Tab and run test. Boom you got the results. But wait can you trust the score you just got the answer to this is a big no. Your results vary a lot when they are executed on a high end machine vs when executed  on a low end machine because of different available CPU cycles to lighthouse process. You can check the CPU/Memory power available to lighthouse process during the test at the bottom of your lighthouse report.
      </P>
                <img className={`${styles.image} ${styles.lighthouse_meta_data}`} src="/lighthouse_screen_shot.png" alt="lighthouse meta data" />
                <P>
                    The Lighthouse team has done a great job in throttling the CPU to bring computation cycles down to an average of most used devices like MOTO G4 or Nexus 5X. But on a very high end machine like new fancy MacBook Pro throttling CPU cycles does not drop CPU cycles to the desired level.
      </P>
                <P>
                    <h4>For example</h4>
      let a high end processor like intel i7 can execute 1200 instructions in a sec by throttling it 4x only 300 instructions will get executed.
    Similarly a lower end processor like intel i3 can only execute 400 instructions in a sec and by throttling it to 4x only 100 instructions can get executed.
      </P>
                <P>
                    It means everything on intel i7 or any other higher end processor will be executed faster and we will see much better scores. One of the critical matrices in lighthouse is TBT (Total Blocking Time) which depends heavily on CPU availability. High CPU availability  ensures less number of long tasks (tasks which take more than 50ms) and less the number of long tasks lower is the TBT value  and higher is the performance score.
      </P>
                <P>This is not the only problem, lighthouse scores can differ between multiple executions on the same machine. This is because lighthouse or infact any application cannot control the CPU cycles as this is the job of the operating system. Operating system decides which process will get how many computation cycles and can reduce or increase CPU availability based on n number of factors like CPU temperature, other high priority tasks etc.</P>
                <P>Below is the lighthouse scores on the same machine when lighthouse is executed 5 times for  housing.com once searially and once in parallel.  When executed serially results are completely different than when run in parallel. This is because available CPU cycles from the operating system gets distributed to all 5 processes when run in parallel and was available to a single process when executed in serial.</P>
                <h4>When lighthouse is executed 5 times on housing home page serially using below code</h4>
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

                <h4>When the same test is executed parallely using below code.</h4>
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

                <h3>B) Lighthouse covers only the most generic issues and do not understand your application behaviour</h3>
                <P>This is the most complex issue which I see with lighthouse reporting. Every application is different and optimizes the available resource where it sees the best fit.</P>
                <P>The best example I see in this case is Gmail. Gmail prioritizes mails over any other things and mails  get interactive as soon as the application loads in the browser. Other applications like Calendar, Peak, Chat, Tasks keeps loading in the background. If you will open the devtools when Gmail is loading you might get a heart attack seeing the number of requests it makes to its servers. Calendar, Chat, Peak etc adds too much to its application payload but gmails entire focus is on mails. Lighthouse fails to understand that and gives a very pathetic  score to gmail applications. </P>
                <P>One more example I have at housing.com is related to the app download banner on top of the page. We show app download banner only if app is already not installed which we detect using getInstalledRelatedApps Api recently added to the browser. There is no way to detect that on server so adding or removing the banner in the same layer will trigger cumulative layout shift (CLS) which is ofcourse bad but that download banner brings us the maximum app downloads every month and all other options we explored (like making it floating, moving it to bottom) have some pitfalls. Finally we concluded to keep that space always and fill it with some other similar component in case the app is already installed. This is surely a tradeoff and we have to yet see how much we loose because of unnecessarily occupying some part of your mobile screen.</P>
                <P>There are many similar applications like Twitter, Revamped version of facebook which have worked extensively on performance but lighthouse mark them as poor performance applications. </P>
                <P>All of these companies have some of the best brains who very well understand the limitations of the tool so they know what to fix and what aspects to be ignored from lighthouse suggestions. Problem is with organisation who trust lighthouse blind folded. Search google for “perfect lighthouse score” and you will find 100’s of blogs explaining how to achieve 100 on lighthouse. Most of them have never checked other critical metrics like conversion.</P>
                <P>One big issue is google’s integration of lighthouse to tools mostly used by non technology people like google search console which is mostly shared between tech and marketing teams. Marketing team reports performance issues reported in search console to higher management who do not understand the limitations of the tool and force the tech team to improve performance at any cost. Now tech team has two options Either to push back and explain limitation of tool to higher management which happens rarely or take bad decision which may impact other critical metrics like conversion, bounce rate etc. I know many large companies lack processes to regularly check these critical metrics.</P>
                <P>The only solution I see to this issue is to measure more and regularly. Define metrics your organisation is concerned about and prioritize them properly. Performance has no meaning if it is at the cost of conversion or revenue.</P>
                <h2>Solving the score inconsistency issue</h2>
                <P>Inconsistency in lighthouse scores cannot be solved  with 100% accuracy but can be controlled to a greater extent. The two possibilities are</P>
                <h3>A) Using hoisted services</h3>
                <P>Cloud services are again an awesome way to test your site quickly and get a basic performance idea. Some of the google implementations like pagespeed insight tries to limit the inconsistency by including lighthouse lab data and field data (google track performance score of all sites you visit if you allow google to sync your history). Webpagetest queue the test request to control CPU cycles.</P>
                <P>But again they also have their own limitations</P>
                <ul>
                    <li>
                        Cannot make all tests serial as this will increase waiting time for tests. Making them parallel on different machine will increase infra cost to infinity. Parallel execution on same machine will result in uneven CPU cycle distribution.
            </li>
                    <li>
                        Different providers have different throttling settings like some prefer to not throttle CPU when executing tests for desktop site. Which may or may not be a perfect setting for most people.
            </li>
                </ul>
                <P>Results of 10 tests of a single page on web.dev  you will be amazed to see the delta in between min and max score.. We usually prefer to take the median of all results or remove first and last 3 outliers and take avg of the remaining 4 tests</P>
                <h3>B) Self hoisted lighthouse instance</h3>
                <P>Lighthouse team has again done a great job here by providing a CI layer for self hoisting. The product is <a href="https://github.com/GoogleChrome/lighthouse-ci">lighthouse CI</a>.
                This is an amazing tool which can be integrated with your continous integration Provider (Github Actions, Jenkins, Travis etc) and you can configure it as per your needs. You can check performance diff between two commits, Trigger lighthouse test on your new PR request.  Create a docker instance of it, this is a way where you can control CPU availability to some extent and get consistent results. We are doing this at housing.com and pretty much happy with the consistency of results.</P>
                <P>The only problem at present  I see with this approach is It is too complex to set up. We have wasted weeks to understand what exactly is going on. Documentation needs a lot of improvement and the process of integration should be simplified</P>
                <h3>C) Integrating Web Vitals</h3>
                <P>Web vitals are core performance metrics provided by chrome performance api and have clear mapping with lighthouse. It is used to track field data. Send data tracked in your events to GA or any other tool you use for that sake. We are using <a src="https://zizzamia.github.io/perfume/">perfume.js</a> as it provides more metrics we are interested in along with all provided by web vitals.</P>
                <P>This is the most consistent and reliable among all the other approaches as It is the average performance score of your entire user base. We are able to make a huge progress in optimizing our application by validating this data</P>
                <P>Some of the metrics we are tracking</P>
                <img className={`${styles.image} ${styles.perf_matrics}`} src="/metrics.png" alt="performance metrics tracked at housing" />
                <P>An Example report of performance improvement with regards to Total Blocking Time(TBT) at housing.com</P>
                <img className={`${styles.image} ${styles.perf_matrics}`} src="/tbt.png" alt="total blocking time improvement at housing.com" />
                <P>An Example report showing Largest Contentful Paint(LCP) improvement at housing.com  </P>
                <img className={`${styles.image} ${styles.perf_matrics}`} src="/lcp.png" alt="improvement in largest contentful paint graph housing.com" />
                <P>The above improvements were only possible because we were measuring things. Measuring your critical metrics is the only way to maintain the right balance between performance, conversion. Measuring will help you know when performance improvement is helping your business and when it is creating problems.</P>
                <P>I know developers apply all sorts of tricks to improve their lighthouse score. From lazy loading offscreen content (We ourself did this without measuring it’s impact but now we have a plan to run experiments around it) to delaying some critical third party scripts. In most cases developers do not measure the impact of their change on user experience or the user loss by the marketing team.</P>
            </BlogContent>
        </div>
    )
}
