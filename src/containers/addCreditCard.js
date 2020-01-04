import AddCreditCard from '../components/addPaymentMethod';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/user';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...userActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(AddCreditCard);
