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
import s from './HeaderInUser.css';
import NavigationInUser from '../NavigationInUser';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import cookie from 'react-cookies'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Link from '../Link';

const styles = {
  customWidth: {
    width: 200,
  },
};

class HeaderInUser extends React.Component {

  static propTypes = {
    accountType: PropTypes.number,
  };

   constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  componentWillMount() {
    if (cookie.load('accountId') != null) {
      this.setState({
        accountType: cookie.load('accountId')
      })
    } else {
      this.setState({
        accountType: null
      })
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <NavigationInUser />
          <Link className={s.brand} to="/">
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="38" height="38" alt="React" />
            <span className={s.brandTxt}>Twice Pixels</span>
          </Link>
        </div>
        <div>
          {{
            2: (
              <Toolbar>
                <ToolbarGroup firstChild={true}>
                  <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Cartera" />
                    <MenuItem value={2} primaryText="Resumen de ganancias" />
                    <MenuItem value={3} primaryText="Ganacias aplazadas" />
                    <MenuItem value={4} primaryText="Historial de pago" />
                    <MenuItem value={5} primaryText="Colaboradores recomendados" />
                    <MenuItem value={6} primaryText="Centro fiscal" />
                  </DropDownMenu>
                  <ToolbarSeparator /> 
                  <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Mejoras de rendimiento" />
                    <MenuItem value={2} primaryText="Foro" />
                    <MenuItem value={3} primaryText="Bloq colaboradores" />
                  </DropDownMenu>
                  <ToolbarSeparator /> 
                </ToolbarGroup>
                <ToolbarGroup>
                  <FontIcon className="muidocs-icon-custom-sort" />
                  <ToolbarTitle text="Ingresos no pagados: USD 0,00" />
                  <ToolbarSeparator /> 
                  <Link to="/upload">
                    <RaisedButton label="Subir contenido" primary={true} />
                  </Link>
                </ToolbarGroup>
              </Toolbar>
            )
          }[this.state.accountType]}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HeaderInUser);
