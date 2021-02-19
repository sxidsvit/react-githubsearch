import React from 'react'
import { GithubState } from './context/GitHub/githubState'
import { AlertState } from './context/Alert/AlertState'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Alert } from './components/Alert'
import { Results } from './components/Results'

function App() {
  return (
    <AlertState>
      <GithubState>
        <div className="wrapper container">
          <Header />
          <Alert />
          <Search />
          <Results />
        </div>
      </GithubState>
    </AlertState>
  );
}

export default App;
