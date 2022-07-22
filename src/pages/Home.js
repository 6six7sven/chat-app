import React from "react";

import { Switch, Route } from "react-router";
import SignIn from "./SignIn";

function Home() {
    return <Switch>
        <Route>
            <SignIn />
        </Route>
    </Switch>
}

export default Home;