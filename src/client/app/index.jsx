import React from 'react';
import {render} from 'react-dom';
import DevTools from "mobx-react-devtools";

import Landing from './components/Landing/Landing.jsx';



class App extends React.Component {
    render() {
        return <div>
            <DevTools/>
            <Landing/>
        </div>
    }
}


render(
    <App/>, document.getElementById('app'));
