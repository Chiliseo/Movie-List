import { Movie } from '@components/Movie/Movie'
import { MoviesType } from '@services/moviesService'
import styles from './ListMovies.module.scss'

type ListMoviesProps = {
	title: string
	movieList: MoviesType[]
}

export const ListMovies = ({ title, movieList }: ListMoviesProps) => {
	return (
		<div className={styles.listMovies}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.list}>
				{movieList?.map((movie) => {
					return <Movie movie={movie} key={movie.id} />
				})}
			</div>
		</div>
	)
}
