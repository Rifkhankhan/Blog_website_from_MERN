import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../Pages/Home/Home'

// import Home from '../Pages/Home/Home'


const Routers = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	// const PrivateRoute = ({ children }) => {
	// 	const isAuthenticated = useSelector(state => state.netflixAuth.isAuthenticated)
	// 	return isAuthenticated ? <>{children}</> : <Navigate to="/netflix" />;
	// }

	// const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	// const isAuthenticated = useSelector(
	// 	state => state.netflixAuth.isAuthenticated
	// )

	// useEffect(() => {
	// 	dispatch(netflixAuthActions.autoLogin())
	// }, [dispatch])

	//   console.log(isAuthenticated);
	return (
		<Routes>
		 <Route path="/" element={<Home />} />



		 	{/* {isAuthenticated && (
		// 		<Route path="/netflix/profile" element={<NetflixProfile />}>
		// 			<Route index element={<Movies />} />
		// 			<Route path="movies" element={<Movies />} />
		// 			<Route path="series" element={<Series />} />
		// 			<Route path="users" element={<Users />} />
		// 			<Route path="likes" element={<LikesComponents />} />
		// 			<Route path="unlikes" element={<DisLikeComponents />} />
		// 			<Route path="yourVideos" element={<YourVideosComponent />} />
		// 			<Route path="downloads" element={<DownloadsComponent />} />
		// 			<Route path="watchLater" element={<WatchLaterComponent />} />
		// 			<Route path="category" element={<AddCategory />} />
		// 			<Route path="*" element={<Series />} />
		// 		</Route>
		// 	)} */}

	

		

		

		</Routes>
	)
}

export default Routers
