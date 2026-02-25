<script>
	import { base } from '$app/paths';
	const slides = [
		{ src: 'slide-1.jpg', alt: 'Hotdogs' },
		{ src: 'slide-2.jpg', alt: 'Taco auf Birke' },
		{ src: 'slide-3.jpg', alt: 'Koch' },
		{ src: 'slide-4.jpg', alt: 'Küche 1' },
		{ src: 'slide-5.jpg', alt: 'Küche 2' },
		{ src: 'slide-6.jpg', alt: 'Küche 3' }
	];
</script>

<svelte:head>
	<title>Le Birk — Private Dining Events · Berlin</title>
	<meta name="description" content="Le Birk — Private Dining Events in Berlin" />
</svelte:head>

<div class="page">
	<!-- Logo + Tagline -->
	<section class="logo-section">
		<img src="{base}/images/logo-web.png" alt="Le Birk" class="logo" />
		<p class="tagline">Private Dining Events · Berlin</p>
	</section>

	<!-- Hero -->
	<section class="hero">
		<img src="{base}/images/hero.jpg" alt="Le Birk dish" />
	</section>

	<!-- Slider -->
	<section class="slider">
		<div class="slider-track">
			{#each slides as slide}
				<div class="slider-item">
					<img src="{base}/images/{slide.src}" alt={slide.alt} />
				</div>
			{/each}
		</div>
	</section>

	<!-- Concept Text -->
	<section class="text-section">
		<p>In selected Berlin locations, we transform unique spaces<br>
		into intimate dining experiences — for small groups,<br>
		with menus that follow season and mood.</p>
		<p class="mt">No fixed restaurant, no fixed table. Just great food,<br>
		great people and evenings to remember.</p>
	</section>

	<!-- Event Photo -->
	<section class="full-image">
		<img src="{base}/images/event.jpg" alt="Event space" />
	</section>

	<!-- Portrait -->
	<section class="portrait-section">
		<img src="{base}/images/portrait.jpg" alt="Joschka and Lukas" class="portrait" />
	</section>

	<!-- About Text -->
	<section class="text-section about-text">
		<p>Joschka Weins and Lukas Rosen — driven by the ambition to<br>
		take fine dining out of its traditional setting. What started as an<br>
		idea among friends is now an event gastronomy that gives Berlin<br>
		a slightly different taste.</p>
	</section>

	<!-- Closer -->
	<section class="full-image">
		<img src="{base}/images/closer.jpg" alt="Lobster shells" />
	</section>

	<!-- Footer -->
	<footer class="footer">
		<p class="footer-label">contact</p>
		<p class="footer-sub">Inquiries & Bookings</p>
		<a href="mailto:hello@lebirk.de" class="footer-email">hello@lebirk.de</a>
		<img src="{base}/images/trident.png" alt="" class="footer-trident" />
	</footer>
</div>

<style>
	.page {
		max-width: 100%;
		margin: 0 auto;
		padding: 0;
	}

	/* Logo */
	.logo-section {
		text-align: center;
		padding: 48px 0 32px;
	}
	.logo {
		width: 140px;
		margin: 0 auto;
	}
	.tagline {
		font-size: 11px;
		font-weight: 400;
		letter-spacing: 0.5px;
		margin-top: 4px;
		color: var(--color-text);
	}

	/* Hero */
	.hero {
		width: 100%;
		margin-bottom: 4px;
	}

	/* Slider */
	.slider {
		width: 100%;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
		margin-bottom: 0;
	}
	.slider::-webkit-scrollbar { display: none; }
	.slider-track {
		display: flex;
		gap: 4px;
		scroll-snap-type: x mandatory;
	}
	.slider-item {
		flex: 0 0 32%;
		scroll-snap-align: start;
	}
	.slider-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* Text sections */
	.text-section {
		text-align: center;
		padding: 48px 24px;
		font-size: 13px;
		line-height: 1.7;
		font-weight: 400;
	}
	.text-section .mt {
		margin-top: 16px;
	}

	/* Full width images */
	.full-image {
		width: 100%;
	}

	/* Portrait */
	.portrait-section {
		display: flex;
		justify-content: center;
		padding: 56px 0 0;
	}
	.portrait {
		width: 46%;
	}

	.about-text {
		padding-top: 24px;
		padding-bottom: 56px;
	}

	/* Footer */
	.footer {
		text-align: center;
		padding: 48px 24px 80px;
	}
	.footer-label {
		font-size: 13px;
		font-weight: 400;
		margin-bottom: 4px;
	}
	.footer-sub {
		font-size: 13px;
		font-weight: 400;
		margin-bottom: 16px;
	}
	.footer-email {
		color: var(--color-red);
		text-decoration: none;
		font-size: 14px;
		font-weight: 500;
		display: block;
		margin-bottom: 24px;
	}
	.footer-trident {
		width: 24px;
		margin: 0 auto;
		opacity: 0.8;
	}

	/* Mobile */
	@media (max-width: 720px) {
		.page {
			max-width: 100%;
		}
		.slider-item {
			flex: 0 0 34%;
		}
	}
</style>
