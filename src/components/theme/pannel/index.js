import React from 'react';
import './pannel.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default ({children}) => (<div className='pannel'>
  <Tabs>
    <TabList>
      <Tab>Console <i class="fas fa-times"></i></Tab>
    </TabList>

    <TabPanel>
      Any content 1
    </TabPanel>
  </Tabs>
</div>);