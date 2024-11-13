<script lang="ts">
	import { setBorrower } from '$lib/borrower-state.svelte';
	import BorrowerDisplay from '$lib/BorrowerDisplay.svelte';
	import BorrowerForm from '$lib/BorrowerForm.svelte';
</script>

<main class="px-32 pt-12 flex flex-col gap-2">
	<h1>Welcome to Svelte 5 playground</h1>
	<BorrowerForm />

	<BorrowerDisplay />

	<button
		type="button"
		class="bg-blue-500 text-white px-2 py-1 rounded"
		onclick={() => {
			setBorrower({ name: '' });
		}}
	>
		Reset borrower
	</button>
</main>
