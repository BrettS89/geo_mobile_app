import Login from '../components/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../redux/actions/auth';

function mapStateToProps({ auth: { loginError } }) {
  return {
    state: {
      loginError,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...authActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
