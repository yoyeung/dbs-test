import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';

import Menu from './components/menu';
import LeftAside from './components/theme/leftAside';
import MainArea from './components/theme/mainArea';
import EditorGroup from './components/theme/editorGroup';
import Layout from './components/theme/layout';
import Pannel from './components/theme/pannel';
import Content from './components/content';
import FolderView from './components/folderView';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.updateFileTree = this.updateFileTree.bind(this);
    this.state= {
      data: [],
      addItem : undefined,
      menu: [{
        name: 'File',
        subItems:[{
          name: 'New Item',
          action: this.addItem
        }]
      },{
        name: 'Edit',
        subItems:[]
      }]
    }
    
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/getListItem')
    .then( (response) => {
      if (response.data) {
        this.setState({data: response.data});
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  addItem() {
    const newItemName = prompt("Please enter new item name");
    if (newItemName !== null && newItemName !== "") {
      axios.post('http://localhost:5000/api/addItem', { name: newItemName })
      .then( (response) => {
        this.setState({
          data: [...this.state.data, {
            "type": "FILE",
            "name": newItemName,
            "content": ""
          }]
        });
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
    
  }
  updateFileTree(data){
    this.setState({data});
  }
  render() {
    console.log(this.state);
    return (
      <Layout>
        <Menu menu={this.state.menu}/>
        <Content>
          <LeftAside>
            <Tabs>
              <TabList>
                <Tab>Structure</Tab>
                <Tab>Settings</Tab>
              </TabList>
              <TabPanel>
                <FolderView data={this.state.data} updateFileTree={this.updateFileTree} />
              </TabPanel>
              <TabPanel>
                Settings
              </TabPanel>
            </Tabs>
          </LeftAside>
          <MainArea>
            <EditorGroup></EditorGroup>
            <Pannel>
            </Pannel>
          </MainArea>
        </Content>
      </Layout>
    );
  }
}

export default App;
