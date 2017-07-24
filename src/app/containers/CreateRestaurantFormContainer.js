import React from 'react';

import FormDecoratorComponent from '../components/FormDecorator';
import CreateRestaurantForm from '../containers/CreateRestaurantForm';
import { saveRestaurant } from '../utils/api/restaurants';

const CreateRestaurantFormContainer = (props) => (
    <FormDecoratorComponent title="Example">
      <CreateRestaurantForm
        onChangeScreen={props.onChangeScreen}
        onSubmit={saveRestaurant}
      />
    </FormDecoratorComponent>
)

export default CreateRestaurantFormContainer;
