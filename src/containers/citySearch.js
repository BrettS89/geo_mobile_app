import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import citySearchModal from '../components/citySearch';
import * as huntsActions from '../redux/actions/hunts';

function mapStateToProps({ hunts: { cities, searchTerm } }) {
  return {
    state: {
      cities,
      searchTerm,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...huntsActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(citySearchModal);
