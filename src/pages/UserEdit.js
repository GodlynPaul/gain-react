import React from 'react';
import {PageHeader,Form,FormGroup,Col,Button,FormControl,InputGroup,Glyphicon} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';

export default class UserEdit extends React.Component{
  render(){
    return(
      <div>
        <PageHeader> USER EDIT </PageHeader>
      </div>
    );
  }
  // <Form horizontial>
  //   <Field name="username" component={UserEdit.renderUsername}/>
  //   <Field name="job" component={UserEdit.renderJob}/>
  //   <FormGroup>
  //     <Col smoffset={2} sm={8}>
  //       <Button type="submit"> Save </Button>
  //     </Col>
  //   </FormGroup>
  // </Form>


  // static renderUsername(props){
  //   return(
  //     <FormGroup>
  //       <Col sm={2}>Username</Col>
  //       <Col sm={8}>
  //         <FormControl {...props.input} id="username" type="text" placeholder="Username"/>
  //       </Col>
  //     </FormGroup>
  //   )
  // }
  // static renderJob(props){
  //   return(
  //     <FormGroup>
  //       <Col sm={2}>Job</Col>
  //       <Col sm={8}>
  //         <InputGroup>
  //           <FormControl {...props.input} id="job" type="text" placeholder="Job"/>
  //           <InputGroup.Addon>
  //             <Glyphicon glyph="briefcase"/>
  //           </InputGroup.Addon>
  //         </InputGroup>
  //       </Col>
  //     </FormGroup>
  //   )
  // }
}
/*
 *Decorate form Component
 */
// export default UserEdit = reduxForm({
//   form:'user_edit',
// })(UserEdit);
