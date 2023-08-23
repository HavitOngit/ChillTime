<script lang="ts">
	import Casts from '$lib/casts.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log(data.details);

	console.log(data.actors);
</script>

<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Niramit:wght@700&display=swap"
		rel="stylesheet"
	/>
</head>

<!-- <h1>{data.details.id}</h1> -->
<!-- svelte-ignore a11y-missing-attribute -->

<div class="main">
	<div class="image">
		<img src="https://image.tmdb.org/t/p/original/{data.details.poster_path}" alt="not clickeble" />
	</div>

	<div class="details">
		<div class="title">{data.details.title}</div>
		<div class="description">
			<span>STORY:</span>
			{data.details.overview}
		</div>
		<div class="studio">
			<span>COMPANIES:</span>
			{#each data.details.production_companies as company}
				{company.name} ,
			{/each}
		</div>
		<div class="genres">
			<span>GENRES:</span>
			{#each data.details.genres as genre}
				{genre.name} ,
			{/each}
		</div>
	</div>
</div>

<div />

<div>
	<Casts castList={data.actors.cast} />
</div>

<!-- <iframe
	width="420"
	height="315"
	src="https://www.youtube.com/embed/{data.ytlink}"
	allowfullscreen
/> -->

<style>
	/* @import url('https://fonts.googleapis.com/css2?family=Niramit:wght@700&display=swap'); */
	/* img {
		width: 300px;
		height: 400px;
	}

	.genres {
		display: flex;
		flex-direction: row;
	} */

	.main {
		display: flex;
		height: 75vh;
		/* background-color: royalblue; */
		margin: 10vh 25vh;
		gap: 3%;
	}

	.image {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.image img {
		margin-bottom: 12vh;
		background-color: plum;
		height: 70%;
		width: auto;
		border-radius: 10%;
	}

	.details {
		max-height: 60vh;
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 2%;
		/* background-color: greenyellow; */
		width: 70%;
		margin: 5% 0%;
		margin-right: 5%;
		font-family: 'Niramit', sans-serif;
	}
	.title {
		font-size: 5vh;
		/* background-color: gold; */
	}
	.description {
		min-width: 40vw;
		padding: 1%;
		/* background-color: rgb(78, 255, 137); */
	}
	.studio {
		padding: 1%;
		/* background-color: rgb(217, 65, 65); */
	}
	.genres {
		padding: 1%;
		/* background-color: rgb(255, 0, 183); */
	}
	span {
		background-color: black;
		color: azure;
	}
</style>
