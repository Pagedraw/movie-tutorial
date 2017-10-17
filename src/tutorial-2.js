import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppRender from './pagedraw/artboard';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Pulp Fiction',
            img_src: "https://ucarecdn.com/5e0a6047-d3e0-46f4-bbe6-c095fb64996a/",
            rating: 0
        };
    }

    render() {
        return <AppRender title={this.state.title} img_src={this.state.img_src}
            changeMovie={this.changeMovie.bind(this)}
            setRating={this.setRating.bind(this)} />;
    }

    setRating(n) {
        this.setState({rating: n});
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
