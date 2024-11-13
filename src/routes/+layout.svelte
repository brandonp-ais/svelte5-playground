<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="px-32 pt-12 flex flex-col gap-2">
	<h1>Welcome to Svelte 5 playground</h1>

	{@render children()}
</main>
