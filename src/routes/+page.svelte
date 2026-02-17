<svelte:head>
	<title>Le Birk</title>
	<meta name="description" content="Le Birk — Eventgastronomie Berlin" />
</svelte:head>

<main>
	<section class="hero">
		<h1>Le Birk</h1>
		<p class="tagline">Eventgastronomie · Berlin</p>
	</section>

	<section class="divider">
		<span class="line"></span>
	</section>

	<section class="coming-soon">
		<p>Coming Soon</p>
	</section>
</main>

<style>
	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3rem;
	}

	.hero {
		text-align: center;
	}

	h1 {
		font-family: var(--font-display);
		font-weight: 300;
		font-size: clamp(3rem, 10vw, 7rem);
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-text);
	}

	.tagline {
		margin-top: 1rem;
		font-size: 0.85rem;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		color: var(--color-muted);
	}

	.divider {
		display: flex;
		justify-content: center;
	}

	.line {
		display: block;
		width: 60px;
		height: 1px;
		background: var(--color-accent);
	}

	.coming-soon {
		font-family: var(--font-display);
		font-size: 1.1rem;
		font-style: italic;
		color: var(--color-muted);
		letter-spacing: 0.1em;
	}
</style>
