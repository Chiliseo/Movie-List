import { useEffect, useState } from 'react'
import Button from '@components/Button/Button'
import clsx from 'clsx'
import styles from './FilterButtons.module.scss'

type FilterButtonsProps = {
	setCategory: (category: Category) => void
	category: Category
}

export type Category = {
	name: string
	value: string
	active: boolean
}

const buttons: Category[] = [
	{
		name: 'Latest',
		value: 'latest',
		active: false,
	},
	{
		name: 'Now playing',
		value: 'now_playing',
		active: false,
	},
	{
		name: 'Popular',
		value: 'popular',
		active: false,
	},
	{
		name: 'Top rated',
		value: 'top_rated',
		active: false,
	},
	{
		name: 'Upcoming',
		value: 'upcoming',
		active: false,
	},
]

const FilterButtons = ({ setCategory, category }: FilterButtonsProps) => {
	const [buttonList, setButtonList] = useState(buttons)

	function buttonListMap(value: string) {
		setButtonList(
			buttonList.map((item) => {
				if (item.value === value) {
					return { ...item, active: true }
				}
				return { ...item, active: false }
			}),
		)
	}
	useEffect(() => {
		buttonListMap(category.value)
	}, [category.value])

	const handleClick = (category: Category) => {
		setCategory(category)
		buttonListMap(category.value)
	}
	return (
		<ul className={styles.filterButtons}>
			{buttonList.map((button) => (
				<li key={button.value}>
					<Button className={clsx(styles.button, button.active && styles.active)} onClick={() => handleClick(button)}>
						{button.name}
					</Button>
				</li>
			))}
		</ul>
	)
}

export default FilterButtons
