import logo from './logo.svg'
import './App.css'
import Header from './Components/Header/Header'
import Routers from './Router/Routers'
import { BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {

	
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routers />
			</BrowserRouter>
		</div>
	)
}

export default App
