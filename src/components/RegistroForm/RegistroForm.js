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
import s from './RegistroForm.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/user';

class RegistroForm extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      lastname: null,
      name: null,
      typeUser: null
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.lastnameChange = this.lastnameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  
  }

  static propTypes = {
    typeUser: PropTypes.number.isRequired,
  };

  usernameChange = (e) => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }
  emailChange = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }
  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }
  lastnameChange = (e) => {
    e.preventDefault();
    this.setState({ lastname: e.target.value });
  }
  passwordChange = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  handleLogin = (e) => {
    e.preventDefault();
    const usuario = {
      email: this.state.email,
      username: this.state.username,
      firstName: this.state.name,
      lastname: this.state.lastname,
      password: this.state.password,
      accountId: 1,
      location: "Costa Rica",
      countryId: 1,
      createdAt: "2017-06-17",
      verifiedAt:  "2017-06-17"
    };

    this.props.actions.user.register(usuario).then(() => {
      const { user } = this.props;
      console.log(user)
    })
  }

  componentWillMount(){
    console.log(this.props.typeUser)

  }

  render() {
    const { email, password, name, lastname, username } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Card className={s.formContainer}>
            <CardText>
              <TextField
                onChange={e => this.usernameChange(e)}
                type="text"
                floatingLabelText="Username"
                fullWidth
                value={username}
              />
              <TextField
                onChange={e => this.emailChange(e)}
                type="text"
                floatingLabelText="Email"
                fullWidth
                value={email}
              />
              <TextField
                onChange={e => this.nameChange(e)}
                type="text"
                floatingLabelText="Nombre"
                fullWidth
                value={name}
              />
              <TextField
                onChange={e => this.lastnameChange(e)}
                type="text"
                floatingLabelText="Apellidos"
                fullWidth
                value={lastname}
              />
              <TextField
                onChange={e => this.passwordChange(e)}
                type="password"
                floatingLabelText="Constraseña"
                fullWidth
                value={password}
              />
              <RaisedButton
                label="Registro"
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
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      user: bindActionCreators(userActions, dispatch),
    },
  };
}
const EnhancedLogin = connect(mapStateToProps, mapDispatchToProps)(RegistroForm);

export default withStyles(s)(EnhancedLogin);