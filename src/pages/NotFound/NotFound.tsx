import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import styles from './NotFound.module.scss'

export const NotFound = () => {
	const navigate = useNavigate()
	const handlerHome = () => {
		navigate('/')
	}
	return (
		<section className={styles.notFound}>
			<h1>404</h1>
			<h2>Page not found</h2>
			<Button type="primary" onClick={handlerHome} className={styles.goHome}>
				Go to home
			</Button>
		</section>
	)
}
