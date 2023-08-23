<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const results = data.results;
	// console.log(results);
</script>

{#each results as movie}
	<div>
		<a href="\movies\{movie.id}">
			<img src="https://image.tmdb.org/t/p/original/{movie.poster_path}" alt="not clickeble" />
		</a>
	</div>
	<h3>{movie.title}</h3>
{/each}

<style>
	img {
		width: 300px;
		height: 400px;
	}
</style>
