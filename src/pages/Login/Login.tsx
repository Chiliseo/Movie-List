import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Button from '@components/Button/Button'
import { AuthContext } from '@context/AuthContext'
import { useLocalStorage } from '@hooks/useLocalStorage'
import * as authenticationService from '@services/authenticationService'
import { Spin } from 'antd'
import styles from './Login.module.scss'

type Inputs = {
	email: string
	password: string
	acceptTerms: boolean
}

export const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const [loading, setLoading] = useState(false)
	const [, setToken] = useLocalStorage('token')
	const [, setUser] = useLocalStorage('user')
	const { login } = useContext(AuthContext)
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		setLoading(true)
		const resp = await authenticationService.login(data)
		if (!resp.guest_session_id) {
			setLoading(false)
			return
		}
		setToken(resp.guest_session_id)
		setUser({ ...data })
		login({ ...data, guest_session_id: resp.guest_session_id })
		navigate('/main/')
		setLoading(false)
	}

	return (
		<section className={styles.login}>
			<h1 className="m-0">Login</h1>
			<p>!Bienvenido!</p>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formGroup}>
					<label htmlFor="email">Correo electrónico de DaCodes</label>
					<input type="email" id="email" {...register('email', { required: true })} />
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="password">Contraseña</label>
					<input type="password" id="password" {...register('password', { required: true, minLength: 7 })} />
				</div>
				<div className={styles.acceptTerm}>
					<input type="checkbox" id="acceptTerms" {...register('acceptTerms', { required: true })} />
					<label htmlFor="acceptTerms">He leido y acepto los terminos y condiciones.</label>
				</div>
				{errors && (
					<>
						{errors.email && <p>Email es requerido</p>}
						{errors.password?.type === 'required' && <p>Contraseña es requerido</p>}
						{errors.password?.type === 'minLength' && <p>La contraseña debe tener al menos 7 caracteres</p>}
						{errors.acceptTerms && <p>Debes aceptar los terminos y condiciones</p>}
					</>
				)}
				<Button type="submit" className={styles.submitButton} disabled={loading}>
					Crear cuenta
					{loading && <Spin className={styles.loading} />}
				</Button>
			</form>
		</section>
	)
}
