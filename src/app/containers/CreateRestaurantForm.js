import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputComponent from '../components/Input';

const CreateRestaurantForm = (props) => {
  const formFields = [
    { name: 'name', type: 'text', placeholder: 'Name' },
    { name: 'address', type: 'text', placeholder: 'Address' },
    { name: 'city', type: 'text', placeholder: 'City', widthPercent: 40 },
    { name: 'postalCode', type: 'text', placeholder: 'Postal Code', widthPercent: 20 },
    { name: 'tel', type: 'text', placeholder: 'Telephone', widthPercent: 30 },
    { name: 'image', type: 'text', placeholder: 'Image' },
    { name: 'url', type: 'text', placeholder: 'Website' },
  ];

  const fieldsRenderer = formFields.map((field) => (
    <Field key={field.name}
      name={field.name}
      component={InputComponent}
      widthPercent={field.widthPercent}
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
