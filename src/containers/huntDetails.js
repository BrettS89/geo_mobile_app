import HuntDetails from '../components/huntDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as huntActions from '../redux/actions/hunt';

function mapStateToProps({ hunts: { hunt } }) {
  return {
    state: {
      hunt,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...huntActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HuntDetails);
