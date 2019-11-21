import HuntDetails from '../components/huntDetails';
import { connect } from 'react-redux';

function mapStateToProps({ hunts: { hunt } }) {
  return {
    state: {
      hunt,
    },
  };
}

export default connect(mapStateToProps)(HuntDetails);
