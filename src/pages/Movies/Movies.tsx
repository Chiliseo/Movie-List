import { useEffect, useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import FilterButtons, { Category } from '@components/FilterButtons/FilterButtons'
import { ListMovies } from '@components/ListMovies/ListMovies'
import { Pagination } from '@components/Pagination/Pagination'
import { withIsAuth } from '@hoc/withIsAuth'
import { useAuth } from '@hooks/useAuth'
import { getMovies } from '@services/moviesService'
import { MoviesType } from '@services/moviesService'
import { Spin } from 'antd'
import styles from './Movies.module.scss'

export const Movies = withIsAuth(() => {
	const [category, setCategory] = useState<Category>({
		name: 'Popular',
		value: 'popular',
		active: true,
	})
	const [movieList, setMovieList] = useState<MoviesType[]>([])
	const [totalPages, setTotalPages] = useState<number>(0)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [loading, setLoading] = useState<boolean>(true)
	const { user } = useAuth()

	const fetchData = async () => {
		if (!user) return
		setLoading(true)
		const resp = await getMovies(category.value, currentPage, user.guest_session_id)
		setMovieList(resp.results)
		setTotalPages(resp.total_pages)
		setLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [currentPage, category])

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
		fetchData()
	}

	return (
		<section className={styles.movies}>
			<FilterButtons setCategory={setCategory} category={category} />
			<ListMovies title={category.name} movieList={movieList} />
			{!movieList.length && <p>No hay películas para mostrar</p>}
			{loading && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}
			<Pagination totalPages={totalPages} currentPage={currentPage} onChange={handlePageChange} />
		</section>
	)
})
