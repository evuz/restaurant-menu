import React from 'react';

import './index.css';

const FormDecoratorComponent = (props) => (
  <div className="form_decorator_component">
    <div className="form_decorator_card">
      <h3>
        { props.title || null}
      </h3>
      { props.children }
    </div>
  </div>
);

export default FormDecoratorComponent;
