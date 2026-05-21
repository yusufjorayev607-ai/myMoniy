import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { useSignout } from '../hooks/useSignout'
function Navbar() {
	const { user } = useGlobalContext()
	const { signOutUser } = useSignout()

	return (
		<header className={styles.header}>
			<div className='container'>
				<Link className={styles.logo} to='/'>
					myMoney
				</Link>

				{user && (
					<div className={styles.avatar}>
						<span>{user.email}</span>
						<img src='https://picsum.photos/400' alt='' />
						<button onClick={signOutUser}>Logout</button>
					</div>
				)}

				{!user && (
					<nav>
						<NavLink to='/login'>Login</NavLink>
						<NavLink to='/signup'>Signup</NavLink>
					</nav>
				)}
			</div>
		</header>
	)
}

export default Navbar
