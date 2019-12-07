import HuntDetails from '../components/huntDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as huntActions from '../redux/actions/hunt';

function mapStateToProps({ hunts: { hunt }, hunt: { insufficientTokensModal } }) {
  return {
    state: {
      hunt,
      modalVisible: insufficientTokensModal,
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
