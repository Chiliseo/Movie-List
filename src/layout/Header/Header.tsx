import { PiUserCircleLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import Logo from '@assets/Dacodes-Logo.svg'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link className={styles.logo} to="/">
				<Logo />
			</Link>
			<Link className={styles.account} to="/login">
				<PiUserCircleLight size={64} />
			</Link>
		</header>
	)
}
