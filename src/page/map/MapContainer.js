// @flow
import {connect} from 'react-redux';
import {Map} from '../map/Map';
import {loadMap} from '../../actions/map.action';

const mapStateToProps = (state) => {
  const {test: maps} = state;
  return {maps};
};

export default connect(mapStateToProps, {loadMap})(Map);
