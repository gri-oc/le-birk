<svelte:head>
	<title>Le Birk</title>
	<meta name="description" content="Le Birk — Eventgastronomie Berlin" />
</svelte:head>

<main>
	<nav>
		<span class="nav-link">Menü</span>
		<span class="nav-link">Über uns</span>
		<span class="nav-link">Kontakt</span>
	</nav>

	<section class="hero">
		<h1>Le Birk</h1>
		<div class="divider"></div>
		<p class="tagline">Eventgastronomie · Berlin</p>
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
		padding: 2rem;
	}

	nav {
		display: flex;
		gap: 2.5rem;
		padding: 1.5rem 0 4rem;
	}

	.nav-link {
		font-family: var(--font-body);
		font-size: 0.8rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-muted);
		cursor: default;
	}

	.hero {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
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

	.coming-soon {
		padding: 3rem 0 2rem;
		font-family: var(--font-display);
		font-size: 1rem;
		font-style: italic;
		color: var(--color-muted);
		letter-spacing: 0.05em;
	}
</style>
