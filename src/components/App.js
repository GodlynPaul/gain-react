import React from 'react';
import Menu from './Menu'

export default class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   let users = [];
  //   for (let i = 1; i < 11; i++) {
  //     users.push({
  //       id:'id'+i,
  //       username:'empname'+i,
  //       job:'Jobid'+i
  //     })
  //   }
  //   this.state ={
  //     users:users,
  //   }
  // }
  render(){
    return (
      // <UserList users={this.state.users}/>
      <div className="container">
        <div className="row">
          <Menu/>
        </div>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}
