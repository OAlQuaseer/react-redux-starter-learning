import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as coursesActions from './../../actions/coursesActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
    }

    render()
    {
        //destructuring
        const {x} = this.props;
        return (
          <div>
            <h1>Manage course</h1>
            {/*<CourseForm />*/}
          </div>

        );
    }


}

ManageCoursePage.propTypes = {
    //myProp: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        x: state.x,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(coursesActions, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
