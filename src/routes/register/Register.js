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
import s from './Register.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RegistroForm from '../../components/RegistroForm'

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      lastname: null,
      name: null
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { email, password, name, lastname } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <RegistroForm typeUser={1}/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Register);
