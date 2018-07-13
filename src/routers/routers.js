import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import MainDashBoard from '../components/MainDashboard';
import NotFoundPage from '../components/NotFoundPage';
import Manage from '../components/Manage';
import Report from '../components/Reports';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={MainDashBoard} />
                <Route path="/reports" component={Report} />
                <Route path="/manage" component={Manage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)


export default AppRouter;