import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import StatsPage from './pages/StatsPage'
import UserPage from './pages/UserPage'
import './App.scss'

const App = () => (
  <Router>
    <Switch>
      <Route path="/stats" component={ StatsPage } />
      <Route path="/user/:id" component={ UserPage } />
      <Route path="/" component={ MainPage } />
    </Switch>
  </Router>
)

export default App