<script>
	import { base } from '$app/paths';
	const gallery = [
		{ src: 'gallery-1.jpg', alt: 'Taco bites on birch wood' },
		{ src: 'gallery-2.jpg', alt: 'Plated dish' },
		{ src: 'gallery-3.jpg', alt: 'Lobster in pot' },
		{ src: 'gallery-4.jpg', alt: 'In the kitchen' },
		{ src: 'gallery-5.jpg', alt: 'Dish detail' },
		{ src: 'gallery-6.jpg', alt: 'Plated course' },
	];
</script>

<svelte:head>
	<title>Birk</title>
	<meta name="description" content="Birk — Private Dining Events in Berlin" />
	<link rel="icon" type="image/png" href="{base}/favicon.png" />
	<link rel="icon" type="image/x-icon" href="{base}/favicon.ico" />
	<link rel="apple-touch-icon" href="{base}/apple-touch-icon.png" />
</svelte:head>

<main>
	<header>
		<nav>
			<a href="#concept">concept</a>
			<a href="#gallery">gallery</a>
			<a href="#contact">contact</a>
		</nav>
	</header>

	<section class="hero">
		<img class="logo" src="{base}/images/logo-web.png" alt="Birk" />
		<p class="tagline">Private Dining Events · Berlin</p>
	</section>

	<section class="featured">
		<img src="{base}/images/hero.jpg" alt="Joschka and Lukas — Birk" />
	</section>

	<section id="concept" class="konzept">
		<h2>concept</h2>
		<p class="konzept-text">
			In selected Berlin locations, we transform unique spaces into intimate dining
			experiences — for small groups, with menus that follow season and mood.
		</p>
		<p class="konzept-text">
			No fixed restaurant, no fixed table. Just great food, great people and evenings
			to remember.
		</p>
	</section>

	<section id="gallery" class="gallery">
		<h2>gallery</h2>
		<div class="grid">
			{#each gallery as image, i}
				<div class="grid-item">
					<img src="{base}/images/{image.src}" alt={image.alt} loading="lazy" />
				</div>
			{/each}
		</div>
	</section>

	<section class="ueber-uns">
		<h2>about us</h2>
		<p>
			Joschka Weins and Lukas Rosen — driven by the ambition to take fine dining out
			of its traditional setting. What started as an idea among friends is now an event
			gastronomy that gives Berlin a slightly different taste.
		</p>
	</section>

	<section class="closer">
		<img src="{base}/images/closer.jpg" alt="Birk Dinner" />
	</section>

	<footer id="contact">
		<h2>contact</h2>
		<p class="contact-line">Inquiries & Bookings</p>
		<a class="contact-email" href="mailto:hello@lebirk.de">hello@lebirk.de</a>
		<div class="footer-spacer"></div>
	</footer>
</main>

<style>
	main {
		max-width: 100%;
		overflow-x: hidden;
	}

	header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
		padding: 1.5rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
	}

	nav {
		display: flex;
		gap: 2.5rem;
	}

	nav a {
		font-family: var(--font-body);
		font-size: 0.9rem;
		letter-spacing: 0.1em;
		color: var(--color-text);
		text-decoration: none;
		transition: color 0.3s;
	}

	nav a:hover {
		color: var(--color-text);
	}

	.hero {
		min-height: 55vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 6rem 2rem 3rem;
	}

	.logo {
		width: clamp(135px, 25vw, 250px);
		height: auto;
	}

	.divider {
		width: 50px;
		height: 1px;
		background: var(--color-border);
		margin: 2rem 0;
	}

	.tagline {
		font-size: 0.9rem;
		letter-spacing: 0.15em;
		color: var(--color-text);
		margin-top: 1.5rem;
	}

	.featured {
		padding: 0 2rem 4rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.featured img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.konzept {
		padding: 4rem 2rem;
		max-width: 650px;
		margin: 0 auto;
		text-align: center;
	}

	.konzept-text {
		font-family: var(--font-body);
		font-size: 0.9rem;
		line-height: 1.8;
		color: var(--color-text);
		margin-top: 1.5rem;
	}

	.gallery {
		padding: 4rem 2rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	.gallery h2 {
		margin-bottom: 2rem;
	}

	h2 {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 1.3rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 0.8rem;
		color: var(--color-text);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2px;
	}

	.grid-item {
		overflow: hidden;
	}

	.grid-item img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		display: block;
	}

	.ueber-uns {
		padding: 4rem 2rem;
		max-width: 650px;
		margin: 0 auto;
		text-align: center;
	}

	.ueber-uns p {
		font-family: var(--font-body);
		font-size: 0.9rem;
		line-height: 1.8;
		color: var(--color-text);
		margin-top: 1.5rem;
	}

	.closer {
		padding: 4rem 2rem;
		max-width: 900px;
		margin: 0 auto;
	}

	.closer img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	footer {
		padding: 4rem 2rem;
		text-align: center;
	}

	.contact-line {
		font-family: var(--font-body);
		font-size: 0.9rem;
		color: var(--color-text);
		margin-top: 1rem;
		letter-spacing: 0.05em;
	}

	.contact-email {
		font-family: var(--font-body);
		font-size: 0.9rem;
		color: var(--color-text);
		margin-top: 0.5rem;
		letter-spacing: 0.03em;
		text-decoration: none;
	}

	.footer-spacer {
		height: 5rem;
	}

	@media (max-width: 768px) {
		.hero {
			min-height: 45vh;
			padding: 5rem 1.5rem 2rem;
		}

		.tagline {
			font-size: 0.8rem;
		}

		.featured {
			padding: 0 0.5rem 3rem;
		}

		.konzept {
			padding: 3rem 1.2rem;
		}

		.gallery {
			padding: 3rem 0.5rem;
		}

		.grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.grid-item img {
			height: 200px;
		}

		.ueber-uns {
			padding: 3rem 1.2rem;
		}

		.closer {
			padding: 3rem 0.5rem;
		}

		footer {
			padding: 3rem 1.2rem;
		}

		h2 {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 480px) {
		.hero {
			min-height: 40vh;
			padding: 4.5rem 1rem 1.5rem;
		}

		.featured {
			padding: 0 0.25rem 2.5rem;
		}

		.konzept {
			padding: 2.5rem 1rem;
		}

		.konzept-text {
			font-size: 0.82rem;
		}

		.gallery {
			padding: 2.5rem 0.25rem;
		}

		.grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.grid-item img {
			height: 160px;
		}

		.ueber-uns {
			padding: 2.5rem 1rem;
		}

		.ueber-uns p {
			font-size: 0.82rem;
		}

		.closer {
			padding: 2.5rem 0.25rem;
		}

		footer {
			padding: 2.5rem 1rem;
		}

		nav {
			gap: 1.5rem;
			font-size: 0.8rem;
		}

		h2 {
			font-size: 1rem;
		}

		.footer-spacer {
			height: 3rem;
		}
	}
</style>
