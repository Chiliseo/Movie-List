import { useState } from 'react'

export const useLocalStorage = (keyName: string, defaultValue?: string) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const value = window.localStorage.getItem(keyName)
			if (!value || value === 'undefined') {
				if (defaultValue) {
					window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
				}
				return defaultValue
			}
			return JSON.parse(value)
		} catch {
			return defaultValue
		}
	})
	const setValue = (newValue: unknown) => {
		window.localStorage.setItem(keyName, JSON.stringify(newValue))
		setStoredValue(newValue)
	}
	return [storedValue, setValue]
}
