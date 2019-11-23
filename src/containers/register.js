import Register from '../components/register';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../redux/actions/auth';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...authActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Register);
