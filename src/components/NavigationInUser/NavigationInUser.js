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
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NavigationInUser.css';
import Link from '../Link';
import cookie from 'react-cookies'
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import history from '../../core/history';

class NavigationInUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 1}
  }

  static propTypes = {
    username: PropTypes.string,
  };

  componentWillMount() {
    if (cookie.load('userName') != null) {
      console.log(cookie.load('userName'))
      this.setState({
        username: cookie.load('userName')
      })
    } else {
      this.setState({
        userid: null
      })
    }
  }

  logOut(){
    cookie.remove('id')
    cookie.remove('userName')
    cookie.remove('accountId')
    window.location = '/';
  }  

  render() {
    return (
      <div>
        <div className={s.root} role="navigation">
          <Link className={s.link} to="/#">Bienvenido {this.state.username}</Link>
          <span className={s.spacer}> | </span>
          <Link className={s.link} to="/#">Preferencias</Link>
          <Link className={cx(s.link, s.highlight)} onClick={this.logOut}>Logout</Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NavigationInUser);
