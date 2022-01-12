import ReactDOM from 'react-dom';
import { StrictMode } from 'react/cjs/react.production.min';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom/cjs/react-router-dom.min';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <header>
          <Link to='/'>
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path='/details/:id'>
            <Details />
          </Route>
          <Route path='/'>
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
