import React from "react";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <table>
          <tr className="single-product-wrapper">
            <td><h5>Remove</h5></td>
            <td><h5>Product</h5></td>
            <td><h5>Name</h5></td>
            <td><h5>Price</h5></td>
            <td><h5>Quantity</h5></td>
            <td><h5>SubTotal</h5></td>
          </tr>
          <tr className="single-product-wrapper">
            <td>
              <div>x</div>
            </td>
            <td>
              <div class="card-image">
                <img src="/static/media/01.324b25fe.jpg" alt="product name" />
              </div>
            </td>
            <td>
              <div>
                product name
              </div>

            </td>
            <td>
              <div>
                price
              </div>
            </td>
            <td>
              <div>
                counter
              </div>
            </td>
            <td>
              <span>
                1 × <span>$</span>42.00
              </span>
            </td>
          </tr>

        </table>
      </>
    );
  }
}

export default ShoppingCart;
