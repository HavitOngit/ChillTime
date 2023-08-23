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

<h1>{data.details.id}</h1>
<!-- svelte-ignore a11y-missing-attribute -->

<div class="main">
	<div class="image">
		<img src="https://image.tmdb.org/t/p/original/{data.details.poster_path}" alt="not clickeble" />
	</div>

	<div class="details">
		<div class="title">{data.details.title}</div>
		<div class="description">{data.details.overview}</div>
		<div class="studio">
			{#each data.details.production_companies as company}
				{company.name} ,
			{/each}
		</div>
		<div class="genres">
			GENRES:
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
		height: 70vh;
		background-color: royalblue;
		width: 90vw;
		margin: 0 auto;
	}
	.image {
		/* background-color: plum; */
		width: 30%;
		margin: 2% 3%;
	}
	img {
		width: 90%;
		height: 100%;
		border-radius: 10%;
		/* margin: 10% 5%; */
	}
	.details {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: greenyellow;
		width: 70%;
		margin: 5% 0%;
		margin-right: 5%;
		font-family: 'Niramit', sans-serif;
	}
	.title {
		font-size: 4rem;
		background-color: gold;
	}
	.description {
		background-color: rgb(78, 255, 137);
	}
	.studio {
		background-color: rgb(217, 65, 65);
	}
	.genres {
		background-color: rgb(255, 0, 183);
	}
</style>
