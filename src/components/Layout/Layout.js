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
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import HeaderInUser from '../HeaderInUser';
import Feedback from '../Feedback';
import Footer from '../Footer';
import cookie from 'react-cookies'
import { fade } from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const cmsTheme = {
  palette: {
    primary1Color: '#1E6583', //Color de los botones primarios
    primary2Color: '#EB465A', //ok
    primary3Color: '#5D6A75',
    accent1Color: '#C13A4A',
    accent2Color: '#D7E7ED', //Color de fondo del toolbar
    accent3Color: '#6B7781',
    textColor: '#111416',
    alternateTextColor: '#FDFFFC',
    canvasColor: '#FDFFFC',
    borderColor: '#217092', //color del borde de los inputs
    disabledColor: fade('#111416', 0.3),
    pickerHeaderColor: '#EB465A',
    clockCircleColor: fade('#111416', 0.07),
    shadowColor: '#4D5760',
  },
};

class Layout extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    userid: PropTypes.number,
  };

  componentWillMount() {
    if (cookie.load('id') != null) {
      this.setState({
        userid: cookie.load('id')
      })
    } else {
      this.setState({
        userid: null
      })
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(cmsTheme)}>
        <div>
        { this.state.userid ? (
            <HeaderInUser />
          ) : (
            <Header />
          )}
          <div>
            {this.props.children}
          </div>
        <Footer />
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
