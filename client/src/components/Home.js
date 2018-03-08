import React from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';

const Home = ({ username }) => (
	<Container>
		<Header as="h1">{username ? `${username}` : 'Please Sign In'}</Header>
	</Container>
);

const mapStateToProps = (state) => {
	return { username: state.user.username };
};

export default connect(mapStateToProps)(Home);
