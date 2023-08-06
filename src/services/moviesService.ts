export interface MoviesType {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export interface MoviesResponse {
	page: number
	results: MoviesType[]
	total_pages: number
	total_results: number
}

export const getMovies = async (category: string, page: number, apiKey: string) => {
	const resp = await fetch(
		`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=${page}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
			},
		},
	)
	if (resp.status === 401) {
		window.location.href = '/login'
	}
	const data = await resp.json()

	if (!data?.total_results) {
		return {
			page: 0,
			results: [
				{
					...data,
				},
			],
			total_pages: 0,
			total_results: 0,
		}
	}
	return data as MoviesResponse
}
