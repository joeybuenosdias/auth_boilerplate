import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => (
	<div>
		<Navbar />
		<FetchUser>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<ProtectedRoute path='/dashboard' component={Dashboard} />
			<Route path='/register' render={ (props) => <Auth {...props} title='register'/> } />
			<Route path='/signin' render={ (props) => <Auth {...props} title='signin'/> } />
		</Switch>
		</FetchUser>
	</div>
);

export default App;
