import { useEffect } from 'react';
import { portfolioData } from '../../data/portfolio';
import styles from './contact.module.css';

export default function Contact() {

    useEffect(() => {
        // Preserving original logic
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                // generate the contact number value
                this.contact_number.value = Math.random() * 100000 | 0;
                // Assuming emailjs is loaded globally or imported. 
                // The original code used 'emailjs' global, likely from a script tag in Head (which we need to check).
                if (window.emailjs) {
                    window.emailjs.sendForm('default_service', 'contact_form', this);
                    document.getElementById('thankyou').style.display = 'block';
                    this.reset();
                } else {
                    console.error("emailjs not found");
                }
            });
        }
    }, [])

    return (
        <section id="contact" className="section container">
            <h2 className={styles.heading}>Get In Touch</h2>
            <div className={`${styles.wrapper} glass`}>
                <div className={styles.info}>
                    <h3 className={styles.subheading}>Let's Connect</h3>
                    <p className={styles.text}>
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <span className={styles.icon}>📧</span>
                            <a href={portfolioData.social.email}>{portfolioData.social.email.replace('mailto:', '')}</a>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>

                <div className={styles.formWrapper}>
                    <form id="contact-form" className={styles.form}>
                        <input type="hidden" name="contact_number" />

                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="user_name" id="name" required placeholder="John Doe" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="user_email" id="email" required placeholder="john@example.com" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" required placeholder="Your message..." rows="5"></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>Send Message</button>

                        <div id="thankyou" className={styles.thankyou}>
                            Thank you! Your message has been sent.
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}