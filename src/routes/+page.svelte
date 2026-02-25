<script>
	import { base } from '$app/paths';
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

	<!-- Hero: grüner Teller, EDGE-TO-EDGE -->
	<section class="featured">
		<img src="{base}/images/hero.jpg" alt="Green dish with cucumber" />
	</section>

	<!-- 3er Gallery, EDGE-TO-EDGE, direkt am Hero -->
	<section class="gallery">
		<div class="grid">
			<div class="grid-item">
				<img src="{base}/images/gallery-1.jpg" alt="Lobster rolls" loading="lazy" />
			</div>
			<div class="grid-item">
				<img src="{base}/images/gallery-2.jpg" alt="Taco bite on birch wood" loading="lazy" />
			</div>
			<div class="grid-item">
				<img src="{base}/images/gallery-3.jpg" alt="Chef at work" loading="lazy" />
			</div>
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

	<!-- Event Foto: S/W Dinner-Szene, EDGE-TO-EDGE -->
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

	<!-- Closer: Hummer, EDGE-TO-EDGE -->
	<section class="closer">
		<img src="{base}/images/closer.jpg" alt="Lobster cooking" />
	</section>

	<!-- Footer -->
	<footer id="contact">
		<p class="contact-label">contact</p>
		<p class="contact-line">Inquiries & Bookings</p>
		<a class="contact-email" href="mailto:hello@lebirk.de">hello@lebirk.de</a>
		<img class="footer-trident" src="{base}/favicon.png" alt="Birk" />
	</footer>
</main>

<style>
	main {
		max-width: 720px;
		margin: 0 auto;
		overflow-x: hidden;
	}

	/* === HERO (Logo area) === */
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2.5rem 2rem 1.5rem;
	}

	.logo {
		width: clamp(130px, 22vw, 220px);
		height: auto;
	}

	.tagline {
		font-family: var(--font-body);
		font-size: 0.8rem;
		letter-spacing: 0.12em;
		color: var(--color-text);
		margin-top: 0.5rem;
	}

	/* === FEATURED (Hero Image) — edge-to-edge === */
	.featured {
		padding: 0;
	}

	.featured img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* === GALLERY 3er Reihe — edge-to-edge, direkt am Hero === */
	.gallery {
		padding: 0;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 3px;
	}

	.grid-item {
		overflow: hidden;
	}

	.grid-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* === CONCEPT TEXT === */
	.konzept {
		padding: 3rem 2rem;
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
	}

	.konzept-text {
		font-family: var(--font-body);
		font-size: 0.85rem;
		line-height: 1.75;
		color: var(--color-text);
		margin-top: 1.2rem;
	}

	.konzept-text:first-child {
		margin-top: 0;
	}

	/* === EVENT PHOTO — edge-to-edge, S/W === */
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
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.portrait-img {
		width: 55%;
		max-width: 380px;
		height: auto;
		margin-bottom: 2rem;
	}

	.portrait-text {
		font-family: var(--font-body);
		font-size: 0.85rem;
		line-height: 1.75;
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
		padding: 3rem 2rem 2rem;
		text-align: center;
	}

	.contact-label {
		font-family: var(--font-body);
		font-size: 0.85rem;
		letter-spacing: 0.06em;
		color: var(--color-text);
		margin-bottom: 0.2rem;
	}

	.contact-line {
		font-family: var(--font-body);
		font-size: 0.85rem;
		color: var(--color-text);
		letter-spacing: 0.04em;
	}

	.contact-email {
		font-family: var(--font-body);
		font-size: 0.85rem;
		color: #FF0000;
		margin-top: 0.6rem;
		letter-spacing: 0.03em;
		text-decoration: none;
		display: block;
	}

	.footer-trident {
		width: 24px;
		height: auto;
		margin-top: 1.2rem;
	}

	/* === MOBILE === */
	@media (max-width: 768px) {
		.hero {
			padding: 2rem 1.5rem 1.2rem;
		}

		.konzept {
			padding: 2.5rem 1.2rem;
		}

		.portrait-section {
			padding: 2.5rem 1.2rem;
		}

		.portrait-img {
			width: 60%;
		}

		footer {
			padding: 2.5rem 1.2rem 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding: 2rem 1rem 1rem;
		}

		.tagline {
			font-size: 0.7rem;
		}

		.konzept {
			padding: 2rem 1rem;
		}

		.konzept-text {
			font-size: 0.78rem;
		}

		.portrait-section {
			padding: 2rem 1rem;
		}

		.portrait-img {
			width: 70%;
		}

		.portrait-text {
			font-size: 0.78rem;
		}

		footer {
			padding: 2rem 1rem 1.5rem;
		}
	}
</style>
