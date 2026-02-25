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

	<!-- Hero: grüner Teller -->
	<section class="featured">
		<img src="{base}/images/hero.jpg" alt="Green dish with cucumber" />
	</section>

	<!-- 3er Gallery: Hotdogs, Tafel, Koch -->
	<section class="gallery">
		<div class="grid">
			<div class="grid-item">
				<img src="{base}/images/gallery-1.jpg" alt="Lobster rolls" loading="lazy" />
			</div>
			<div class="grid-item">
				<img src="{base}/images/gallery-2.jpg" alt="Table spread" loading="lazy" />
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

	<!-- Event Foto: Dinner-Szene panoramic -->
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

	<!-- Closer: Hummer panoramic -->
	<section class="closer">
		<img src="{base}/images/closer.jpg" alt="Lobster cooking" />
	</section>

	<!-- Footer -->
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

	/* === HERO === */
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 3.5rem 2rem 2.5rem;
	}

	.logo {
		width: clamp(120px, 20vw, 200px);
		height: auto;
	}

	.tagline {
		font-family: var(--font-body);
		font-size: 0.8rem;
		letter-spacing: 0.15em;
		color: var(--color-text);
		margin-top: 1rem;
	}

	/* === FEATURED (Hero Image) === */
	.featured {
		padding: 0 1.5rem 2px;
		max-width: 900px;
		margin: 0 auto;
	}

	.featured img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* === GALLERY 3er Reihe === */
	.gallery {
		padding: 0;
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
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* === CONCEPT TEXT === */
	.konzept {
		padding: 3.5rem 2rem;
		max-width: 580px;
		margin: 0 auto;
		text-align: center;
	}

	.konzept-text {
		font-family: var(--font-body);
		font-size: 0.82rem;
		line-height: 1.8;
		color: var(--color-text);
		margin-top: 1.2rem;
	}

	.konzept-text:first-child {
		margin-top: 0;
	}

	/* === EVENT PHOTO (panoramic) === */
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
		padding: 4.5rem 2rem;
		max-width: 550px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.portrait-img {
		width: 65%;
		max-width: 350px;
		height: auto;
		margin-bottom: 2rem;
	}

	.portrait-text {
		font-family: var(--font-body);
		font-size: 0.82rem;
		line-height: 1.8;
		color: var(--color-text);
	}

	/* === CLOSER (panoramic) === */
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
		padding: 3.5rem 2rem 2rem;
		text-align: center;
	}

	.contact-label {
		font-family: var(--font-body);
		font-size: 0.82rem;
		letter-spacing: 0.08em;
		color: var(--color-text);
		margin-bottom: 0.3rem;
	}

	.contact-line {
		font-family: var(--font-body);
		font-size: 0.82rem;
		color: var(--color-text);
		letter-spacing: 0.05em;
	}

	.contact-email {
		font-family: var(--font-body);
		font-size: 0.82rem;
		color: #FF0000;
		margin-top: 0.8rem;
		letter-spacing: 0.03em;
		text-decoration: none;
		display: block;
	}

	.footer-trident {
		width: 30px;
		height: auto;
		margin-top: 2rem;
	}

	/* === MOBILE === */
	@media (max-width: 768px) {
		.hero {
			padding: 3rem 1.5rem 2rem;
		}

		.featured {
			padding: 0 0.5rem 2px;
		}

		.konzept {
			padding: 2.5rem 1.2rem;
		}

		.portrait-section {
			padding: 3rem 1.2rem;
		}

		.portrait-img {
			width: 70%;
		}

		footer {
			padding: 2.5rem 1.2rem 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding: 2.5rem 1rem 1.5rem;
		}

		.tagline {
			font-size: 0.7rem;
		}

		.featured {
			padding: 0 0.25rem 2px;
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
			width: 75%;
		}

		.portrait-text {
			font-size: 0.78rem;
		}

		footer {
			padding: 2rem 1rem 1.5rem;
		}
	}
</style>
