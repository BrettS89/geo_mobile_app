import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import citySearchModal from '../components/citySearch';
import * as citySearchActions from '../redux/actions/citySearch';

function mapStateToProps({ citySearch: { searchResults } }) {
  return {
    state: {
      searchResults,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...citySearchActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(citySearchModal);
