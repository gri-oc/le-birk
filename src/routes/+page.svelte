<script>
	import { base } from '$app/paths';

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
			In ausgewählten Berliner Locations verwandeln wir besondere Orte in intime
			Dinner-Erlebnisse — für kleine Runden, mit Menüs die sich nach Saison und Laune richten.
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
			Joschka Weins und Lukas Rosen — mit dem Anspruch, gehobene Küche aus dem
			klassischen Rahmen zu holen. Was als Idee unter Freunden begann, ist heute eine
			Eventgastronomie, die Berlin ein bisschen anders schmecken lässt.
		</p>
	</section>

	<section class="closer">
		<img src="{base}/images/closer.jpg" alt="Le Birk Dinner Atmosphäre" />
	</section>

	<footer id="kontakt">
		<h2>Kontakt</h2>
		<p class="contact-line">Anfragen & Buchungen</p>
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
