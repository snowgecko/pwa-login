<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	//data - bound to layout.server.ts and page.ts load function output 
	export let data;
	//const products = data.poduct; //same as below 
	const { products, users } = data; //from page.ts
	const { visited, vtime } = data; //from layout.server.ts
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


{#each products as product}
	<h2>{product.title}</h2>
{/each}
{#each users as user}
	<h2>{user.firstName}</h2>
{/each}
<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>
<p>at : {data.vtime}</p>
<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
		to your new<br />SvelteKit app
	</h1>
	<a href="/protected">protected route</a>
	<a href="/login">login route</a>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
