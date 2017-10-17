import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppRender from './pagedraw/artboard';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() {
        return <AppRender />;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
