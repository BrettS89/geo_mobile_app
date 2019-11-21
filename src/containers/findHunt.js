import findHunt from '../components/findHunt';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as huntsActions from '../redux/actions/hunts';

function mapStateToProps({ hunts: { hunts } }) {
  return {
    state: {
      hunts,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...huntsActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(findHunt);
