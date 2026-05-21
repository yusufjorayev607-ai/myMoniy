import { useState } from 'react'
import styles from './Auth.module.css'
import { useSignup } from '../hooks/useSignuop'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

function Signup() {
	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { signup } = useSignup()

	const loading = false

	const handleSubmit = e => {
		e.preventDefault()

		if (!displayName.trim() || !email.trim() || !password.trim()) {
			toast.error('Please, fill all fileds')
			return
		}

		signup(displayName, email, password)

		setDisplayName('')
		setEmail('')
		setPassword('')
	}

	return (
		<div className={styles.formWrapper}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h1 className={styles.title}>Signup</h1>
				<label>
					<span>Display Name:</span>
					<input
						type='text'
						onChange={e => setDisplayName(e.target.value)}
						value={displayName}
					/>
				</label>
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
					<div className='button-wrappers'>
						<p>
							<Link to='/login'>If you have account</Link>
						</p>
						{!loading && <button>Signup</button>}
						{loading && (
							<button className={styles.disabled} disabled>
								Loading...
							</button>
						)}
					</div>
				</label>
			</form>
		</div>
	)
}

export default Signup
