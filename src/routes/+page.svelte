<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const results = data.results;
	// console.log(results);
</script>

<nav>TRENDING TODAY</nav>
<div class="home">
	{#each results as movie}
		<div class="movie">
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
		font-family: 'Times New Roman', Times, serif;
	}
	h3 {
		text-align: center;
	}
	nav {
		color: azure;
		text-align: center;
		font-size: xx-large;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		margin: 5%;
		background-color: black;
	}
</style>
