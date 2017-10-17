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
            rating: 0,
            reviews: [
                {content: 'This is a test review'},
                {content: 'Oh hai, world!'}
            ],
            commentBeingTyped: ''
        };
    }

    render() {
        return <AppRender title={this.state.title} img_src={this.state.img_src}
            changeMovie={this.changeMovie.bind(this)}
            reviews={this.state.reviews}
            rating={this.state.rating}
            commentBeingTyped={this.state.commentBeingTyped}
            onChangeComment={(e) => this.setState({commentBeingTyped: e.target.value})}
            addComment={this.addComment.bind(this)}
            setRating={this.setRating.bind(this)} />;
    }

    addComment() {
        const new_reviews = this.state.reviews.concat([{content: this.state.commentBeingTyped}]);
        this.setState({reviews: new_reviews, commentBeingTyped: ''});
    }

    changeMovie() {
        this.setState({
            title: 'Back to the Future',
            img_src: "https://ucarecdn.com/29b73fb5-8421-46bd-adf0-740793a622a7/"
        });
    }

    setRating(n) {
        this.setState({rating: n});
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
