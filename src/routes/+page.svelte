<script>
	import { base } from '$app/paths';

	const images = [
		{ src: 'img-009.png', alt: 'Le Birk — Service' },
		{ src: 'img-007.jpg', alt: 'Gericht mit Kräutersoße' },
		{ src: 'img-015.jpg', alt: 'Dinner Event Atmosphäre' },
		{ src: 'img-010.jpg', alt: 'Maultasche Fine Dining' },
		{ src: 'img-008.jpg', alt: 'Taco auf Birkenstamm' },
		{ src: 'img-018.jpg', alt: 'Gäste beim Dinner' },
		{ src: 'img-006.jpg', alt: 'Das Le Birk Team' },
		{ src: 'img-022.jpg', alt: 'Koch mit Hummer' },
	];
</script>

<svelte:head>
	<title>Le Birk</title>
	<meta name="description" content="Le Birk — Eventgastronomie Berlin" />
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
		<h1>Le Birk</h1>
		<div class="divider"></div>
		<p class="tagline">Eventgastronomie · Berlin</p>
	</section>

	<section class="featured">
		<img src="{base}/images/img-009.png" alt="Le Birk — Service" />
	</section>

	<section id="impressionen" class="gallery">
		<h2>Impressionen</h2>
		<div class="grid">
			{#each images.slice(1, 7) as image}
				<div class="grid-item">
					<img src="{base}/images/{image.src}" alt={image.alt} loading="lazy" />
				</div>
			{/each}
		</div>
	</section>

	<section id="konzept" class="konzept">
		<h2>Konzept</h2>
		<p>Coming Soon</p>
	</section>

	<section class="team-image">
		<img src="{base}/images/img-022.jpg" alt="Koch mit Hummer" />
	</section>

	<footer id="kontakt">
		<p class="footer-name">Le Birk</p>
		<p class="footer-city">Berlin</p>
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
		min-height: 60vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 6rem 2rem 4rem;
	}

	h1 {
		font-family: var(--font-display);
		font-weight: 300;
		font-size: clamp(3.5rem, 12vw, 8rem);
		letter-spacing: 0.08em;
		color: var(--color-text);
		line-height: 1;
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
		padding: 0 2rem 4rem;
		max-width: 900px;
		margin: 0 auto;
	}

	.featured img {
		width: 100%;
		height: auto;
		object-fit: cover;
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
		margin-bottom: 3rem;
		color: var(--color-text);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.grid-item img {
		width: 100%;
		height: 280px;
		object-fit: cover;
		display: block;
		transition: opacity 0.3s;
	}

	.grid-item img:hover {
		opacity: 0.85;
	}

	.konzept {
		padding: 5rem 2rem;
		text-align: center;
	}

	.konzept p {
		font-family: var(--font-display);
		font-style: italic;
		font-size: 1.1rem;
		color: var(--color-muted);
		margin-top: 1rem;
	}

	.team-image {
		padding: 0 2rem 4rem;
		max-width: 700px;
		margin: 0 auto;
	}

	.team-image img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	footer {
		padding: 4rem 2rem;
		text-align: center;
		border-top: 1px solid var(--color-border);
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
			grid-template-columns: 1fr;
		}

		.grid-item img {
			height: 250px;
		}

		nav {
			gap: 1.5rem;
		}
	}
</style>
