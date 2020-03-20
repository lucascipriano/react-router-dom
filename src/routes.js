import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Profile from './pages/profile';
import Notfound from './pages/notfound404';

const Routes = () =>(
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/profile" component={Profile}/>
            <Route path="*" component={Notfound}/>
        </Switch>
);

export default Routes;