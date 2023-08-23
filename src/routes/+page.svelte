<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const results = data.results;
	// console.log(results);
</script>

<div class="home">
	{#each results as movie}
		<div>
			<a href="\movies\{movie.id}">
				<img src="https://image.tmdb.org/t/p/original/{movie.poster_path}" alt="not clickeble" />
			</a>
			<h3>{movie.title}</h3>
		</div>
	{/each}
</div>

<style>
	img {
		width: 300px;
		height: 400px;
		border-radius: 10%;
	}
	.home {
		display: flex;
		flex-wrap: wrap;
		gap: 5%;
	}
	h3 {
		text-align: center;
	}
</style>
