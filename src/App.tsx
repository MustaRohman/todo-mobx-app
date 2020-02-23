import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Lists from './Containers/Containers/Lists';
import { RootStore } from './Stores/RootStore';

const rootStore = new RootStore();

const RootStoreContext = React.createContext(rootStore);

function App() {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <div className="App">
        <h1>Todo App</h1>
        <Router>
          <Switch>
            <Route path="/">
              <Lists todoLists={rootStore.todoListStore.todoLists} />
            </Route>
          </Switch>
        </Router>
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
