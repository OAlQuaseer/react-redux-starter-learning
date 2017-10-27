import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from './../common/TextInput';
import TextInput from './../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (

      <form>
        <h1>Manage Course</h1>
        <SelectInput />
        <TextInput />
      </form>

    );
};

CourseForm.propTypes = {
  course : PropTypes.object.isRequired,
  allAuthors : PropTypes.array,
  onSave : PropTypes.func.isRequired,
  onChange : PropTypes.func.isRequired,
  loading : PropTypes.bool,
  errors : PropTypes.object,
};

export default CourseForm;
