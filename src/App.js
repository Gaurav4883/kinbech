import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Layouts/Home'
import {ThemeProvider} from '@mui/styles';
import generateTheme from './Services/Generate-theme';
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Login from "./Components/Login";
import List from "./Pages/List";
import Detail from "./Pages/Detail";
import BuyNow from "./Components/Buy-now";
import UserDashboard from "./Components/User-dashboard";
import Register from "./Components/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CallApi } from './Components/Context/ApiContext';
import ProductList from "./Components/Product-list";
import Category from './Components/Category';
import ContactDetail from './Components/Contact-detail';



const App = () => {
	const theme = generateTheme();
	const [data, setData] = useState();
	useEffect(() => {
		CallApi(`home/find-all`, []).then((response) => {
			let data = response?.data;
			if (data?.success) {
			  setData(data?.body);
			}
		  });
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header categories = {data?.home?.categories} cartItems={data?.cartItems}/>
				<ToastContainer />
				<div className="wrapper">
					<Routes>
						<Route path="/" element={<Home home={data?.home}/>}/>
						<Route path="/login" element={<Login/>}/>
						<Route path="/register" element={<Register/>}/>
						<Route path="/list" element={<List products = {data?.products}/>}/>
						<Route path="/detail" element={<Detail/>}/>
						<Route path="/buy-now" element={<BuyNow/>}/>
						<Route path="/profile" element={<UserDashboard/>}/>
						<Route path="/contact-us" element={<ContactDetail/>}/>
						<Route path="/category" element={<Category subCategories={data?.home?.subCategories} />}/>
						<Route path="/product" element={ <ProductList forYouProducts={data?.home?.forYouProducts} />}/>
					</Routes>
				</div>
				<Footer/>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;