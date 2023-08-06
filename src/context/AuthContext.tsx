import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '@hooks/useLocalStorage'

type AuthProviderProps = {
	children: React.ReactNode
}

type AuthContextType = {
	user: {
		email: string
		guest_session_id: string
	}
	login: (data: unknown) => void
	logout: () => void
}
export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useLocalStorage('user', '')
	const navigate = useNavigate()

	const login = (data: unknown) => {
		setUser(data)
		navigate('/main')
	}

	const logout = () => {
		setUser()
		navigate('/login', { replace: true })
	}

	const value = {
		user,
		login,
		logout,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
