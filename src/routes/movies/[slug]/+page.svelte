<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{data.ytlink}</h1>
<!-- svelte-ignore a11y-missing-attribute -->
<iframe
	width="420"
	height="315"
	src="https://www.youtube.com/embed/{data.ytlink}"
	allowfullscreen
/>
