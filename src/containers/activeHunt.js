import ActiveHunt from '../components/activeHunt';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as huntActions from '../redux/actions/hunt';

function mapStateToProps({ hunt: { currentlyHunting } }) {
  return {
    state: {
      hunt: currentlyHunting,
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

export default connect(mapStateToProps, mapDispatchToProps)(ActiveHunt);
