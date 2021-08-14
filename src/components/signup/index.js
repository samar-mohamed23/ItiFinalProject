import React from "react";
import { Link } from "react-router-dom"
class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <>
                <div class="form-container ">

                    <h2 className=" m-2">Registeration Form</h2>

                    <form >
                        <div class="mb-3">
                            <label className="form-label" for="username">Username:</label>
                            <input type="text" name="username" class="form-control" value="" onChange={() => { }} placeholder="Username" id="username" />
                        </div>

                        <div class="mb-3">
                            <label className="form-label" for="email">E-mail:</label>
                            <input type="text" name="email" class="form-control" value="" onChange={() => { }} placeholder="example@domain.com" id="email" />
                        </div>

                        <div class="mb-3">
                            <label className="form-label" for="password">Password:</label>
                            <input type="text" name="password" class="form-control" value="" onChange={() => { }} placeholder="Password " id="password" />
                            <input type="text" name="password" class="form-control mt-3" value="" onChange={() => { }} placeholder="Confirm Password" id="passwordConfirmation" />
                        </div>





                        <div class="d-flex justify-content-center ">
                            <Link className="btn-main" to="/login">Sign up</Link>
                        </div>
                    </form>

                </div>
            </>
        );
    }
}

export default SignUp;
