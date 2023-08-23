<script>
	import Header from './Header.svelte';
	import './styles.css';
//The context API provides a mechanism for components to 'talk' to each other without passing around data and functions as props, or dispatching lots of events. It's an advanced feature, but a useful one.

  </script>


<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p><!--visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit--></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
