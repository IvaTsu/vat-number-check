import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Results = ({ error, loading, results }) => (
  <div>
    {error ? (
      loading ? (
        <p>Loading...</p>
      ) : (
        <p>There was an error loading the data. Try another input</p>
      )
    ) : loading ? (
      <p>Loading...</p>
    ) : (
      results && (
        <div className="display-results">
          <p style={{ textAlign: "justify" }}>
            Country Code: <strong>{results.CountryCode}</strong>
          </p>
          <p>
            VAT number: <strong>{results.VATNumber}</strong>
          </p>
          <p>
            Request Date:{" "}
            <strong>
              {moment(
                results.RequestDate.toString().slice(
                  0,
                  results.RequestDate.length - 6
                )
              ).format("MMM DD YYYY")}
            </strong>
          </p>
          <p>
            Validity: <strong>{results.Valid ? "Valid" : "Not Valid"}</strong>
          </p>
          <p>
            Name: <strong>{results.Name}</strong>
          </p>
          <p>
            Address: <strong>{results.Address}</strong>
          </p>
        </div>
      )
    )}
  </div>
);

Results.defaultTypes = {
  error: false,
  loading: false,
  results: null
};

Results.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  results: PropTypes.objectOf(PropTypes.any)
};

export default Results;
