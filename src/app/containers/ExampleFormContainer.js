import React from 'react';

import FormDecoratorComponent from '../components/FormDecorator';
import ExampleForm from '../containers/ExampleForm';

const ExampleContainer = (props) => (
    <FormDecoratorComponent title="Example">
      <ExampleForm
        onChangeScreen={props.onChangeScreen}
        onSubmit={(values) => console.log(values)}
      />
    </FormDecoratorComponent>
)

export default ExampleContainer;
