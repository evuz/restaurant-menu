import { connect } from 'react-redux';

import HeaderComponent from '../components/Header';
import { loginGoogle } from '../reducers/user';

const mapStateToProps = (state) => ({
  img: state.user.photoURL
})

const mapDispatchToProps = {
  onClickImg: loginGoogle
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
