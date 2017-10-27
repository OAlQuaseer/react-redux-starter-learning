import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coursesActions from './../../actions/coursesActions';
import PropTypes from 'prop-types';
import CourseList from './CourseList';



class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course : {title : ""}
    };
    // //it recommended to bind our functions to "this" context here (this of our CoursesPage component) in the constructor--> performance impact ??
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);

  }

  // onTitleChange(event) {
  //   console.log("input text changed");
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course:course});
  // }
  //
  // onClickSave(){
  //   this.props.actions.createCourse(this.state.course);
  // }


  render(){
    //destructuring
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
        {/*<h2>Add courses</h2>*/}
        {/*<input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>*/}
        {/*<input type="submit" value="Save" onClick={this.onClickSave}/>*/}
      </div>
    );
  }


}

CoursesPage.propTypes = {
  courses : PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired,

};

function mapStateToProps(state){
  return {
    courses : state.courses,
  };
}

function mapDispatchToProps (dispatch){
  return {
    actions : bindActionCreators(coursesActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
