import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/ForgotPassword';
import ChangePassword from './pages/Auth/ChangePassword'
import App from './pages/App';
import RegisterProject from './pages/App/RegisterProject'
import NotFound from './pages/NotFound';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
			)
		}
	/>
);

export default function Routes() {
	// const [inProp, setInProp] = useState(false);

	const location = useLocation();
	return (
		<Switch location={location}>
				<Route exact path="/" component={Login} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/forgot" component={ForgotPassword} />
				<Route path="/change/:id" component={ChangePassword} />
				<PrivateRoute exact path="/app" component={App}/>
				<PrivateRoute exact path="/app/register" component={RegisterProject} />

				<Route path="*" component={NotFound} />
		</Switch>
	);
  }