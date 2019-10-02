import React, { Component } from "react";
import "./styles/Bulma.sass";
import "./styles/App.scss";
import anime from "animejs/lib/anime.es.js"; // Only include Anime.JS in the components you need it.
import { stringifyTimestamp } from "./helper/Date";

export default class App extends Component {
  render() {
    function handleData(data) {
      let referenceNode = document.getElementById("search-from");
      let elements = data.rows;
      elements.map(elem => {
        let node = document.createElement("div");
        node.classList.add(
          "column",
          "is-three-quarters-mobile",
          "is-two-thirds-tablet",
          "is-half-desktop",
          "is-one-third-widescreen",
        );
        node.style.opacity = 0;
        node.innerHTML = `
          <div class="card card-signin m-b-lg">
              <div class="card-content">
                  <div class="hide-on-search">
                      <h5>${elem.name} (${elem.lectureType})</h5>
                  </div>
                  <div class="hide-on-search">
                      ${elem.currentMembers} of ${elem.maxMembers} enrolled
                  </div>
                  <div class="hide-on-search">
                      Enrollment opens: ${stringifyTimestamp(elem.freeForEnroll.start)}
                  </div>
                  <div class="hide-on-search">
                      Enrollment closes: ${stringifyTimestamp(elem.freeForEnroll.end)}
                  </div>
                  <div class="hide-on-search">
                      ${elem.comment}
                  </div>
              </div>
          </div>
        `;
        referenceNode.after(node);
        anime({
          targets: node,
          duration: 250,
          opacity: 1,
          easing: "easeInOutQuad",
        });
      });
    }

    function handleClick(event) {
      event.preventDefault();

      anime({
        targets: [".hide-on-search"],
        duration: 300,
        easing: "easeInOutSine",
        scale: 0,
        height: 0,
      });

      let id = document.getElementById("input-lecture-id").value;

      fetch("https://jsexam.herokuapp.com/lectures?id=" + id)
        .then(response => {
          return response.status >= 200 && response.status < 300
            ? Promise.resolve(response.json())
            : Promise.reject(new Error(response.statusText));
        })
        .then(data => {
          if (data != undefined) handleData(data);
        })
        .catch(err => {
          console.log(err);
        });
    }

    return (
      <div className="container">
        <div className="columns is-centered is-flex-column">
          <div
            id="search-from"
            className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen"
          >
            <div className="card card-signin m-b-lg">
              <div className="card-content">
                <div className="hide-on-search">
                  <h5>Lecture Enrollment Scheduling</h5>
                </div>
                <div className="hide-on-search">
                  Enter the ID of the desired lecture to get further information on its enrollment.
                </div>
                <div className="hide-on-search" style={{ height: "2rem" }}></div>
                <div className="content">
                  <div className="form-id">
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="input-lecture-id"
                        className="input"
                        placeholder="Lecture ID"
                        required
                        autoFocus
                      ></input>
                      <label htmlFor="input-lecture-id">Lecture ID</label>
                    </div>
                    <hr className="m-b-md"></hr>
                    <button id="form-id-submit" className="button is-primary is-uppercase" onClick={handleClick}>
                      Submit
                    </button>
                  </div>
                </div>
                <div className="hide-on-search" style={{ height: "1rem" }}></div>
                <div className="hide-on-search">
                  This application uses an open interface of jExam and is only for informational purposes, e.g. to find
                  out, when enrollment starts.
                </div>
                <div className="hide-on-search" style={{ height: "1rem" }}></div>
                <div className="hide-on-search field is-grouped" role="group" aria-label="Basic example">
                  <p className="control">
                    <a href="https://philippmatth.es/" className="button is-primary is-outlined">
                      Imprint
                    </a>
                  </p>
                  <p className="control">
                    <a href="https://github.com/jsExam/jsExam/" className="button is-primary is-outlined">
                      Contribution
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
