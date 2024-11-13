<script lang="ts">
	import { setBorrower } from '$lib/reactive_state_across_components/borrower-state.svelte';
	import BorrowerDisplay from '$lib/reactive_state_across_components/BorrowerDisplay.svelte';
	import BorrowerForm from '$lib/reactive_state_across_components/BorrowerForm.svelte';
</script>

<div class="p-4 border-dashed border-red-500 border-2 flex flex-col gap-2">
	<p>Testing reactive state across components and declared in .ts files</p>
	<p>
		It's not entirely clear why the set function is not working to update the values in the
		components
	</p>

	<BorrowerForm />

	<BorrowerDisplay />

	<button class="bg-blue-500 text-white p-2 rounded" onclick={() => setBorrower({})}>
		Reset borrower</button
	>
</div>
