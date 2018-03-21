import React from 'react';
import { Grid, Segment, Header, Form, Input, Button } from 'semantic-ui-react';
import { authenticate } from '../actions/user';
import { connect } from 'react-redux';

class Auth extends React.Component {
  defaults = { email: '', password: ''}
  state = {...this.defaults}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { title, history, dispatch} = this.props;
    let { email, password } = this.state;
    dispatch(authenticate(email, password, title, history))
  }

  render(){
    let { title } = this.props;
    let { email, password } = this.state;
    return (
      <Grid
        columns={1}
        centered
        verticalAlign='middle'
      >
        <Grid.Column width={8}>
          <Segment
            textAlign='center'
          >
          <Header>{title}</Header>
            <Form
              onSubmit={this.handleSubmit}
            >
              <Form.Field
                control={Input}
                name='email'
                label='email'
                required
                type='email'
                onChange={this.handleChange}
                value={email}
              />
              <Form.Field
                control={Input}
                name='password'
                label='password'
                required
                type='password'
                onChange={this.handleChange}
                value={password}
              />
              <Form.Field
                control={Button}
                content='submit'
              />
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect()(Auth);
