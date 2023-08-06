import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'
import { ConfigProvider, Layout } from 'antd'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Main.module.scss'

const { Content } = Layout

type MainProps = {
	auth?: boolean
}
export const Main = ({ auth }: MainProps) => {
	const { user } = useAuth()

	if (auth && !user) {
		return <Navigate to="/login" />
	}
	return (
		<ConfigProvider
			theme={{
				token: {
					fontFamily: 'Poppins, sans-serif',
				},
			}}
		>
			<Layout className={styles.layout}>
				<Header />
				<Layout>
					<Content className={styles.content}>
						<Outlet />
					</Content>
				</Layout>
				<Footer />
			</Layout>
		</ConfigProvider>
	)
}
