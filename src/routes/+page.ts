import type { PageLoad } from './$types';


export const load = (async ({ fetch }) => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:

                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmIyODg4NjI0YTIwMjM2YWJmMGFiMGZkZDhiZWJlZiIsInN1YiI6IjY0ZTIxYjljOGMwYTQ4MDBlMzkxYmNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v6bINn1yuhS98udYOiPoVt1blDFl3NwabfL205rnVNY'
        }
    };

    const data = await fetch(
        'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=&language=en-US&page=1&with_cast&sort_by=popularity.desc',
        options
    )
    const jsonData = await data.json()
    return jsonData
}) satisfies PageLoad;