import React from "react";
import { Link } from "react-router-dom";

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="p-5">
        <div class="d-flex justify-content-center p-2">
          <Link className="btn btn-main" to="/login">Login</Link>
        </div>
        <div class="d-flex justify-content-center p-2">
          <Link className="btn btn-main" to="/signup">Register</Link>
        </div>
      </div>

    );
  }
}

export default Account;
