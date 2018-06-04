import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  return (
    <ul className="menu__submenu">
      {
        props.items.map( item =>
          (<li
            key={ item.name }
            onClick={ item.action || '' }
            className={ (item.action ? 'click_able' : '') + ' menu__submenu-item' }>
            { item.name }
          </li>))
      }
    </ul>
  );
};
MenuItem.propTypes = {
  item: PropTypes.array
}
export default MenuItem;