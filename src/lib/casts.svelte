<script lang="ts">
	import Profile from './profile.svelte';

	export let castList;
</script>

<div class="actorlist">
	{#each castList as actor}
		<Profile cast={actor} />
	{/each}
</div>

<style>
	.actorlist {
		display: flex;
		overflow-x: scroll;
		gap: 2%;
		margin: 5%;
		background-color: blueviolet;
	}
	.actorlist::-webkit-scrollbar {
		display: hidden;
	}
	.actorlist {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
