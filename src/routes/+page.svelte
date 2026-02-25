<script>
	import { base } from '$app/paths';

	const slides = [
		{ src: 'slide-1.jpg', alt: 'Lobster rolls' },
		{ src: 'slide-2.jpg', alt: 'Taco on birch wood' },
		{ src: 'slide-3.jpg', alt: 'Chef cooking' },
		{ src: 'slide-4.jpg', alt: 'Plated dish' },
		{ src: 'slide-5.jpg', alt: 'Dish detail' },
		{ src: 'slide-6.jpg', alt: 'Croquettes' },
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
	<!-- Logo + Tagline -->
	<section class="hero">
		<img class="logo" src="{base}/images/logo-web.png" alt="Birk" />
		<p class="tagline">Private Dining Events · Berlin</p>
	</section>

	<!-- Hero: grüner Teller, edge-to-edge, schmal -->
	<section class="featured">
		<img src="{base}/images/hero.jpg" alt="Green dish with cucumber" />
	</section>

	<!-- Slider: Hochformat-Bilder, 4. angeschnitten -->
	<section class="slider">
		<div class="slider-track">
			{#each slides as slide}
				<div class="slider-item">
					<img src="{base}/images/{slide.src}" alt={slide.alt} loading="lazy" />
				</div>
			{/each}
		</div>
	</section>

	<!-- Concept Text -->
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

	<!-- Event Foto: Raum, S/W, edge-to-edge -->
	<section class="event-photo">
		<img src="{base}/images/event.jpg" alt="Birk dinner event" />
	</section>

	<!-- Portrait + About Text -->
	<section class="portrait-section">
		<img class="portrait-img" src="{base}/images/portrait.jpg" alt="Joschka Weins and Lukas Rosen" />
		<p class="portrait-text">
			Joschka Weins and Lukas Rosen — driven by the ambition to
			take fine dining out of its traditional setting. What started as an
			idea among friends is now an event gastronomy that gives Berlin
			a slightly different taste.
		</p>
	</section>

	<!-- Closer: Hummer, edge-to-edge -->
	<section class="closer">
		<img src="{base}/images/closer.jpg" alt="Lobster cooking" />
	</section>

	<!-- Footer -->
	<footer id="contact">
		<p class="contact-label">contact</p>
		<p class="contact-line">Inquiries & Bookings</p>
		<a class="contact-email" href="mailto:hello@lebirk.de">hello@lebirk.de</a>
		<img class="footer-trident" src="{base}/images/trident.png" alt="Birk" />
	</footer>
</main>

<style>
	main {
		max-width: 720px;
		margin: 0 auto;
		overflow-x: hidden;
	}

	/* === HERO (Logo) === */
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2.5rem 2rem 1.5rem;
	}

	.logo {
		width: clamp(130px, 22vw, 200px);
		height: auto;
	}

	.tagline {
		font-family: var(--font-body);
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		color: var(--color-text);
		margin-top: 0.4rem;
	}

	/* === FEATURED (Hero Teller) — edge-to-edge, schmal === */
	.featured {
		padding: 0;
	}

	.featured img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* === SLIDER === */
	.slider {
		padding: 0;
		overflow: hidden;
		margin-top: 3px;
	}

	.slider-track {
		display: flex;
		gap: 3px;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
	}

	.slider-track::-webkit-scrollbar {
		display: none;
	}

	.slider-item {
		flex: 0 0 28.5%;
		scroll-snap-align: start;
	}

	.slider-item img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}

	/* === CONCEPT TEXT === */
	.konzept {
		padding: 2.5rem 2.5rem;
		max-width: 550px;
		margin: 0 auto;
		text-align: center;
	}

	.konzept-text {
		font-family: var(--font-body);
		font-size: 0.82rem;
		line-height: 1.7;
		color: var(--color-text);
		margin-top: 1rem;
	}

	.konzept-text:first-child {
		margin-top: 0;
	}

	/* === EVENT PHOTO — edge-to-edge === */
	.event-photo {
		padding: 0;
	}

	.event-photo img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* === PORTRAIT + ABOUT === */
	.portrait-section {
		padding: 3.5rem 2rem;
		max-width: 580px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.portrait-img {
		width: 46%;
		max-width: 330px;
		height: auto;
		margin-bottom: 1.5rem;
	}

	.portrait-text {
		font-family: var(--font-body);
		font-size: 0.82rem;
		line-height: 1.7;
		color: var(--color-text);
	}

	/* === CLOSER — edge-to-edge === */
	.closer {
		padding: 0;
	}

	.closer img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* === FOOTER === */
	footer {
		padding: 2.5rem 2rem 3rem;
		text-align: center;
	}

	.contact-label {
		font-family: var(--font-body);
		font-size: 0.82rem;
		letter-spacing: 0.04em;
		color: var(--color-text);
		margin-bottom: 0.1rem;
	}

	.contact-line {
		font-family: var(--font-body);
		font-size: 0.82rem;
		color: var(--color-text);
		letter-spacing: 0.03em;
	}

	.contact-email {
		font-family: var(--font-body);
		font-size: 0.82rem;
		color: #FF0000;
		margin-top: 0.5rem;
		letter-spacing: 0.02em;
		text-decoration: none;
		display: block;
	}

	.footer-trident {
		width: 16px;
		height: auto;
		margin-top: 0.6rem;
	}

	/* === MOBILE === */
	@media (max-width: 720px) {
		main {
			max-width: 100%;
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding: 2rem 1rem 1rem;
		}

		.tagline {
			font-size: 0.65rem;
		}

		.slider-item {
			flex: 0 0 38%;
		}

		.konzept {
			padding: 2rem 1rem;
		}

		.konzept-text {
			font-size: 0.78rem;
		}

		.portrait-section {
			padding: 2.5rem 1rem;
		}

		.portrait-img {
			width: 60%;
		}

		.portrait-text {
			font-size: 0.78rem;
		}

		footer {
			padding: 2rem 1rem 2.5rem;
		}
	}
</style>
