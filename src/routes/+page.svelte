<script lang="ts">
	import BorrowerDisplay from '$lib/reactive_state_across_components/BorrowerDisplay.svelte';
	import BorrowerForm from '$lib/reactive_state_across_components/BorrowerForm.svelte';
</script>

<div class="p-4 border-dashed border-red-500 border-2">
	<p>Testing reactive state across components and declared in .ts files</p>
	<p>
		It's not entirely clear why the set function is not working to update the values in the
		components
	</p>

	<BorrowerForm />

	<BorrowerDisplay />
</div>
