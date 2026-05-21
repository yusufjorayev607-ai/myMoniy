import { signInWithEmailAndPassword } from 'firebase/auth'
import { useGlobalContext } from './useGlobalContext'
import { auth } from '../firebase/firebaseConfig'
import { toast } from 'sonner'

export const useLogin = () => {
	const { dispatch } = useGlobalContext()
	const login = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user = userCredential.user
				dispatch({ type: 'LOGIN', payload: user })
				toast.success('Welcome back !')
			})
			.catch(error => {
				const errorCode = error.code
				console.log(errorCode)
				const errorMessage = error.message
				toast.error(errorMessage)
			})
	}
	return { login }
}
