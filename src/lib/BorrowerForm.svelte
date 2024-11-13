<script lang="ts">
	import { getBorrower, setBorrower } from './borrower-state.svelte';

	let borrower = getBorrower();
</script>

<div class="border-gray-900 border-dashed border-2 p-2">
	<h3 class="font-bold">Borrower Form</h3>

	<form action="">
		<input type="text" bind:value={borrower.name} />
	</form>
</div>
