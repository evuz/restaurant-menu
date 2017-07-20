import React from 'react';

import './index.css';

const RestaurantListItem = ({ item, onClickItem }) => (
  <li
    className="restaurant_list_item_component"
    onClick={onClickItem}
  >
    {item.image ? <img src={item.image} alt={item.name} /> : null}
    <div className="info">
      <span>{item.name}</span>
      <span>{item.address}</span>
      <span>{item.city}</span>
    </div>
    <div className="contact">
      <span>{item.tel}</span>
      <a href={item.url}>Go to Website</a>
    </div>
  </li>
);

export default RestaurantListItem;
