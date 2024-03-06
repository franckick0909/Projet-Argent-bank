import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <h1 className="titre-error">404</h1>
      <p className="text-error">
        Sorry, the page you are looking for could not be found.
      </p>

      <Link to="/" className="button-error">
        Go to home page
      </Link>
    </section>
  );
};

export default Error;
