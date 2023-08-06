type LoginPayload = {
	email: string
	password: string
}

export const login = async (payload: LoginPayload) => {
	const params = new URLSearchParams(payload).toString()
	const url = `https://api.themoviedb.org/3/authentication/guest_session/new?${params}`

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
		},
	})
	const data = await response.json()
	return data
}
