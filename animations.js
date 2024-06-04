// CREATE A TIMELINE USING GSAP DEFAULTS //
const timeline = gsap.timeline({
	defaults: { ease: 'power4.out', duration: 2 },
});

// GRAB TUTORIAL BUTTON CLASS, LISTEN FOR CLICK & SET STARTING POSITIONS
document.querySelector('.btn-howto').addEventListener('click', function () {
	gsap.from('.overlay', { opacity: 0, delay: 0 });
	gsap.from('.modal', {
		opacity: 0.5,
		delay: 0,
		y: '-100%',
		ease: 'power4.out',
	});
});

// USE TIMELINE & ANIMATE FORWARDS TO ENDING POSITIONS
timeline
	.from('h1', { opacity: 0, y: '-100%', duration: 1.2 })
	.from('.socials-wrapper', { opacity: 0, y: '100%', duration: 1.2 }, '-=1.2')
	.from('.fa', { opacity: 0, y: '100%' }, '-=2')
	.from('.modal', { opacity: 0, y: '-100%', duration: 1.2 }, '-=1.1')
	.from('.subtitle', { opacity: 0, duration: 1 })
	.from('.label-score', { opacity: 0 }, '-=1')
	.from('.label-highscore', { opacity: 0 }, '-=2');
