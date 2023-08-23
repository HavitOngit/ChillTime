<script lang="ts">
	import Profile from './profile.svelte';

	export let castList;
</script>

<h1>CAST</h1>
<div class="actorlist">
	{#each castList as actor}
		<Profile cast={actor} />
	{/each}
</div>

<style>
	.actorlist {
		display: flex;
		flex-wrap: wrap;
		gap: 3%;
		margin: 0 10vw;
		/* margin: 5%; */
		/* background-color: blueviolet; */
	}
	h1 {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		text-align: center;
	}
</style>
