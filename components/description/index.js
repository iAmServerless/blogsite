import styles from './description.module.css';
import utilStyles from './../../styles/utils.module.css';

let Svg = () => <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
<linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
  <stop offset="0%" stopColor="#624682" stopOpacity="1" />
  <stop offset="100%" stopColor="#422662" stopOpacity="1" />
</linearGradient>
<path fill="url(#PSgrad_0)">

	<animate  repeatCount="indefinite" attributeName="d" dur="5s"
	
	values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
	c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
	c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
	c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
	
	
	M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
	c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
	c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
	C48.9,198.6,57.8,191,51,171.3z;
	
	M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
	c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
	c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
	c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z	"/>

	</path>

</svg>

export default function Description() {
    return <div className={styles.container}>
        <div className={styles.animation}>
			<Svg />
        </div>
        <div className={styles.details}>
            <div className={styles.headingTop}>&#128075; I'M</div>
            <h1 className={`${utilStyles.heading2Xl}`}>ASHUTOSH SHARMA</h1>
            <h2 className={`${utilStyles.headingLg}`}>Web Developer & Frontend Architect</h2>
            <p className={`${styles.description}`}>
				Always living on the edge 🔥🔥.
				<br />
				Connect me on <a style={{fontSize: '30px', verticalAlign: "middle"}} href="mailto:you@ashutosharma.com" target="_blank" >&#128231;</a>
				<a href="http://twitter.com/iamserverless" target="_blank"><svg style={{fill: "#1DA1F2", height: '30px', margin: '10px', verticalAlign: "middle"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path d="M612 116.258c-22.525 9.98-46.694 16.75-72.088 19.772 25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253C573.87 163.525 595.21 141.42 612 116.257z"/></svg></a>
				<a href="http://linkedin.com/in/iamserverless" target="_blank"><svg style={{fill: "#0e76a8", height: '30px', verticalAlign: "middle"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.165 478.165"><path d="M442.78 0H35.424C15.86 0 0 15.4 0 34.288v409.688c0 18.828 15.86 34.19 35.424 34.19H442.76c19.586 0 35.405-15.362 35.405-34.19V34.288C478.165 15.4 462.345 0 442.78 0zM145.003 400.244H72.78V184.412h72.224v215.832zm-36.16-245.28h-.48c-24.246 0-39.926-16.695-39.926-37.336 0-21.22 16.158-37.337 40.863-37.337 24.725 0 39.927 16.12 40.385 37.338.02 20.64-15.64 37.337-40.843 37.337zm296.54 245.28h-72.082V284.807c0-29.01-10.598-48.952-36.738-48.952-20.063 0-31.798 13.428-36.958 26.458-1.893 4.423-2.39 10.898-2.39 17.393v120.537H184.95s.916-195.63 0-215.832h72.263v30.604c9.484-14.684 26.658-35.703 65.01-35.703 47.577 0 83.16 30.863 83.16 97.168v123.766zm-148.61-184.532c.06-.22.16-.438.42-.677v.677h-.42z"/></svg></a>
				</p>
        </div>
    </div>

}