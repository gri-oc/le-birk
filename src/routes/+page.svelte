<script>
	import { base } from '$app/paths';

	const gallery = [
		{ src: 'gallery-1.jpg', alt: 'Taco bite on birch wood' },
		{ src: 'gallery-2.jpg', alt: 'Table spread with salad and dishes' },
		{ src: 'gallery-3.jpg', alt: 'Chef serving plates' },
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
	<section class="hero">
		<img class="logo" src="{base}/images/logo-web.png" alt="Birk" />
		<p class="tagline">Private Dining Events · Berlin</p>
	</section>

	<section class="featured">
		<img src="{base}/images/hero.jpg" alt="Plated dish with cucumber" />
	</section>

	<section class="gallery">
		<div class="grid">
			{#each gallery as image}
				<div class="grid-item">
					<img src="{base}/images/{image.src}" alt={image.alt} loading="lazy" />
				</div>
			{/each}
		</div>
	</section>

	<section class="konzept">
		<p class="konzept-text">
			In selected Berlin locations, we transform unique spaces
			into intimate dining experiences — for small groups,
			with menus that follow season and mood.
		</p>
		<p class="konzept-text">
			No fixed restaurant, no fixed table. Just great food,
			great people and evenings to remember.
		</p>
	</section>

	<section class="event-photo">
		<img src="{base}/images/event.jpg" alt="Birk dinner event" />
	</section>

	<section class="portrait-section">
		<img class="portrait-img" src="{base}/images/portrait.jpg" alt="Joschka Weins and Lukas Rosen" />
		<p class="portrait-text">
			Joschka Weins and Lukas Rosen — driven by the ambition to
			take fine dining out of its traditional setting. What started as an
			idea among friends is now an event gastronomy that gives Berlin
			a slightly different taste.
		</p>
	</section>

	<section class="closer">
		<img src="{base}/images/closer.jpg" alt="Lobster cooking" />
	</section>

	<footer id="contact">
		<p class="contact-label">contact</p>
		<p class="contact-line">Inquiries & Bookings</p>
		<a class="contact-email" href="mailto:hello@lebirk.de">hello@lebirk.de</a>
		<img class="footer-trident" src="{base}/images/logo-web.png" alt="Birk" />
	</footer>
</main>

<style>
	main {
		max-width: 100%;
		overflow-x: hidden;
	}

	/* Hero */
	.hero {
		min-height: 45vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 4rem 2rem 3rem;
	}

	.logo {
		width: clamp(135px, 25vw, 250px);
		height: auto;
	}

	.tagline {
		font-size: 0.9rem;
		letter-spacing: 0.15em;
		color: var(--color-text);
		margin-top: 1.5rem;
	}

	/* Featured hero image */
	.featured {
		padding: 0 2rem 4rem;
		max-width: 900px;
		margin: 0 auto;
	}

	.featured img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	/* 3-column gallery */
	.gallery {
		padding: 0 0;
		max-width: 100%;
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
		height: 350px;
		object-fit: cover;
		display: block;
	}

	/* Concept text */
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

	/* Event photo - full width */
	.event-photo {
		padding: 0;
		max-width: 100%;
	}

	.event-photo img {
		width: 100%;
		height: auto;
		object-fit: cover;
		display: block;
	}

	/* Portrait section */
	.portrait-section {
		padding: 5rem 2rem;
		max-width: 650px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.portrait-img {
		width: 100%;
		max-width: 450px;
		height: auto;
		margin-bottom: 2.5rem;
	}

	.portrait-text {
		font-family: var(--font-body);
		font-size: 0.9rem;
		line-height: 1.8;
		color: var(--color-text);
	}

	/* Closer image - full width */
	.closer {
		padding: 0;
		max-width: 100%;
	}

	.closer img {
		width: 100%;
		height: auto;
		object-fit: cover;
		display: block;
	}

	/* Footer */
	footer {
		padding: 4rem 2rem 3rem;
		text-align: center;
	}

	.contact-label {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 1.3rem;
		letter-spacing: 0.08em;
		text-transform: lowercase;
		color: var(--color-text);
		margin-bottom: 1rem;
	}

	.contact-line {
		font-family: var(--font-body);
		font-size: 0.9rem;
		color: var(--color-text);
		margin-top: 0.5rem;
		letter-spacing: 0.05em;
	}

	.contact-email {
		font-family: var(--font-body);
		font-size: 0.9rem;
		color: var(--color-text);
		margin-top: 0.5rem;
		letter-spacing: 0.03em;
		text-decoration: none;
		display: block;
	}

	.footer-trident {
		width: 40px;
		height: auto;
		margin-top: 2.5rem;
		opacity: 1;
	}

	/* Mobile */
	@media (max-width: 768px) {
		.hero {
			min-height: 35vh;
			padding: 3.5rem 1.5rem 2rem;
		}

		.featured {
			padding: 0 0.5rem 3rem;
		}

		.grid-item img {
			height: 200px;
		}

		.konzept {
			padding: 3rem 1.2rem;
		}

		.portrait-section {
			padding: 3.5rem 1.2rem;
		}

		.portrait-img {
			max-width: 350px;
		}

		footer {
			padding: 3rem 1.2rem 2.5rem;
		}
	}

	@media (max-width: 480px) {
		.hero {
			min-height: 30vh;
			padding: 3rem 1rem 1.5rem;
		}

		.tagline {
			font-size: 0.8rem;
		}

		.featured {
			padding: 0 0.25rem 2.5rem;
		}

		.grid {
			grid-template-columns: repeat(3, 1fr);
		}

		.grid-item img {
			height: 130px;
		}

		.konzept {
			padding: 2.5rem 1rem;
		}

		.konzept-text {
			font-size: 0.82rem;
		}

		.portrait-section {
			padding: 3rem 1rem;
		}

		.portrait-img {
			max-width: 280px;
		}

		.portrait-text {
			font-size: 0.82rem;
		}

		footer {
			padding: 2.5rem 1rem 2rem;
		}

		.contact-label {
			font-size: 1rem;
		}
	}
</style>
