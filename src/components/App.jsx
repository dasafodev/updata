<<<<<<< HEAD
import React from 'react';
import '../styles/components/App.css';
import { Home } from '../pages/Home';
import Layout from './Layout';
import { Categories } from '../pages/Categories';
import { Products } from '../pages/Products';
import { WeAre } from '../pages/WeAre';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/" component={TestPage} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/categories" component={Categories} />
                <Route exact path="/weare" component={WeAre} />  
            </Switch>
        </Layout>

    </BrowserRouter>
);
function TestPage()
{
    return <h1>Test</h1>
}

export default App;
=======
import React from 'react';
import '../styles/components/App.css';
import { Home } from '../pages/Home';
import Layout from './Layout';
import { Categories } from '../pages/Categories';
import { Products } from '../pages/Products';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/" component={TestPage} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/categories" component={Categories} /> 
            </Switch>
        </Layout>

    </BrowserRouter>
);
function TestPage()
{
    return <h1>Test</h1>
}

export default App;
>>>>>>> 23d019b6b6bd6091dd2e8460a77a20a7ca563b37
