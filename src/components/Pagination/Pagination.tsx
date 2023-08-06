import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import styles from './Pagination.module.scss'

type PaginationProps = {
	totalPages: number
	currentPage: number
	onChange: (page: number) => void
}

export const Pagination = (props: PaginationProps) => {
	const { totalPages, currentPage, onChange } = props

	return (
		<div className={styles.pagination}>
			<button className={styles.button} onClick={() => onChange(currentPage - 1)} disabled={currentPage - 1 <= 0}>
				<LeftOutlined />
			</button>
			{currentPage} / {totalPages}
			<button className={styles.button} onClick={() => onChange(currentPage + 1)} disabled={currentPage + 1 > totalPages}>
				<RightOutlined />
			</button>
		</div>
	)
}
