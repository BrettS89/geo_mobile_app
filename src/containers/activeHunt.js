import ActiveHunt from '../components/activeHunt';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps({ hunt: { currentlyHunting } }) {
  return {
    state: {
      hunt: currentlyHunting,
    },
  };
}

export default connect(mapStateToProps)(ActiveHunt);
