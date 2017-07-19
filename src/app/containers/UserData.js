import { connect } from 'react-redux';

import UserDataComponent from '../components/UserData';

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(UserDataComponent);
