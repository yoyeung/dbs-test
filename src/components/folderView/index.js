import React from 'react';
import TreeView from 'react-treeview';
import PropTypes from 'prop-types';

import './folderView.css';

class FolderView extends React.Component{
  
  handleClick(key) {
    const kList = key.split('.');
    let data = this.props.data;
    kList.forEach((key, index) => {
      if (index + 1 === kList.length) {
        data = data[parseInt(key, 10)];
      } else {
        data = data[parseInt(key, 10)].content;
      }
    });
    data.isCollapsed = !data.isCollapsed;
    this.props.updateFileTree(this.props.data);
  }

  renderThree(data, index = '') {
    let _index = index;
    return data.map((item, i) => {
      console.log('item', item);
      if (item.type === 'FILE') {
        return (<div className="tree-view__file" key={item.name}><i class="fas fa-file"></i> {item.name}</div>);
      }
      if (item.type === 'FOLDER') {
        const key = (_index.length === 0) ? `${i}` : `${_index}.${i}`;
        const label = (<span onClick={this.handleClick.bind(this, key)}><i class="fas fa-folder"></i> {item.name}</span>);
        return (
          <TreeView nodeLabel={label} key={key} defaultCollapsed={true}  collapsed={item.isCollapsed ? false : true}>
            {this.renderThree(item.content, key)}
          </TreeView>
        );
      }
      return '';
    });
  }

  render(){
    return this.renderThree(this.props.data);
  }
}
FolderView.propTypes = {
  data: PropTypes.object.isRequired,
  updateFileTree: PropTypes.func.isRequired
}
export default FolderView;