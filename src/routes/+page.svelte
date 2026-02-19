<script>
	import { base } from '$app/paths';

	const gallery = [
		{ src: 'gallery-1.jpg', alt: 'Das Le Birk Team mit Hummer' },
		{ src: 'gallery-2.jpg', alt: 'Dinner Event bei Kerzenlicht' },
		{ src: 'gallery-3.jpg', alt: 'Taco-Häppchen auf Birkenstamm' },
		{ src: 'gallery-4.jpg', alt: 'Hummer-Zubereitung' },
		{ src: 'gallery-5.jpg', alt: 'In der Küche' },
		{ src: 'gallery-6.jpg', alt: 'Le Birk Team Portrait' },
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
		<img class="logo" src="{base}/images/logo-web.png" alt="Le Birk" />
		<div class="divider"></div>
		<p class="tagline">Eventgastronomie · Berlin</p>
	</section>

	<section class="featured">
		<img src="{base}/images/hero.jpg" alt="Le Birk — Koch bei der Arbeit" />
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

	<section id="konzept" class="konzept">
		<h2>Konzept</h2>
		<p>Coming Soon</p>
	</section>

	<section class="closer">
		<img src="{base}/images/closer.jpg" alt="Le Birk Team" />
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

	.closer {
		padding: 0 2rem 4rem;
		max-width: 800px;
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
			height: 220px;
		}
	}

	@media (max-width: 480px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.grid-item img {
			height: 280px;
		}

		nav {
			gap: 1.5rem;
		}
	}
</style>
