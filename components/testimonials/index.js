import styles from './tm.module.css';
import Slider from "react-slick";
import utilStyles from './../../styles/utils.module.css';

  let testimonials = [
    
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

function TestimonialCard({testimonial}) {
    return <div>
        <img className={styles.image} style={{display: 'inline-block'}} src={testimonial.image} />
        <div className={styles.projectCard}>
            <div className={`${utilStyles.headingMd} ${styles.color}`}>{testimonial.name}</div>
            <div className={`${utilStyles.headingMd} ${styles.color} ${styles.textStyle}`}>{testimonial.designation}</div>
            <div className={`${utilStyles.headingMd} ${styles.color} ${styles.desc}`}>{testimonial.desc}</div>
        </div>
    </div>
}

export default function Testimonials() {
    if(!testimonials.length) return null;
    return <div className={styles.container}>
        <h1 className={`${utilStyles.heading2Xl} ${utilStyles.underline} ${utilStyles.gradient} ${utilStyles.margin4}`}>Testimonials</h1>
        <div className={styles.cards}>
        <Slider {...settings}>
            {
                testimonials.map((testimonial, i) => {
                     return  <TestimonialCard key={i} testimonial={testimonial}/>
                })
            }
            </Slider>
        </div>
    </div>

}