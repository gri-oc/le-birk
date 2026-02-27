<script>
	import { base } from '$app/paths';

	let sliderEl;

	function scrollSlider(direction) {
		if (!sliderEl) return;
		sliderEl.scrollBy({
			left: direction * sliderEl.clientWidth * 0.72,
			behavior: 'smooth'
		});
	}

	const slides = [
		{ src: 'slide-1.jpg', alt: 'Slider Bild 01' },
		{ src: 'slide-2.jpg', alt: 'Slider Bild 02' },
		{ src: 'slide-3.jpg', alt: 'Slider Bild 03' },
		{ src: 'slide-4.jpg', alt: 'Slider Bild 04' },
		{ src: 'slide-5.jpg', alt: 'Slider Bild 05' },
		{ src: 'slide-6.jpg', alt: 'Slider Bild 06' }
	];
</script>

<svelte:head>
	<title>Le Birk — Private Dining Events · Berlin</title>
	<meta name="description" content="Le Birk — Private Dining Events in Berlin" />
</svelte:head>

<div class="page">
	<!-- Logo + Tagline -->
	<section class="logo-section">
		<img src="{base}/images/logo.svg" alt="Le Birk" class="logo" />
		<p class="tagline">Private Dining Events · Berlin</p>
	</section>

	<!-- Hero -->
	<section class="hero">
		<img src="{base}/images/hero.jpg" alt="Le Birk dish" class="hero-image" />
	</section>

	<!-- Slider -->
	<section class="slider" aria-label="Food gallery slider">
		<button class="slider-btn prev" type="button" on:click={() => scrollSlider(-1)} aria-label="Vorherige Bilder">‹</button>
		<div class="slider-viewport" bind:this={sliderEl}>
			<div class="slider-track">
				{#each slides as slide}
					<div class="slider-item">
						<img src="{base}/images/{slide.src}" alt={slide.alt} draggable="false" />
					</div>
				{/each}
			</div>
		</div>
		<button class="slider-btn next" type="button" on:click={() => scrollSlider(1)} aria-label="Nächste Bilder">›</button>
	</section>

	<!-- Concept Text -->
	<section class="text-section">
		<p>Berlin is our dining room. We transform the city’s quiet corners into temporary restaurants where the menu follows the season and the location changes with the mood. It is fine dining stripped of its formality—moving tables and intimate groups in spaces that exist only for a night.</p>
	</section>

	<!-- Event Photo -->
	<section class="full-image event-image">
		<img src="{base}/images/event.jpg" alt="Event space" />
	</section>

	<!-- Portrait -->
	<section class="portrait-section">
		<img src="{base}/images/portrait-full.jpg" alt="Joschka and Lukas" class="portrait" />
	</section>

	<!-- About Text -->
	<section class="text-section about-text">
		<p>Joschka Weins and Lukas Rosen — driven by the ambition to create unique evenings. What started as an idea among friends is now an event gastronomy that gives Berlin a slightly different taste.</p>
		<p class="mt">“We believe that the best meals happen when high-end culinary standards meet the raw, unpolished energy of the city.”</p>
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
		<img src="{base}/images/gabel.svg" alt="" class="footer-trident" />
	</footer>
</div>

<style>
	.page {
		max-width: 100%;
		margin: 0 auto;
		padding: 0;
		--banner-height: clamp(310px, 58vw, 580px);
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
		font-size: 13px;
		font-weight: 400;
		letter-spacing: 0.5px;
		margin-top: 10px;
		color: var(--color-text);
	}

	/* Hero */
	.hero {
		width: 100%;
		margin-bottom: 4px;
	}
	.hero img {
		width: 100%;
		max-width: none;
		height: var(--banner-height);
		object-fit: cover;
		display: block;
	}
	.hero-image {
		object-position: center 32%;
	}

	/* Slider */
	.slider {
		--slider-gap: 4px;
		--visible-slides: 3.5;
		position: relative;
		width: 100%;
		margin-top: var(--slider-gap);
		margin-bottom: 0;
	}

	.slider-viewport {
		overflow-x: auto;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
		overscroll-behavior-x: contain;
		touch-action: auto;
	}
	.slider-viewport::-webkit-scrollbar { display: none; }

	.slider-track {
		display: flex;
		gap: var(--slider-gap);
		width: auto;
		scroll-snap-type: x mandatory;
	}

	.slider-item {
		flex: 0 0 calc((100% - (var(--slider-gap) * 3)) / var(--visible-slides));
		aspect-ratio: 3 / 4;
		scroll-snap-align: start;
	}

	.slider-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		pointer-events: none;
	}

	.slider-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 2;
		width: 28px;
		height: 44px;
		border: 0;
		background: rgba(26, 26, 26, 0.35);
		color: #fff;
		font-size: 20px;
		line-height: 1;
		cursor: pointer;
	}
	.slider-btn.prev { left: 0; }
	.slider-btn.next { right: 0; }

	/* Text sections */
	.text-section {
		text-align: center;
		padding: 48px 24px;
		font-size: 13px;
		line-height: 1.7;
		font-weight: 400;
	}
	.text-section p {
		max-width: 560px;
		margin: 0 auto;
	}
	.text-section .mt {
		margin-top: 16px;
	}

	/* Full width images */
	.full-image {
		width: 100vw;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
	}
	.full-image img {
		width: 100%;
		max-width: none;
		height: var(--banner-height);
		object-fit: cover;
		display: block;
	}
	.event-image img {
		object-position: center 30%;
	}

	/* Portrait */
	.portrait-section {
		display: flex;
		justify-content: center;
		padding: 56px 0 0;
	}
	.portrait {
		width: 44%;
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
		width: 12px;
		margin: 0 auto;
		opacity: 1;
	}

	/* Desktop +20% Typography */
	@media (min-width: 1101px) {
		.page {
			--banner-height: clamp(350px, 64vw, 650px);
		}
		.hero-image {
			object-position: center 28%;
		}
		.tagline {
			font-size: 16px;
			margin-top: 14px;
		}
		.text-section {
			font-size: 16px;
		}
		.footer-label,
		.footer-sub {
			font-size: 16px;
		}
		.footer-email {
			font-size: 17px;
		}
		.portrait {
			width: 40%;
		}
		.footer-trident {
			width: 20px;
		}
	}

	/* Tablet */
	@media (max-width: 1100px) {
		.logo-section {
			padding: 40px 0 24px;
		}
		.logo {
			width: 128px;
		}
		.slider {
			--visible-slides: 3.5;
		}
		.text-section {
			padding: 40px 20px;
			font-size: 12px;
		}
		.text-section p {
			max-width: 500px;
		}
		.portrait {
			width: 54%;
		}
		.about-text {
			padding-top: 20px;
			padding-bottom: 44px;
		}
	}

	/* Mobile */
	@media (max-width: 720px) {
		.page {
			--banner-height: clamp(170px, 34vw, 240px);
		}
		.hero-image {
			object-position: center 36%;
		}
		.logo-section {
			padding: 28px 0 18px;
		}
		.logo {
			width: 110px;
		}
		.tagline {
			font-size: 12px;
			margin-top: 10px;
		}
		.slider {
			--slider-gap: 4px;
			--visible-slides: 3.5;
		}
		.slider-btn {
			display: none;
		}
		.event-image img {
			object-position: center 34%;
		}
		.text-section {
			padding: 28px 14px;
			font-size: 12px;
			line-height: 1.6;
		}
		.text-section p {
			max-width: 340px;
		}
		.text-section .mt {
			margin-top: 12px;
		}
		.portrait-section {
			padding: 34px 0 0;
		}
		.portrait {
			width: 68%;
		}
		.about-text {
			padding-top: 14px;
			padding-bottom: 34px;
		}
		.footer {
			padding: 34px 16px 56px;
		}
		.footer-label,
		.footer-sub,
		.footer-email {
			font-size: 12px;
		}
		.footer-email {
			margin-bottom: 14px;
		}
		.footer-trident {
			width: 18px;
		}
	}
</style>
