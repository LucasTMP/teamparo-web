import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import ong from './ong/reducer';


export default combineReducers({
  auth,
  user,
  ong
});
