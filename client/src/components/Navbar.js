//LIBRARIES & PACKAGES
import React from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

//ACTIONS
import { logout } from '../actions/user';

const links = [{ name: 'HOME', path: '/' }, { name: 'ABOUT', path: '/about' }];

const authenticatedLinks = [
	{ name: 'DASHBOARD', path: '/dashboard' },
	{ name: 'LOG OUT' }
];

const unAuthenticatedLinks = [
	{ name: 'LOGIN', path: '/login' },
	{ name: 'REGISTER', path: '/register' }
];

class Navbar extends React.Component {
	buildNavs = (navs) => {
		let { location, history, dispatch } = this.props;
		return navs.map((nav, i) => {
			return (
				<Menu.Item
					key={i}
					active={nav.name !== 'LOG OUT' && nav.path === location.pathname}
					name={nav.name}
				>
					{nav.name === 'LOG OUT' ? (
						<Link
							style={{ cursor: 'pointer' }}
							onClick={() => {
								dispatch(logout());
								history.push('/login');
							}}
						>
							{nav.name}
						</Link>
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
