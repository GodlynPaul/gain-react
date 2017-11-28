// export function reducers (state,action){
//   return state;
// }

import {combineReducers} from 'redux';
import users from './users';

export const reducers = combineReducers({
  users:users,
})
// stateProperty : name of the reducer that handle

export default function (state,action,reducerClass){
  
}
