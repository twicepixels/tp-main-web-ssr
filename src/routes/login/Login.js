/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/auth';
import cookie from 'react-cookies'
import history from '../../core/history';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  emailChange = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }

  passwordChange = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  componentWillMount() {
    if (cookie.load('userName') != null) {
      window.location = '/';
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    const credentials = {
      username: this.state.email,
      password: this.state.password,
    };
    
    this.props.actions.auth.login(credentials).then(() => {
      const { auth } = this.props;
      if (auth.data != null) {
        console.log(auth)
        cookie.save('id', auth.data.id, { path: '/' });
        cookie.save('userName', auth.data.userName, { path: '/' });
        cookie.save('accountId', auth.data.accountId, { path: '/' });
        window.location = '/';
      } else {
        //ERROR
      }
    });

  }

  render() {
    const { email, password } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Card className={s.formContainer}>
            <CardText>
              <TextField
                floatingLabelText="Usuario"
                fullWidth
                onChange={e => this.emailChange(e)}
                value={email}
              />
              <TextField
                type="password"
                floatingLabelText="Constraseña"
                fullWidth
                onChange={e => this.passwordChange(e)}
                value={password}
              />
              <RaisedButton
                label="Iniciar sesión"
                primary onTouchTap={e => this.handleLogin(e)}
                fullWidth
              />
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      auth: bindActionCreators(authActions, dispatch),
    },
  };
}
const EnhancedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withStyles(s)(EnhancedLogin);
