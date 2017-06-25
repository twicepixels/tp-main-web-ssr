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
import s from './Home.css';
import * as carouselActions from '../../actions/carousel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Parallax, Background  } from 'react-parallax';
import bg_Header from './imgs/header-background.png'
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/action/visibility';
import Link from '../Link';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'http://via.placeholder.com/640x640',
    title: 'Naturaleza',
    ceotitle: 'naturaleza',
    author: 'jill111',
  },
  {
    img: 'http://via.placeholder.com/640x640',
    title: 'Niños',
    ceotitle: 'ninnos',
    author: 'pashminu',
  },
  {
    img: 'http://via.placeholder.com/640x640',
    title: 'Día del padre',
    ceotitle: 'dia-del-padre',
    author: 'Danson67',
  },
  {
    img: 'http://via.placeholder.com/640x640',
    title: 'Tecnología',
    ceotitle: 'tecnologia',
    author: 'lusifert0912',
  }
];

class Home extends React.Component {

  getInitialState() {
    return {
      options: [],
    };
  }
  
  componentDidMount() {
    this.props.actions.fetchCarousel();
  }

  render() {
    const { carousel } = this.props;

    return (
      <div className={s.globalContainer}>

        <Parallax bgImage={bg_Header} bgHeight={'auto'} strength={0}>
          <div className={s.container}>
            <div className={s.searchContainer}>

                <AsyncTypeahead
                  {...this.state}
                  className={s.searchBox}
                  labelKey="login"
                  onSearch={this._handleSearch}
                  placeholder="Find the perfect stock photos, vectors and more..."
                  renderMenuItemChildren={this._renderMenuItemChildren}
                />

              </div>
          </div>
        </Parallax>

        <div className={s.headlineContainer}>
          <h1 className={s.headlineText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed purus egestas nunc viverra ornare. Vivamus imperdiet tempus consectetur.</h1>
        </div>

        <div className={s.categoriasContainer}>
          <div className={s.containerRuler}>
            <div className={s.headerContainer}>
              <spam className={s.tituloSecciones}>Categorias</spam>
            </div>
            <div style={styles.root}>
                <GridList style={styles.gridList} 
                  cols={2}
                  cellHeight={150}
                  padding={1}>
                  {tilesData.map((tile) => (
                    <GridTile
                      key={tile.title}
                      title={tile.title}
                      titleStyle={styles.titleStyle}
                      titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                      cols={1}
                      rows={2}>
                      <img src={tile.img} />
                    </GridTile>
                  ))}
                </GridList>
              </div>
          </div>
        </div>

        <div className={s.interesesContainer}>
          <div className={s.containerRuler}>
            <div className={s.headerContainer}>
              <spam className={s.tituloSecciones}>Interéses</spam>
            </div>
            <div style={styles.root}>
                <GridList style={styles.gridList} 
                  cols={2}
                  cellHeight={150}
                  padding={1}>
                  {tilesData.map((tile) => (
                      <GridTile
                        actionIcon={<Link to={`/image/${tile.ceotitle}`} ><IconButton><StarBorder color="white" /></IconButton></Link>}
                        key={tile.title}
                        title={tile.title}
                        titleStyle={styles.titleStyle}
                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        cols={1}
                        rows={2}>
                          
                            <img src={tile.img} />
                          
                      </GridTile>
                    
                  ))}
                </GridList>
              </div>
          </div>
        </div>

        <div className={s.trendingContainer}>
          <div className={s.containerRuler}>
            <div className={s.headerContainer}>
              <spam className={s.tituloSecciones}>Más buscados</spam>
            </div>
            <div style={styles.root}>
                <GridList style={styles.gridList} 
                  cols={2}
                  cellHeight={150}
                  padding={1}>
                  {tilesData.map((tile) => (
                    <GridTile
                      key={tile.title}
                      title={tile.title}
                      titleStyle={styles.titleStyle}
                      titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                      cols={1}
                      rows={2}>
                      <img src={tile.img} />
                    </GridTile>
                  ))}
                </GridList>
              </div>
          </div>
        </div>

        <div className={s.cierreContainer}>
          
        </div>

      </div>
    );
  }

  _renderMenuItemChildren(option, props, index) {
    return (
      <div>
      </div>
    );
  }

  _handleSearch(query) {
    
  }
}

function mapStateToProps(state) {
  return { carousel: state.carousel };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(carouselActions, dispatch),
  };
}
const EnhancedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default withStyles(s)(EnhancedHome);
