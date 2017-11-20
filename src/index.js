import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppRender from './pagedraw/desktop_hd';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Monty Python and the Holy Grail',
            movie_year: '1975',
            movie_description: "King Arthur and his knights embark on a low-budget search for the Grail, encountering many, very silly obstacles.",
            director: 'Terry Gilliam, Terry Jones',
            img_src: "https://nerdist.com/wp-content/uploads/2015/08/Holy-Grail-re-release-080415.jpg",
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
            director={this.state.director}
            movie_year={this.state.movie_year}
            movie_description={this.state.movie_description}
            reviews={this.state.reviews}
            rating={this.state.rating}
            commentBeingTyped={this.state.commentBeingTyped}
            onChangeComment={this.onChangeComment.bind(this)}
            addComment={this.addComment.bind(this)}
            setRating={this.setRating.bind(this)} />;
    }

    onChangeComment(e) {
        this.setState({commentBeingTyped: e.target.value});
    }

    addComment() {
        const new_reviews = this.state.reviews.concat([{content: this.state.commentBeingTyped}]);
        this.setState({reviews: new_reviews, commentBeingTyped: ''});
    }

    changeMovie() {
        this.setState({
            title: 'Pulp Fiction',
            movie_year: '1994',
            movie_description: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            director: 'Quentin Tarantino',
            img_src: "https://ucarecdn.com/5e0a6047-d3e0-46f4-bbe6-c095fb64996a/",
        });
    }

    setRating(n) {
        this.setState({rating: n});
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
