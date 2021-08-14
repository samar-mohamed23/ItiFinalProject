import React from "react";
import { Link } from "react-router-dom";


class Checkout extends React.Component {
    render() {
        return (
            <>
                <form className="container">
                    <div class="mb-3">
                        <label className="form-label" for="name">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            class="form-control "
                            value=""
                            onChange={() => { }}
                            placeholder="Name"
                            id="name"
                        />
                    </div>

                    <div class="mb-3">
                        <label className="form-label" for="address">
                            Address:
                        </label>
                        <input
                            type="text"
                            name="street"
                            class="form-control"
                            value=""
                            onChange={() => { }}
                            placeholder="Street Address"
                            id="street"
                        />
                        <input
                            type="text"
                            name="apartment"
                            class="form-control mt-3"
                            value=""
                            onChange={() => { }}
                            placeholder="Apartment,suite,unit,etc(optional)"
                            id="apartment"
                        />
                    </div>

                    <div class="mb-3">
                        <label className="form-label" for="city">
                            City:
                        </label>
                        <input
                            type="text"
                            name="city"
                            class="form-control"
                            value=""
                            onChange={() => { }}
                            placeholder="city"
                            id="city"
                        />
                    </div>

                    <div class="mb-3">
                        <label className="form-label" for="country">
                            Country
                        </label>
                        <input
                            type="text"
                            name="country"
                            class="form-control"
                            value=""
                            onChange={() => { }}
                            placeholder="country"
                            id="country"
                        />
                    </div>

                    <div class="mb-3">
                        <label className="form-label" for="zip">
                            Zip Code:
                        </label>
                        <input
                            type="text"
                            name="zip"
                            class="form-control"
                            value=""
                            onChange={() => { }}
                            placeholder="12345"
                            id="zip"
                        />
                    </div>

                    <div class="mb-3">
                        <label className="form-label" for="email">
                            E-mail:
                        </label>
                        <input
                            type="text"
                            name="email"
                            class="form-control"
                            value=""
                            onChange={() => { }}
                            placeholder="example@domain.com"
                            id="email"
                        />
                    </div>

                    <div class="mb-3">
                        <label className="form-label" for="phoneNo">
                            Phone NO.:
                        </label>
                        <input
                            type="number"
                            name="phoneNo"
                            class="form-control"
                            value=""
                            onChange={() => { }}
                            placeholder="01*********"
                            id="phoneNo"
                        />
                    </div>

                    <div class="d-flex justify-content-center ">
                        <Link className="btn-main" to="/">
                            Place Order
                        </Link>
                    </div>
                </form>
            </>
        );
    }
}

export default Checkout;
