import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useGlobalContext } from './hooks/useGlobalContext'
function App() {
	const { user, authReady } = useGlobalContext()
	const routes = createBrowserRouter([
		{
			path: '/',
			element: (
				<ProtectedRoutes user={user}>
					<MainLayout />
				</ProtectedRoutes>
			),
			children: [
				{
					index: true,
					element: <Home />,
				},
			],
		},
		{
			path: '/login',
			element: user ? <Navigate to='/' /> : <Login />,
		},
		{
			path: '/signup',
			element: user ? <Navigate to='/' /> : <Signup />,
		},
	])
	return <>{authReady && <RouterProvider router={routes} />}</>
}

export default App
