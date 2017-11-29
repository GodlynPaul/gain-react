// export function reducers (state,action){
//   return state;
// }

import {combineReducers} from 'redux';
import users from './users';

export const reducers = combineReducers({
  users:users,
})
// stateProperty : name of the reducer that handle

export function reducerCall (state,action,reducerClass){
 const[,method] = action.type.split('.');  //get methodName into method using destructuring ES6
 const methods = Object.getOwnPropertyNames(reducerClass).filter(name=>{
    if(name!='length' && name!='name' && name!='prototype'){
      return name;
    }
  });
  if(methods.find(x=> x===method)){
    const new_state = cloneObject(state);
    return reducerClass[method](new_state,action)
  }else{
    return state
  }
}

/*
 * Cloning  the object
 */
function cloneObject(obj){
  console.log(obj);
  return JSON.parse(JSON.stringify(obj))
}
