import myHunts from '../components/myHunts';
import { connect } from 'react-redux';

function mapStateToProps({ hunts: { myHunts } }) {
  return {
    state: {
      myHunts,
    },
  };
}

export default connect(mapStateToProps)(myHunts);
