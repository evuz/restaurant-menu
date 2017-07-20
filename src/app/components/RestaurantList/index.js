import React from 'react';

import RestaurantListItem from './item';

import './index.css';

const RestaurantListComponent = ({ list }) => {
  const itemsRenderer = list.map((item, index) => (
    <RestaurantListItem item={item} key={index}/>
  ))
  return (
    <ul className="restaurant_list_component">
      {itemsRenderer}
    </ul>
  )
};

export default RestaurantListComponent;
