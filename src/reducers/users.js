import {reducerCall} from './index';
export default function users(state={},action){
  // State should have a default empty value becoz when we first initialise the app
  // the state is empty and will return undefined
  let new_state;
  console.log("User is invoked :");
  console.log(action);
  switch (action.type) {
    case 'users.modalDeleteShow':
      new_state = JSON.parse(JSON.stringify(state));
      // JSONusgae : initial state must not be change it should be immutable
      // To ensure new state is a clone and not a reference
      new_state.modal = new_state.modal ? new_state.modal : {};
      console.log("Users switch case -new_state :");
      console.log(new_state);
      new_state.modal.list_delete ={
        show: true,
        id: action.id,
        username: action.username,
      };
      return new_state;
    default:
    console.log("DEFAULT - user case");
      return state;
  }
  // return reducerCall(state,action,reducerClass)
}


// class reducerClass{
//   static modalDeleteShow(new_state,action){
//     new_state = JSON.parse(JSON.stringify(state));
//     new_state.modal = new_state.modal ? new_state.modal : {};
//     new_state.modal.list_delete ={
//       show: true,
//       id: action.id,
//       username: action.username,
//     };
//     return new_state;
//   }
//   static modalDeleteHide(new_state,action){
//     new_state.modal.list_delete ={
//       show: false,
//       id: 0,
//       username: '',
//     };
//     return new_state;
//   }
//   static delete(new_state,action){
//     for (const index in new_state.list){
//       if(new_state.list[index].id === action.id){
//         new_state.list.splice(index,1);
//         break;
//       }
//     }
//     return new_state;
//   }
//
// }
