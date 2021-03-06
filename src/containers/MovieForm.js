import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMovie } from "../actions/movieActions";
import TextField from "@material-ui/core/TextField";

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        name: "",
        url: "",
        dir: "",
        year: "",
      },

      //    name: '',
      //     url: '',
      //     dir: '',
      //     year: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    if (event) {
      event.preventDefault();

      let movie = {
        name: this.state.name,
        url: this.state.url,
        dir: this.state.dir,
        year: this.state.year,
      };

      this.props.dispatch(addMovie(movie));

      // this.setState({movie: movieReset})
      this.setState({
        movie: {
          name: "",
          url: "",
          dir: "",
          year: "",
        },
      });
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="movieform-container">
        <form className="movieform-form" onSubmit={this.handleOnSubmit}>
          <TextField
            type="text"
            name="name"
            placeholder="Movie"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)}
          />

          <TextField
            type="url"
            name="url"
            placeholder="YouTube"
            value={this.state.url}
            onChange={(event) => this.handleChange(event)}
          />

          <TextField
            type="text"
            name="dir"
            placeholder="Director"
            value={this.state.dir}
            onChange={(event) => this.handleChange(event)}
          />

          <TextField
            type="text"
            name="year"
            placeholder="Year"
            value={this.state.year}
            onChange={(event) => this.handleChange(event)}
          />

          <input onClick={this.handleOnSubmit()} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MovieForm);
