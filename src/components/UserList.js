import React from 'react';
import UserListElements from './UserListElements';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import UserDelete from './UserDelete';
import {Pagination} from 'react-bootstrap';
import {push} from 'react-router-redux';

// export default class UserList extends React.Component{
class UserList extends React.Component{
  constructor(props){
    super(props);
    this.changePage = this.changePage.bind(this);
  }
  render(){
    const per_page = 10;
    const pages = Math.ceil(this.props.users.length/per_page);
    const current_page = this.props.page;
    const start_offset = (current_page-1)*per_page;
    let start_count = 0;

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
              if(index>=start_offset && start_count < per_page){
                start_count++;
                return (
                  <UserListElements  key={user.id} user={user}/>
                )
              }
            })}
          </tbody>
        </Table>
        <Pagination className="user-pagination pull-right" bsSize="medium"
          maxButtons={10} first last next prev boundaryLinks items={pages} activePage={current_page}
          onSelect={this.changePage}/>
        <UserDelete/>
      </div>
    )
  }
  changePage(page){
    this.props.dispatch(push('/?page='+page));
  }
}

// UserList.propTypes = {
//   users : React.PropTypes.object.isRequired
// }

function mapStateToProps(state){
  console.log(state);
  return ({
    users : state.users.list,
    page: Number(state.routing.locationBeforeTransitions.query.page) ||1,
  })
}
export default connect(mapStateToProps)(UserList);

// To define what we need to fetch from state we need to wrap our class using connect()
// When we do this we should no export the main class
// connect take 2 arguments (Mapping of the state function)(Mapping of the store dispatch - implicit by default)
