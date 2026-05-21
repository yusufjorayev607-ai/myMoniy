import { toast } from 'sonner'
import { auth } from '../firebase/firebaseConfig'
import { signOut } from 'firebase/auth'

export const useSignout = () => {
	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				toast.success('See you soon !')
			})
			.catch(error => {
				toast.error(error.message)
			})
	}
	return { signOutUser }
}
