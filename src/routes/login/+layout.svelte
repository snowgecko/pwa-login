<script>
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
<p>protected content</p>
{/if}
<div class="layout"><p>just next to layout div</p>
	<slot />
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>