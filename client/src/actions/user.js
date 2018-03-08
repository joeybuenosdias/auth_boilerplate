import axios from 'axios';

export const logout = () => {
	return (dispatch) => {
		axios.delete('/api/auth/sign_out').then(() => dispatch(currentUser()));
	};
};

const currentUser = (user = {}) => {
	let info = user.data;
	return { type: 'USER', user: info };
};
