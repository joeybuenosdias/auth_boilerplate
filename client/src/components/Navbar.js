//LIBRARIES & PACKAGES
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

//ACTIONS
import { logout } from '../actions/user';

const links = [
	{ name: 'home', path: '/' },
	{ name: 'about', path: '/about' }
];

const authenticatedLinks = [
	{ name: 'dashboard', path: '/dashboard' },
	{ name: 'logout' }
];

const unAuthenticatedLinks = [
	{ name: 'login', path: '/signin' },
	{ name: 'register', path: '/register' }
];

class Navbar extends React.Component {
	buildNavs = (navs) => {
		let { location, history, dispatch } = this.props;
		return navs.map((nav, i) => {
			return (
				<Menu.Item
					key={i}
					active={nav.name !== 'logout' && nav.path === location.pathname}
					name={nav.name}
				>
					{nav.name === 'logout' ? (
						<a
							style={{ cursor: 'pointer' }}
							onClick={() => {
								dispatch(logout());
								history.push('/login');
							}}
						>
							{nav.name}
						</a>
					) : (
						<NavLink to={nav.path}>{nav.name}</NavLink>
					)}
				</Menu.Item>
			);
		});
	};

	render() {
		let { id } = this.props;
		let navs;

		if (id) {
			navs = [...links, ...authenticatedLinks];
		} else {
			navs = [...links, ...unAuthenticatedLinks];
		}

		return <Menu>{this.buildNavs(navs)}</Menu>;
	}
}

const mapStateToProps = (state) => {
	return { id: state.user._id };
};

export default withRouter(connect(mapStateToProps)(Navbar));
