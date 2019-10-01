import React from 'react';
import { NavLink } from 'react-router-dom';
import tabs from '../api/tabs';

export class Tabs extends React.Component {
  state = {
    selectedItem: ''
  }
  componentDidUpdate(prevProps) {
    if(this.props.match.params.tabsId !== prevProps.match.params.tabsId) {
      this.setState({
        selectedItem: this.props.match.params.tabsId
      })
    }
  }
  
  render() {
    const { selectedItem } = this.state;
    const findTabContent = tabs.find(tab => tab.id === selectedItem) ;
    return (
      <>
        <div className="tabs_head">
          { tabs.map(tab => (
              <div key={tab.id} >
                <NavLink to={`/tabs/${tab.id}`} >
                  {tab.title}
                </NavLink>
            </div>
            ))}
        </div>
        <div className='tabs_content'>
          {  findTabContent ? <p >{findTabContent.content}</p> : null } 
        </div>
      </>
    )
  }
}