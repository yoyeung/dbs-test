import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './editorGroup.css';

export default ({children}) => (<div className='editor-group'>
  <Tabs>
    <TabList>
      <Tab>Title 1 <i class="fas fa-times"></i></Tab>
      <Tab>Title 2 <i class="fas fa-times"></i></Tab>
    </TabList>

    <TabPanel>
      Any content 1
    </TabPanel>
    <TabPanel>
      Any content 2
    </TabPanel>
  </Tabs>
</div>);