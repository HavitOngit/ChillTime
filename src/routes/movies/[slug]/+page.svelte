<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.details);
</script>

<h1>{data.details.id}</h1>
<!-- svelte-ignore a11y-missing-attribute -->

<div class="main">
	<div class="image">image</div>

	<div class="details">
		<div class="title">title</div>
		<div class="description">discription</div>
		<div class="studio">xy studio</div>
	</div>
</div>

<!-- <div>
	<img src="https://image.tmdb.org/t/p/original/{data.details.poster_path}" alt="not clickeble" />
</div>

<div class="genres">
	GENRES:
	{#each data.details.genres as genre}
		{genre.name} ,
	{/each}
</div>

<iframe
	width="420"
	height="315"
	src="https://www.youtube.com/embed/{data.ytlink}"
	allowfullscreen
/> -->

<style>
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
		width: 50vw;
		margin: 0 auto;
	}
	.image {
		background-color: plum;
		width: 30%;
		margin: 10% 5%;
	}
	.details {
		display: flex;

		flex-direction: column;
		background-color: greenyellow;
		width: 70%;
		margin: 10% 0%;
		margin-right: 5%;
	}
	.title {
		background-color: gold;
	}
	.description {
		background-color: rgb(78, 255, 137);
	}
	.studio {
		background-color: rgb(217, 65, 65);
	}
</style>
