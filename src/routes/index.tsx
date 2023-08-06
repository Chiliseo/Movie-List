import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '@pages/Login/Login'
import { Movies } from '@pages/Movies/Movies'
import { Main } from '../layout/Main/Main'
import { NotFound } from '../pages/NotFound/NotFound'

export const RoutesApp = () => {
	return (
		<Routes>
			<Route element={<Main />} errorElement={<NotFound />}>
				<Route path="/" element={<h1>Public</h1>} />
				<Route path="/login" element={<Login />} />
			</Route>
			<Route path="main" element={<Main auth />}>
				<Route path="" element={<Navigate to="/main/movies" />} />
				<Route path="movies" element={<Movies />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
