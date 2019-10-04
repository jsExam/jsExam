import React from "react";
import PropTypes from "prop-types";

const InfoElement = ({ children }) => <div className="has-info">{children}</div>;

InfoElement.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.element]).isRequired,
};

const SearchFormCard = ({ onSubmit, isLoading }) => {
  return (
    <div
      id="search-from"
      className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen m-auto"
    >
      <div className="card card-signin m-b-lg">
        <div className="card-content">
          <InfoElement>
            <h5>Lecture Enrollment Scheduling</h5>
          </InfoElement>
          <InfoElement>Enter the ID of the desired lecture to get further information on its enrollment.</InfoElement>
          <div className="content" style={{ marginTop: "2rem" }}>
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
              <button
                id="form-id-submit"
                className={"button is-primary is-uppercase " + (isLoading ? "is-loading" : "")}
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          <InfoElement style={{ marginTop: "1rem" }}>
            This application uses an open interface of jExam and is only for informational purposes, e.g. to find out,
            when enrollment starts.
          </InfoElement>
          <div className="field is-grouped has-info" role="group" aria-label="Imprint" style={{ marginTop: "1rem" }}>
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
  );
};

SearchFormCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchFormCard;
