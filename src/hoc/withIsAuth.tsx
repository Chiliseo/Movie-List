// withIsAuth

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'

export const withIsAuth = (Component: React.FC) => {
	const WithIsAuth = () => {
		const { user } = useAuth()
		if (!user) {
			return <Navigate to="/login" />
		}
		return <Component />
	}

	return WithIsAuth
}
