import React from 'react';
import '../styles/components/App.css';
import { Home } from '../pages/Home';
import Layout from './Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/" component={TestPage} />
                {/* <Route exact path="/products" component={Products} /> */}
            </Switch>
        </Layout>

    </BrowserRouter>
);
function TestPage()
{
    return <h1>Test</h1>
}

export default App;
