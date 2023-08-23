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
    const response = fetch(`https://api.themoviedb.org/3/movie/${params.slug}/videos`, options);

    // movie details
    const movieDetails = fetch(`https://api.themoviedb.org/3/movie/${params.slug}`, options);

    // cast details 
    const castdetails = fetch(`https://api.themoviedb.org/3/movie/${params.slug}/credits`, options);
    const re = await Promise.all([response, movieDetails, castdetails])
    const details = await re[1].json();
    const actors = await re[2].json();
    const video_links = await re[0].json();
    const linklen = video_links.results.length - 1;
    const ytlink = video_links.results[linklen].key;


    return { ytlink, details, actors };
}) satisfies PageLoad;