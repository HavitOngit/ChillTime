<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;
	console.log(data.actordata);

	import Male from '$lib/svgs/male.svg';
	import Female from '$lib/svgs/female.svg';
	import Poster from '$lib/svgs/poster.svg';

	let actor_img = 'https://image.tmdb.org/t/p/original/' + data.actordata.profile_path;
	if (data.actordata.profile_path == null) {
		actor_img = data.actordata.gender == 1 ? Female : Male;
	}
</script>

<div class="details">
	<div class="image">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={actor_img} alt="actor image" />
	</div>
	<div class="detail">
		<div class="name"><h1>{data.actordata.name}</h1></div>
		<div class="bio"><h3>{data.actordata.biography}</h3></div>
	</div>
</div>
<div class="m-list">
	<h1>MOVIES</h1>
</div>

<div class="movielist">
	{#each data.movies.cast as movie}
		<!-- content here -->
		<div class="space">
			<a href="\movies\{movie.id}">
				{#if movie.poster_path == null}
					<img src={Poster} alt="movie poster not avalible" />
				{:else}
					<img src="https://image.tmdb.org/t/p/original/{movie.poster_path}" alt="not clickeble" />
				{/if}
			</a>
			<h3>{movie.title}</h3>
		</div>
	{/each}
</div>

<style>
	.details {
		display: flex;
		/* max-height: 50vh; */
		gap: 2%;
	}
	.image {
		margin: 5%;
	}
	.image img {
		max-height: 60vh;
		border-radius: 10%;
	}
	.detail {
		margin-top: 5%;
		margin-right: 2%;
		display: flex;
		flex-direction: column;
		font-size: large;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	.movielist {
		display: flex;
		flex-wrap: wrap;
		margin-top: 5%;
		gap: 5%;
	}
	.space img {
		width: 300px;
		height: 400px;
		border-radius: 10%;
	}
	.space {
		text-align: center;
	}
	.m-list h1 {
		margin: 5%;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		text-align: center;
	}
</style>
