import clsx from 'clsx'
import styles from './Button.module.scss'

type ButtonProps = {
	children: React.ReactNode
	className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button className={clsx(styles.button, className)} {...props}>
			{children}
		</button>
	)
}

export default Button
