import { useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolio';
import styles from './description.module.css';

export default function Description() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		let animationFrameId;
		let particles = [];

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();

		// Particle class for "Yellow Bulbs"
		class Particle {
			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.size = Math.random() * 2 + 1; // Size between 1 and 3
				this.baseAlpha = Math.random() * 0.5 + 0.1; // Base opacity
				this.alpha = this.baseAlpha;
				this.speed = Math.random() * 0.02 + 0.005; // Twinkle speed
				this.direction = Math.random() > 0.5 ? 1 : -1;
				this.color = `251, 191, 36`; // Amber-400 (Yellow/Gold)
			}

			update() {
				// Twinkle effect: oscillate alpha
				this.alpha += this.speed * this.direction;

				if (this.alpha >= this.baseAlpha + 0.3 || this.alpha <= 0.1) {
					this.direction *= -1;
				}

				// Slowly drift
				this.y -= 0.2;
				if (this.y < 0) {
					this.y = canvas.height;
					this.x = Math.random() * canvas.width;
				}
			}

			draw() {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
				ctx.shadowBlur = 10;
				ctx.shadowColor = `rgba(${this.color}, ${this.alpha})`;
				ctx.fill();
			}
		}

		// Initialize particles
		const initParticles = () => {
			particles = [];
			const particleCount = Math.min(window.innerWidth / 5, 300); // Adjust count based on width, max 300 for performance
			for (let i = 0; i < particleCount; i++) {
				particles.push(new Particle());
			}
		};

		initParticles();

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			particles.forEach(particle => {
				particle.update();
				particle.draw();
			});
			animationFrameId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<section className={styles.hero}>
			<canvas ref={canvasRef} className={styles.canvasBackground}></canvas>

			<div className="container">
				<div className={styles.content}>
					{/* Logo removed from here as it's now in the navbar */}

					<h1 className={styles.title}>
						{portfolioData.title}
					</h1>
					<h2 className={styles.subtitle}>
						<span className="gradient-text">{portfolioData.subtitle}</span>
					</h2>
					<p className={styles.description}>{portfolioData.description}</p>

					<div className={styles.actions}>
						<a href="#contact" className={styles.primaryBtn}>Get in Touch</a>
						<a href="#projects" className={styles.secondaryBtn}>View Work</a>
					</div>

					<div className={styles.socials}>
						<a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
							GitHub
						</a>
						<span className={styles.separator}>•</span>
						<a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
							LinkedIn
						</a>
						<span className={styles.separator}>•</span>
						<a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
							Twitter
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}