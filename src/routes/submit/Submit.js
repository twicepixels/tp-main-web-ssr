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
import s from './Submit.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { Step, Stepper, StepLabel, } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import RegistroForm from '../../components/RegistroForm'
import CollaboradorForm from '../../components/CollaboradorForm'
import * as userActions from '../../actions/user';

class Submit extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 1,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props)
    if (this.props.user != null) {
      handleNext()
    }

  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div className={s.steperRegistro}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Crear usuario</StepLabel>
          </Step>
          <Step>
            <StepLabel>Información personal</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              {{
                0: (
                  <RegistroForm typeUser={3}/>
                ),
                1: (
                  <CollaboradorForm />
                )
              }[stepIndex]}

              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Atras"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                  
                />
                <RaisedButton
                  className={s.newtbutton}
                  label={stepIndex === 2 ? 'Terminar' : 'Siguiente'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Submit);
