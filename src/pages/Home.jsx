// styles
import styles from './Home.module.css'
// custom hooks
import { useCollection } from '../hooks/useCollection'
// components
import TransactionsList from '../components/TransactionsList'
import TransactionForm from '../components/TransactionForm'
// global context
import { useGlobalContext } from '../hooks/useGlobalContext'

function Home() {
	const { user } = useGlobalContext()
	const { data: transactions } = useCollection('transactions', [
		'uid',
		'==',
		user.uid,
	])

	return (
		<div className={`${styles.home} container`}>
			{transactions && <TransactionsList transactions={transactions} />}
			<div>
				<h2>Add New Transaction:</h2>
				<TransactionForm />
			</div>
		</div>
	)
}

export default Home
