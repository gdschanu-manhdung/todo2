import './App.css';
import React, {Component} from 'react';
import TodoList from './components/TodoList';
import { FILTER_ACTIVE } from './services/filter';
import { getAll, addToList } from './services/todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: FILTER_ACTIVE,
      items: getAll()
    }    
  }

  render() {
    let title = "Things to do";

    return (
      <div className='container'>
        <div className='row'>
          <TodoList title={title} addNew={this.addNew.bind(this)} changeFilter={this.changeFilter.bind(this)} {...this.state} />
        </div>
      </div>
    )
  }

  addNew(text) {
    let updatedList = addToList(this.state.items, {text, completed: false});
    this.setState({
      items: updatedList
    });
  }

  changeFilter(filter) {
    this.setState({filter: filter});
  }
}

export default App;
