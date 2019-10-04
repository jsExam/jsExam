import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js"; // Only include Anime.JS in the components you need it.
import SearchFormCard from "./components/SearchFormCard";
import CourseInfoCard from "./components/CourseInfoCard";
import getCourse from "./helper/CourseHelper";

import "./styles/App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      action: "",
      fields: [],
      numberOfCourses: 0,
      courses: [],
      success: null,
      courseID: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    const { action, fields, results, rows, success, toID } = data;

    if (results > 0) {
      var self = this;
      anime({
        targets: [".has-info"],
        duration: 200,
        easing: "easeInOutSine",
        scale: 0,
        height: 0,
        complete: function() {
          self.setState({
            loading: false,
            action,
            fields,
            numberOfCourses: results,
            courses: rows,
            success,
            courseID: toID,
          });
        },
      });
    }

    let newState = Object.assign({}, this.state);
    newState.loading = false;
    this.setState(newState);
  }

  handleClick(event) {
    let newState = Object.assign({}, this.state);
    newState.loading = true;
    this.setState(newState);

    event.preventDefault();
    let courseId = document.getElementById("input-lecture-id").value;
    getCourse(courseId).then(this.handleData);
  }

  render() {
    const { courses, loading } = this.state;
    return (
      <div className="container">
        <div className="columns is-centered is-flex-column">
          <SearchFormCard onSubmit={this.handleClick} isLoading={loading} />
          {courses.map((course, index) => {
            return <CourseInfoCard key={index} course={course} />;
          })}
        </div>
      </div>
    );
  }
}
