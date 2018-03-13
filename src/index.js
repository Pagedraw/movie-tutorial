import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppRender from './pagedraw/desktop_hd'

class App extends Component {
  constructor() {
    super();
    this.state = {
        movie_title: 'Monty Python and the Holy Grail',
        movie_year: '1975',
        movie_description: "King Arthur and his knights embark on a low-budget search for the Grail, encountering many, very silly obstacles.",
        director: 'Terry Gilliam, Terry Jones',
        img_src: "https://nerdist.com/wp-content/uploads/2015/08/Holy-Grail-re-release-080415.jpg",
        reviews: [
            {content: 'This is a test review'},
            {content: 'Oh hai, world!'}
        ],
        rating: 1
    };
  }

  render() {
    return <AppRender
        movie_title={this.state.movie_title} img_src={this.state.img_src}
        director={this.state.director}
        movie_year={this.state.movie_year}
        movie_description={this.state.movie_description}
        onChangeMovie={this.changeMovie.bind(this)}

        reviews={this.state.reviews}
        onAddComment={(new_review) => this.setState({reviews: this.state.reviews.concat([{content: new_review}])})}

        rating={this.state.rating}
        setRating={(new_rating) => this.setState({rating: new_rating})}
      />;
  }

    changeMovie() {
        this.setState({
            movie_title: 'Back to the Future',
            movie_year: '1985',
            movie_description: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
            director: 'Robert Zemeckis',
            img_src: "https://i.ytimg.com/vi/qH7v9NOIsVE/maxresdefault.jpg"
        });
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
