import { StarFilled, StarOutlined } from '@ant-design/icons'
import { MoviesType } from '@services/moviesService'
import styles from './Movie.module.scss'

type MovieProps = {
	movie: MoviesType
}

export const Movie = ({ movie }: MovieProps) => {
	function renderVotes(vote: number) {
		console.log(vote, typeof vote)
		if (vote === 0) {
			return <p>No votes</p>
		}
		const voteConverted = Math.round(vote / 2)
		const voteArray = [1, 2, 3, 4, 5]
		return (
			<div className={styles.wrapIcons}>
				{voteArray.map((item) => {
					if (item <= voteConverted) {
						return <StarFilled key={item} />
					}
					return <StarOutlined key={item} />
				})}
			</div>
		)
	}
	return (
		<div className={styles.movie}>
			{movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />}
			{!movie.poster_path && <img src={`https://via.placeholder.com/500x750.png?text=No+image`} alt={movie.title} />}
			<div className={styles.info}>
				<p className={styles.originalTitle}>{movie.original_title}</p>
				<p>{movie.release_date}</p>
				<p>{movie.overview}</p>
				{movie.vote_average && renderVotes(movie.vote_average)}
			</div>
		</div>
	)
}
