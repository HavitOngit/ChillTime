<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Back from '$lib/svgs/back.gif';

	// function autoback() {
	// 	setTimeout(() => {
	// 		history.back();
	// 	}, 5000);

	// 	return close
	// }

	onMount(() => {
		setTimeout(() => {
			history.back();
		}, 2000);
	});
</script>

<!-- <h1>{$page.status}: {$page.error?.message}</h1> -->
<h1>Details Not Found</h1>
<h1>Going Back in <span>2 Sec</span></h1>
<div class="gif">
	<img src={Back} alt="Going Back" />
</div>

<style>
	h1 {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
		font-size: xx-large;
		text-align: center;
	}
	.gif {
		display: flex;
		/* align-items: center; */
		justify-content: center;
		margin: 20vh;
	}
	span {
		background-color: black;
		color: azure;
	}
</style>
