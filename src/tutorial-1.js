import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppRender from './pagedraw/artboard';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Pulp Fiction',
            img_src: "https://ucarecdn.com/5e0a6047-d3e0-46f4-bbe6-c095fb64996a/"
        };
    }

    render() {
        return <AppRender title={this.state.title} img_src={this.state.img_src}
            changeMovie={this.changeMovie.bind(this)} />;
    }

    changeMovie() {
        this.setState({
            title: 'Back to the Future',
            img_src: "https://ucarecdn.com/29b73fb5-8421-46bd-adf0-740793a622a7/"
        });
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
