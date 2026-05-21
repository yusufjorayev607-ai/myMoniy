import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
export const useSignup = () => {
	const signup = (displayname, email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user = userCredential.user
				console.log(user)
			})
			.catch(error => {
				const errorCode = error.code
				const errorMessage = error.message
				console.log(errorMessage)
			})
	}
	return { signup }
}
