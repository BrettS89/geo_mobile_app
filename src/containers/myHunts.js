import myHunts from '../components/myHunts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as huntActions from '../redux/actions/hunt';

function mapStateToProps({ hunts: { myHunts } }) {
  return {
    state: {
      myHunts,
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

export default connect(mapStateToProps, mapDispatchToProps)(myHunts);
