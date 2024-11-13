<script lang="ts">
	import { getBorrower } from './borrower-state.svelte';

	let borrower = $state(getBorrower());
</script>

<div class="border-gray-900 border-dashed border-2 p-2">
	<h3 class="font-bold">Borrower Display</h3>
	<p>This is displayed info derived from the borrower $state</p>

	<p>Name: {borrower.name}</p>

	<pre>
	{JSON.stringify(borrower, null, 2)}
</pre>
</div>
