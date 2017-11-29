import React from 'react';
import UserListElements from './UserListElements';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import UserDelete from './UserDelete';

// export default class UserList extends React.Component{
class UserList extends React.Component{
  render(){
    return (
      <div>
        <Table  bordered hover responsive striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Job</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user,index)=>{
              return (
                <UserListElements  key={user.id} user={user}/>
              )
            })}
          </tbody>
        </Table>
        <UserDelete/>
      </div>
    )
  }
}

// UserList.propTypes = {
//   users : React.PropTypes.object.isRequired
// }

function mapStateToProps(state){
  console.log(state);
  return ({
    users : state.users.list,
  })
}
export default connect(mapStateToProps)(UserList);

// To define what we need to fetch from state we need to wrap our class using connect()
// When we do this we should no export the main class
// connect take 2 arguments (Mapping of the state function)(Mapping of the store dispatch - implicit by default)
