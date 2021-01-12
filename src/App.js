import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

const App = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
