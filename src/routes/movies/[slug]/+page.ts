import type { PageLoad } from './$types';



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmIyODg4NjI0YTIwMjM2YWJmMGFiMGZkZDhiZWJlZiIsInN1YiI6IjY0ZTIxYjljOGMwYTQ4MDBlMzkxYmNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v6bINn1yuhS98udYOiPoVt1blDFl3NwabfL205rnVNY'
    }
};

export const load = (async ({ fetch, params }) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.slug}/videos`, options);
    const video_links = await response.json();
    const linklen = video_links.results.length - 1;
    const ytlink = video_links.results[linklen].key;

    const movieDetails = await fetch(`https://api.themoviedb.org/3/movie/${params.slug}`, options);


    return { ytlink };
}) satisfies PageLoad;