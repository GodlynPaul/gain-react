import React from 'react';
import {Button,Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';

// export default class UserListElements extends React.Component{
class UserListElements extends React.Component{
  constructor(props){
    super(props);
    this.modalDeleteShow = this.modalDeleteShow.bind(this);
  }
  render(){
    let user= this.props.user;
    return(
      <tr>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.job}</td>
        <td>
          <a href={'/user-edit/'+user.id}>
            <Button bsSize="xsmall">
              Delete
              <Glyphicon glyph="edit"/>
            </Button>
          </a>
        </td>
        <td>
          <Button bsSize="xsmall" data-id={user.id} data-username={user.username}
            onClick={this.modalDeleteShow}>
            Delete
            <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
    )
  }
  modalDeleteShow(event){
    const user_id = Number(event.target.dataset.id);
    const user_name = Number(event.target.dataset.username);
    this.props.dispatch({
      type:'user.modalDeleteShow',
      id:user_id,
      username:user_name,
    })
  }
}

UserListElements.propTypes = {
  user : React.PropTypes.object.isRequired
}

export default connect()(UserListElements)
