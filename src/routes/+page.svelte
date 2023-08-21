<script lang="ts">
	import type { PageData } from './$types';

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmIyODg4NjI0YTIwMjM2YWJmMGFiMGZkZDhiZWJlZiIsInN1YiI6IjY0ZTIxYjljOGMwYTQ4MDBlMzkxYmNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v6bINn1yuhS98udYOiPoVt1blDFl3NwabfL205rnVNY'
		}
	};

	export let data: PageData;
	const results = data.results;
	console.log(results);

	async function getVideo(id) {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
		const video_links = await response.json();
		const linklen = video_links.results.length - 1;
		const ytlink = video_links.results[linklen];
		console.log(ytlink.key);
		let key = ytlink.key;
		return key;
	}
</script>

{#each results as movie}
	<div>
		<img src="https://image.tmdb.org/t/p/original/{movie.poster_path}" alt="not clickeble" />
		{#await getVideo(movie.id)}
			<h1>loggig</h1>
		{:then key}
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe
				width="420"
				height="315"
				src="https://www.youtube.com/embed/{key}"
				allow="fullscreen;"
			/>
		{/await}
	</div>
	<h3>{movie.title}</h3>
{/each}

<style>
	img {
		width: 300px;
		height: 400px;
	}
</style>
