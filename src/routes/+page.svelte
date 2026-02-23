<script>
	import { base } from '$app/paths';

	let lang = $state('de');

	const t = $derived({
		tagline: lang === 'de' ? 'Private Dining Events · Berlin' : 'Private Dining Events · Berlin',
		navKonzept: lang === 'de' ? 'Konzept' : 'Concept',
		navImpressionen: lang === 'de' ? 'Impressionen' : 'Gallery',
		navKontakt: lang === 'de' ? 'Kontakt' : 'Contact',
		heroAlt: lang === 'de' ? 'Joschka und Lukas — Le Birk' : 'Joschka and Lukas — Le Birk',
		konzeptTitle: lang === 'de' ? 'Konzept' : 'Concept',
		konzeptText1: lang === 'de'
			? 'In ausgewählten Berliner Locations verwandeln wir besondere Orte in intime Dinner-Erlebnisse — für kleine Runden, mit Menüs die sich nach Saison und Laune richten.'
			: 'In selected Berlin locations, we transform unique spaces into intimate dining experiences — for small groups, with menus that follow season and mood.',
		konzeptText2: lang === 'de'
			? 'Kein festes Restaurant, kein fester Tisch. Nur gutes Essen, gute Leute und Abende, die in Erinnerung bleiben.'
			: 'No fixed restaurant, no fixed table. Just great food, great people and evenings to remember.',
		impressionenTitle: lang === 'de' ? 'Impressionen' : 'Gallery',
		ueberUnsTitle: lang === 'de' ? 'Über uns' : 'About us',
		ueberUnsText: lang === 'de'
			? 'Joschka Weins und Lukas Rosen — mit dem Anspruch, gehobene Küche aus dem klassischen Rahmen zu holen. Was als Idee unter Freunden begann, ist heute eine Eventgastronomie, die Berlin ein bisschen anders schmecken lässt.'
			: 'Joschka Weins and Lukas Rosen — driven by the ambition to take fine dining out of its traditional setting. What started as an idea among friends is now an event gastronomy that gives Berlin a slightly different taste.',
		kontaktTitle: lang === 'de' ? 'Kontakt' : 'Contact',
		kontaktLine: lang === 'de' ? 'Anfragen & Buchungen' : 'Inquiries & Bookings',
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
	<title>Birk</title>
	<meta name="description" content="Birk — Private Dining Events in Berlin" />
</svelte:head>

<main>
	<header>
		<nav>
			<a href="#konzept">{t.navKonzept}</a>
			<a href="#impressionen">{t.navImpressionen}</a>
			<a href="#kontakt">{t.navKontakt}</a>
		</nav>
		<div class="lang-switch">
			<button class:active={lang === 'de'} onclick={() => lang = 'de'}>DE</button>
			<button class:active={lang === 'en'} onclick={() => lang = 'en'}>EN</button>
		</div>
	</header>

	<section class="hero">
		<img class="logo" src="{base}/images/logo-web.png" alt="Birk" />
		<div class="divider"></div>
		<p class="tagline">{t.tagline}</p>
	</section>

	<section class="featured">
		<img src="{base}/images/hero.jpg" alt={t.heroAlt} />
	</section>

	<section id="konzept" class="konzept">
		<h2>{t.konzeptTitle}</h2>
		<p class="konzept-text">{t.konzeptText1}</p>
		<p class="konzept-text">{t.konzeptText2}</p>
	</section>

	<section id="impressionen" class="gallery">
		<h2>{t.impressionenTitle}</h2>
		<div class="grid">
			{#each gallery as image}
				<div class="grid-item">
					<img src="{base}/images/{image.src}" alt={image.alt} loading="lazy" />
				</div>
			{/each}
		</div>
	</section>

	<section class="ueber-uns">
		<h2>{t.ueberUnsTitle}</h2>
		<p>{t.ueberUnsText}</p>
	</section>

	<section class="closer">
		<img src="{base}/images/closer.jpg" alt="Birk Dinner" />
	</section>

	<footer id="kontakt">
		<h2>{t.kontaktTitle}</h2>
		<p class="contact-line">{t.kontaktLine}</p>
		<p class="contact-email">hello@lebirk.de</p>
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
		background: linear-gradient(to bottom, var(--color-bg), transparent);
	}

	nav {
		display: flex;
		gap: 2.5rem;
	}

	nav a {
		font-family: var(--font-body);
		font-size: 0.95rem;
		letter-spacing: 0.1em;
		color: var(--color-text);
		text-decoration: none;
		transition: color 0.3s;
	}

	nav a:hover {
		color: var(--color-text);
	}

	.lang-switch {
		position: absolute;
		right: 2rem;
		display: flex;
		gap: 0.5rem;
	}

	.lang-switch button {
		font-family: var(--font-body);
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		background: none;
		border: none;
		color: var(--color-border);
		padding: 0.2rem 0.4rem;
		transition: color 0.3s;
	}

	.lang-switch button.active {
		color: var(--color-text);
	}

	.lang-switch button:hover {
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
		font-size: 0.85rem;
		letter-spacing: 0.15em;
		color: var(--color-text);
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
		color: var(--color-text);
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

	.footer-spacer {
		height: 3rem;
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
	}
</style>
