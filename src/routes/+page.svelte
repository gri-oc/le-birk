<script>
	import { base } from '$app/paths';
	import { browser } from '$app/environment';

	const fontOptions = [
		{ id: 'cormorant', name: 'Cormorant Garamond', import: 'Cormorant+Garamond:wght@300;400;500;600' },
		{ id: 'fraunces', name: 'Fraunces', import: 'Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500' },
		{ id: 'instrument-serif', name: 'Instrument Serif', import: 'Instrument+Serif:ital@0;1' },
		{ id: 'playfair', name: 'Playfair Display', import: 'Playfair+Display:wght@300;400;500;600' },
		{ id: 'bodoni-moda', name: 'Bodoni Moda', import: 'Bodoni+Moda:opsz,wght@6..96,300;6..96,400;6..96,500' },
		{ id: 'dm-serif', name: 'DM Serif Display', import: 'DM+Serif+Display' },
		{ id: 'libre-caslon', name: 'Libre Caslon Condensed', import: 'Libre+Caslon+Condensed:wght@400;700' },
		{ id: 'brygada', name: 'Brygada 1918', import: 'Brygada+1918:wght@300;400;500;600' },
		{ id: 'newsreader', name: 'Newsreader', import: 'Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500' },
		{ id: 'sorts-mill', name: 'Sorts Mill Goudy', import: 'Sorts+Mill+Goudy:ital@0;1' },
	];

	function getParam() {
		if (!browser) return '';
		return new URLSearchParams(window.location.search).get('font') || '';
	}

	let fontParam = $state(getParam());
	let activeFont = $derived(fontOptions.find(f => f.id === fontParam) || fontOptions[0]);
	let showSwitcher = $derived(fontParam !== '');

	$effect(() => {
		if (browser && activeFont) {
			document.documentElement.style.setProperty('--font-display', `'${activeFont.name}', serif`);
		}
	});

	const gallery = [
		{ src: 'gallery-1.jpg', alt: 'Taco-Häppchen auf Birkenstamm' },
		{ src: 'gallery-2.jpg', alt: 'Angerichteter Teller' },
		{ src: 'gallery-3.jpg', alt: 'Hummer im Topf' },
		{ src: 'gallery-4.jpg', alt: 'In der Küche' },
		{ src: 'gallery-5.jpg', alt: 'Gericht Detail' },
		{ src: 'gallery-6.jpg', alt: 'Angerichtetes Gericht' },
	];
</script>

<svelte:head>
	<title>Le Birk</title>
	<meta name="description" content="Le Birk — Private Dining Events in Berlin" />
	<link href="https://fonts.googleapis.com/css2?family={activeFont.import}&display=swap" rel="stylesheet" />
</svelte:head>

