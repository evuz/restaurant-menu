import React from 'react';

const RestaurantListComponent = ({ list }) => {
  const itemsRenderer = list.map((item) => (
    <li>{item.name}</li>
  ))
  return (
    <ul>
      {itemsRenderer}
    </ul>
  )
};

export default RestaurantListComponent;
