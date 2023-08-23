<script lang="ts">
	export let cast;
	import Male from '$lib/svgs/male.svg';
	import Female from '$lib/svgs/female.svg';
	let actor_img = 'https://image.tmdb.org/t/p/original/' + cast.profile_path;
	if (cast.profile_path == null) {
		actor_img = cast.gender == 1 ? Female : Male;
	}
</script>

<div class="profile">
	<a href="/actors/{cast.id}"><img src={actor_img} alt="actor" /></a>

	<div class="charectar">
		{cast.character}
	</div>
	<div class="name">
		({cast.original_name})
	</div>
</div>

<style>
	.profile {
		display: flex;
		flex-direction: column;
		text-align: center;
		padding-top: 2vh;
	}
	img {
		max-height: 15vh;
		min-width: 15vh;
		border-radius: 50%;
	}
	.charectar {
		font-size: medium;
	}
	.name {
		color: darkgray;
		font-size: small;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}
</style>