{#if showSwitcher}
<div class="font-switcher">
	<span class="switcher-label">Font:</span>
	{#each fontOptions as font}
		<a
			href="{base}/?font={font.id}"
			class="switcher-btn"
			class:active={font.id === fontParam}
			data-sveltekit-reload
		>{font.name}</a>
	{/each}
</div>
{/if}

<main>
	<header>
		<nav>
			<a href="#impressionen">Impressionen</a>
			<a href="#konzept">Konzept</a>
			<a href="#kontakt">Kontakt</a>
		</nav>
	</header>

	<section class="hero">
		<img class="logo" src="{base}/images/logo-web.png" alt="Le Birk" />
		<div class="divider"></div>
		<p class="tagline">Private Dining Events · Berlin</p>
	</section>

	<section class="featured">
		<img src="{base}/images/hero.jpg" alt="Joschka und Lukas — Le Birk" />
	</section>

	<section id="konzept" class="konzept">
		<h2>Konzept</h2>
		<p class="konzept-text">
			Le Birk bringt Fine Dining dahin, wo man es nicht erwartet. In ausgewählten Berliner Locations
			verwandeln wir besondere Orte in intime Dinner-Erlebnisse — für kleine Runden, mit Menüs
			die sich nach Saison und Laune richten.
		</p>
		<p class="konzept-text">
			Kein festes Restaurant, kein fester Tisch. Nur gutes Essen, gute Leute und Abende,
			die in Erinnerung bleiben.
		</p>
	</section>

	<section id="impressionen" class="gallery">
		<h2>Impressionen</h2>
		<div class="grid">
			{#each gallery as image}
				<div class="grid-item">
					<img src="{base}/images/{image.src}" alt={image.alt} loading="lazy" />
				</div>
			{/each}
		</div>
	</section>

	<section class="ueber-uns">
		<h2>Über uns</h2>
		<p>
			Hinter Le Birk stehen Joschka Weins und Lukas Rosen — zwei Köche aus Leidenschaft
			mit dem Anspruch, gehobene Küche aus dem klassischen Rahmen zu holen. Was als Idee
			unter Freunden begann, ist heute eine Eventgastronomie, die Berlin ein bisschen anders
			schmecken lässt.
		</p>
	</section>

	<section class="closer">
		<img src="{base}/images/closer.jpg" alt="Le Birk Dinner Atmosphäre" />
	</section>

	<footer id="kontakt">
		<h2>Kontakt</h2>
		<p class="contact-line">Anfragen & Buchungen</p>
		<p class="contact-email">hello@lebirk.de</p>
		<div class="footer-divider"></div>
		<p class="footer-name">Le Birk</p>
		<p class="footer-city">Berlin</p>
	</footer>
</main>

<style>
	main {
		max-width: 100%;
		overflow-x: hidden;
	}

	.font-switcher {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 200;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border-top: 1px solid var(--color-border);
		padding: 0.75rem 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
	}

	.switcher-label {
		font-family: var(--font-body);
		font-size: 0.7rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-muted);
		margin-right: 0.5rem;
	}

	.switcher-btn {
		font-family: var(--font-body);
		font-size: 0.7rem;
		padding: 0.35rem 0.7rem;
		border: 1px solid var(--color-border);
		border-radius: 2rem;
		color: var(--color-muted);
		text-decoration: none;
		transition: all 0.2s;
	}

	.switcher-btn:hover {
		color: var(--color-text);
		border-color: var(--color-text);
	}

	.switcher-btn.active {
		background: var(--color-text);
		color: var(--color-bg);
		border-color: var(--color-text);
	}

	header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
		padding: 1.5rem 2rem;
		display: flex;
		justify-content: center;
		background: linear-gradient(to bottom, var(--color-bg), transparent);
	}

	nav {
		display: flex;
		gap: 2.5rem;
	}

	nav a {
		font-family: var(--font-body);
		font-size: 0.75rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-muted);
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
		width: clamp(200px, 40vw, 400px);
		height: auto;
	}

	.divider {
		width: 50px;
		height: 1px;
		background: var(--color-border);
		margin: 2rem 0;
	}

	.tagline {
		font-size: 0.8rem;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		color: var(--color-muted);
	}

	.featured {
		padding: 0 2rem 5rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.featured img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.konzept {
		padding: 5rem 2rem;
		max-width: 650px;
		margin: 0 auto;
		text-align: center;
	}

	.konzept-text {
		font-family: var(--font-body);
		font-size: 0.95rem;
		line-height: 1.8;
		color: var(--color-text);
		margin-top: 1.5rem;
	}

	.gallery {
		padding: 4rem 2rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	h2 {
		font-family: var(--font-display);
		font-weight: 300;
		font-size: 2rem;
		letter-spacing: 0.08em;
		text-align: center;
		margin-bottom: 2rem;
		color: var(--color-text);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem;
	}

	.grid-item {
		overflow: hidden;
	}

	.grid-item img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease, opacity 0.3s;
	}

	.grid-item:hover img {
		transform: scale(1.03);
		opacity: 0.9;
	}

	.ueber-uns {
		padding: 5rem 2rem;
		max-width: 650px;
		margin: 0 auto;
		text-align: center;
	}

	.ueber-uns p {
		font-family: var(--font-body);
		font-size: 0.95rem;
		line-height: 1.8;
		color: var(--color-text);
		margin-top: 1.5rem;
	}

	.closer {
		padding: 2rem 2rem 4rem;
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
		border-top: 1px solid var(--color-border);
	}

	.contact-line {
		font-family: var(--font-body);
		font-size: 0.85rem;
		color: var(--color-muted);
		margin-top: 1rem;
		letter-spacing: 0.05em;
	}

	.contact-email {
		font-family: var(--font-display);
		font-size: 1.3rem;
		color: var(--color-text);
		margin-top: 0.5rem;
		letter-spacing: 0.03em;
	}

	.footer-divider {
		width: 40px;
		height: 1px;
		background: var(--color-border);
		margin: 2rem auto;
	}

	.footer-name {
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 400;
		letter-spacing: 0.08em;
		color: var(--color-text);
	}

	.footer-city {
		font-size: 0.75rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-muted);
		margin-top: 0.5rem;
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.grid-item img {
			height: 200px;
		}
	}

	@media (max-width: 480px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.grid-item img {
			height: 160px;
		}

		nav {
			gap: 1.5rem;
		}

		.font-switcher {
			padding: 0.5rem;
			gap: 0.3rem;
		}

		.switcher-btn {
			font-size: 0.6rem;
			padding: 0.25rem 0.5rem;
		}
	}
</style>
