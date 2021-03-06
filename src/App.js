import ReactDOM from 'react-dom';
import { StrictMode } from 'react/cjs/react.production.min';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom/cjs/react-router-dom.min';
import SearchParams from './components/SearchParams';
import Details from './components/Details';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <div className='container'>
        <Router>
          <header>
            <Link to='/'>
              <h1 className='title'>Adopt Me!</h1>
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
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
