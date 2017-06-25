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
import s from './Upload.css';
import Dropzone from 'react-dropzone'

class Upload extends React.Component {

    constructor() {
        super()
        this.state = { files: [] }
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
    };

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className={s.headlineText}>Agregar contenido</h1>
        <section className={s.containerDrop}>
            <div>
            <Dropzone className={s.dropzoneContent} onDrop={this.onDrop.bind(this)}>
                <p className={s.contentBriff}>Intente agregar algún archivo, arrastrandolo aquí o dando click y escogiendolo.</p>
            </Dropzone>
            </div>
            <aside>
            <h2 className={s.subheadlineText}>Archivos cargados</h2>
            <ul>
                {
                this.state.files.map(f => <li>{f.name} - {f.size} bytes</li>)
                }
            </ul>
            </aside>
        </section>
      </div>
    );
  }
}

export default withStyles(s)(Upload);
