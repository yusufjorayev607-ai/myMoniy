import { useState } from 'react'
import styles from './Auth.module.css'
import { useLogin } from '../hooks/useLogin'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { login } = useLogin()

	const loading = false

	const handleSubmit = e => {
		e.preventDefault()

		if (!email.trim() || !password.trim()) {
			toast.error('Please, fill all fileds')
			return
		}

		login(email, password)
		setEmail('')
		setPassword('')
	}
	return (
		<div className={styles.formWrapper}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h1 className={styles.title}>Login</h1>
				<label>
					<span>Email:</span>
					<input
						type='email'
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>Password:</span>
					<input
						type='password'
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				<div className='button-wrappers'>
					<p>
						<Link to='/signup'> If you don't have account </Link>
					</p>
					{!loading && <button>Login</button>}
					{loading && (
						<button className={styles.disabled} disabled>
							Loading...
						</button>
					)}
				</div>
			</form>
		</div>
	)
}

export default Login
