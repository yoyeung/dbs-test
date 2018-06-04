import React from 'react';
import './menu.css';
import MenuItem from './menuItem';

export default class Menu extends React.PureComponent {
  render() {
    return (
      <div className='menu'>
        <ul className='menu__list'>
          {  
            this.props.menu.map( item => 
              <li key={item.name} className={(item.subItems.length > 0 ? 'haveSubMenu': '')+' menu__item'} >
              {item.name}
              <MenuItem items={item.subItems}/>
              </li> 
            )
          }
        </ul>
      </div>
    );
  }
}