import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputComponent from '../components/Input';

const CreateRestaurantForm = (props) => {
  const formFields = [
    { name: 'name', type: 'text', placeholder: 'Name' },
    { name: 'city', type: 'text', placeholder: 'City' },
    { name: 'address', type: 'text', placeholder: 'Address' },
    { name: 'postalCode', type: 'text', placeholder: 'Postal Code' },
    { name: 'tel', type: 'text', placeholder: 'Telephone' },
    { name: 'image', type: 'text', placeholder: 'Image' },
    { name: 'url', type: 'text', placeholder: 'Website' },
  ];

  const fieldsRenderer = formFields.map((field) => (
    <Field
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

export default reduxForm({ form: 'example' })(CreateRestaurantForm)
