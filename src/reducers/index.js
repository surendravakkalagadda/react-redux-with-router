import {combineReducers} from 'redux';
import RegisteredUser from './reducer-registered-user'

const allReducers = combineReducers({
  user: RegisteredUser
});
export default allReducers;
