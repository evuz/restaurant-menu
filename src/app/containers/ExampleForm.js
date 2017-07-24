import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputComponent from '../components/Input';

const ExampleForm = (props) => {
  const formFields = [
    { name: 'name', type: 'text', placeholder: 'Name' },
    { name: 'description', type: 'text', placeholder: 'City' },
    { name: 'city', type: 'text', placeholder: 'Address' },
    { name: 'tel', type: 'number', placeholder: 'Telephone' },
  ];

  const fieldsRenderer = formFields.map((field) => (
    <Field key={field.name}
      name={field.name}
      component={InputComponent}
      type={field.type || 'text'}
      placeholder={field.placeholder || ''}
    />
  ))

  return (
    <form onSubmit={props.handleSubmit}>
      {fieldsRenderer}
      <div className="buttons">
        <button type="submit">
          Create
      </button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'example' })(ExampleForm)
