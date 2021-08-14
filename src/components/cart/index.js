import React from "react";
import { Link } from "react-router-dom";
import Counter from "../counter";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <div className="table-responsive table-hover ">
          <table className="table ">
            <thead className="m-3">
              <tr>
                <th scope="col" className="table-content">
                  Remove
                </th>
                <th scope="col" className="table-content">
                  Product
                </th>
                <th scope="col" className="table-content">
                  Price
                </th>
                <th scope="col" className="table-content">
                  Quantity
                </th>
                <th scope="col" className="table-content">
                  SubTotal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-3">
                <td className="table-content">
                  <div className="product-remove">x</div>
                </td>
                <td className="table-content">
                  <div className="table-product-view">
                    <img src="/static/media/01.324b25fe.jpg" alt="product name" />
                    <span>product name</span>
                  </div>
                </td>
                <td className="table-content">
                  <div>price</div>
                </td>
                <td className="table-content">
                  <div><Counter /></div>
                </td>
                <td className="table-content">
                  <span>$42.00</span>
                </td>
              </tr>
              <tr className="m-3">
                <td className="table-content">
                  <div className=" table-content product-remove">x</div>
                </td>
                <td className="table-content">
                  <div className="table-product-view">
                    <img src="/static/media/01.324b25fe.jpg" alt="product name" />
                    <span>product name</span>
                  </div>
                </td>
                <td className="table-content">
                  <div>price</div>
                </td>
                <td className="table-content">
                  <div><Counter /></div>
                </td>
                <td className="table-content">
                  <span>$42.00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="form-container center">
          <span className="form-label">Total</span>
          <h2>$1200</h2>

          <div class="d-flex justify-content-center p-2">
            <Link className="btn btn-main" to="/checkout">To Checkout &gt;&gt; </Link>
          </div>


        </div>
      </>

    );
  }
}

export default ShoppingCart;
