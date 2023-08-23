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



    const actor = fetch(`https://api.themoviedb.org/3/person/${params.slug}`, options);
    const actor_movies = fetch(`https://api.themoviedb.org/3/person/${params.slug}/movie_credits`, options);
    const response = await Promise.all([actor, actor_movies]);
    const actordata = await response[0].json();
    const movies = await response[1].json();
    return { actordata, movies };

}) satisfies PageLoad;