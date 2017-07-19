import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputComponent from '../components/Input';

const CreateRestaurantForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      name="name"
      component={InputComponent}
      type="text"
      placeholder="Name"
    />
    <Field
      name="city"
      component={InputComponent}
      type="text"
      placeholder="City"
    />
    <Field
      name="address"
      component={InputComponent}
      type="textarea"
      placeholder="Address"
    />
    <Field
      name="postalCode"
      component={InputComponent}
      type="text"
      placeholder="Postal Code"
    />
    <Field
      name="tel"
      component={InputComponent}
      type="text"
      placeholder="Telephone"
    />
    <Field
      name="image"
      component={InputComponent}
      type="text"
      placeholder="Image"
    />
    <Field
      name="url"
      component={InputComponent}
      type="text"
      placeholder="WebSite"
    />
    <div className="buttons">
      <button type="submit">
        Create
      </button>
    </div>
  </form>
)

export default reduxForm({ form: 'example' })(CreateRestaurantForm)
