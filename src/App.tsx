import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Lists from './Containers/Lists';
import { RootStore } from './Stores/RootStore';
import List from './Containers/List';

const rootStore = new RootStore();

export const RootStoreContext = React.createContext(rootStore);

function App() {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <div className="App">
        <h1>Todo App</h1>
        <Router>
          <Switch>
            <Route exact path="/">
              <Lists todoLists={rootStore.todoListStore.todoLists} />
            </Route>
            <Route exact path="/list/:listId">
              <List />
            </Route>
          </Switch>
        </Router>
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
