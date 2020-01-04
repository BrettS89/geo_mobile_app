import Account from '../components/account';
import { connect } from 'react-redux';

function mapStateToProps({ user: { user } }) {
  return {
    state: {
      user,
    },
  };
}

export default connect(mapStateToProps)(Account);
