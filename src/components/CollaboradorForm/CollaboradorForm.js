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
import s from './CollaboradorForm.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/user';
import * as collaboratorActions from '../../actions/collaborator';

class CollaboradorForm extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      identityCard: null,
      address1: null,
      address2: null,
      phoneNumber: null,
      postalCode: null,
      city: null,
      description: null
    };
    this.identityCardHandler = this.identityCardHandler.bind(this);
    this.address1Handler = this.address1Handler.bind(this);
    this.address2Handler = this.address2Handler.bind(this);
    this.phoneNumberHandler = this.phoneNumberHandler.bind(this);
    this.postaCodeHandler = this.postaCodeHandler.bind(this);
    this.cityHandler = this.cityHandler.bind(this);
    this.descriptionHandler = this.descriptionHandler.bind(this);
    this.handleRegistro = this.handleRegistro.bind(this);
    
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  identityCardHandler = (e) => {
    e.preventDefault();
    this.setState({ identityCard: e.target.value });
  }
  address1Handler = (e) => {
    e.preventDefault();
    this.setState({ address1: e.target.value });
  }
  address2Handler = (e) => {
    e.preventDefault();
    this.setState({ address2: e.target.value });
  }
  phoneNumberHandler = (e) => {
    e.preventDefault();
    this.setState({ phoneNumber: e.target.value });
  }
  postaCodeHandler = (e) => {
    e.preventDefault();
    this.setState({ postalCode: e.target.value });
  }
  cityHandler = (e) => {
    e.preventDefault();
    this.setState({ city: e.target.value });
  }
  descriptionHandler = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  handleRegistro = (e) => {
    e.preventDefault();

    if (this.props.user.data.accountId == null) {
      return
    }
    
    const data = {
        identityCard: this.state.identityCard,
        address1: this.state.address1,
        address2: this.state.address2,
        phoneNumber: this.state.phoneNumber,
        postalCode: this.state.postalCode,
        rating: 112,
        city: this.state.city,
        authorized: true,
        accountId: this.props.user.data.id,
        countryId: 1,
        description: this.state.description
    };

    this.props.actions.collaborator.register(data).then(() => {
      const { collaborator } = this.props;
      console.log(collaborator)
    })

  }

  render() {
    const { identityCard, address1, address2, phoneNumber, postalCode, city, description } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Card className={s.formContainer}>
            <CardText>
              <TextField
                onChange={e => this.identityCardHandler(e)}
                type="text"
                floatingLabelText="Identificación"
                fullWidth
                value={identityCard}
              />
              <TextField
                onChange={e => this.address1Handler(e)}
                type="text"
                floatingLabelText="Dirección"
                fullWidth
                value={address1}
              />
              <TextField
                onChange={e => this.address2Handler(e)}
                type="text"
                floatingLabelText="Dirección exacta"
                fullWidth
                value={address2}
              />
              <TextField
                onChange={e => this.phoneNumberHandler(e)}
                type="text"
                floatingLabelText="Número"
                fullWidth
                value={phoneNumber}
              />
              <TextField
                onChange={e => this.postaCodeHandler(e)}
                type="text"
                floatingLabelText="Código postal"
                fullWidth
                value={postalCode}
              />
              <TextField
                onChange={e => this.cityHandler(e)}
                type="text"
                floatingLabelText="Ciudad"
                fullWidth
                value={city}
              />
              <TextField
                onChange={e => this.descriptionHandler(e)}
                type="text"
                floatingLabelText="Descripción"
                fullWidth
                value={description}
              />
              <RaisedButton
                label="Registro"
                primary onTouchTap={e => this.handleRegistro(e)}
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
  return { user: state.user, collaborator: state.collaborator };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      user: bindActionCreators(userActions, dispatch),
      collaborator: bindActionCreators(collaboratorActions, dispatch)
    },
  };
}
const EnhancedLogin = connect(mapStateToProps, mapDispatchToProps)(CollaboradorForm);

export default withStyles(s)(EnhancedLogin);