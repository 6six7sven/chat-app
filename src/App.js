import { Switch } from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css'
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import './styles/main.scss';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
		<Home />
	  </PrivateRoute>
    </Switch>
  );
}

export default App;
