import React, { Component } from "react";
import PropTypes from "prop-types";
import stringifyTimestamp from "../helper/DateHelper";
import anime from "animejs/lib/anime.es.js"; // Only include Anime.JS in the components you need it.

export default class CourseInfoCard extends Component {
  constructor(props) {
    super(props);
    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    const node = this.nodeRef.current;

    anime({
      targets: node,
      duration: 350,
      opacity: 1,
      easing: "easeInOutQuad",
    });
  }

  render() {
    const {
      course: { ...course },
    } = this.props;

    const { name, lectureType, currentMembers, maxMembers, freeForEnroll, comment } = course;

    return (
      <div
        ref={this.nodeRef}
        className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen m-auto"
        style={{ opacity: 0 }}
      >
        <div className="card card-signin">
          <div className="card-content">
            <h5>
              {name} {lectureType}
            </h5>
            <div>
              {currentMembers} of {maxMembers} enrolled
            </div>
            <div>Enrollment opens: {stringifyTimestamp(freeForEnroll.start)}</div>
            <div>Enrollment closes: {stringifyTimestamp(freeForEnroll.end)}</div>
            <div>{comment}</div>
          </div>
        </div>
      </div>
    );
  }
}

CourseInfoCard.prototypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lectureType: PropTypes.string.isRequired,
    currentMembers: PropTypes.number.isRequired,
    maxMembers: PropTypes.number.isRequired,
    freeForEnroll: PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
    }),
    comment: PropTypes.string.isRequired,
  }).isRequired,
};