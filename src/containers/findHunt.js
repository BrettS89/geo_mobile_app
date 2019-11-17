import findHunt from '../components/findHunt';
import { connect } from 'react-redux';

function mapStateToProps({ hunts }) {
  return {
    state: {
      hunts,
    },
  };
}

export default connect(mapStateToProps)(findHunt);
