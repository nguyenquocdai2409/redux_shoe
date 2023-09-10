import React, { Component } from "react";
import { connect } from "react-redux";
import { REMOVE_ITEM, UPDATE_QUANTITY } from "./constant/shoeConstant";
import { GIAM_SO_LUONG, TANG_SO_LUONG } from "./data";
import { act } from "react-dom/test-utils";

class CartShoe extends Component {
  renderCart = () => {
    let { cart } = this.props;
    return cart.map((item, index) => {
      let { name, price, image, soLuong, id } = item;
      return (
        <tr key={index}>
          <td className="d-flex justify-content-center align-items-center">
            {name}
          </td>
          <td>{price}</td>
          <td>
            <img width={150} src={image} />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleUpdateQuantity(id, GIAM_SO_LUONG);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <strong> {soLuong} </strong>
            <button
              onClick={() => {
                this.props.handleUpdateQuantity(id, TANG_SO_LUONG);
              }}
              className="btn btn-warning"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemove(id);
              }}
              className="btn btn-dark"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Action</th>
          </thead>
          <tbody>{this.renderCart()}</tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateQuantity: (id, option) => {
      let action = {
        type: UPDATE_QUANTITY,
        payload: {
          id,
          option,
        },
      };
      dispatch(action);
    },
    handleRemove: (id) => {
      let action = {
        type: REMOVE_ITEM,
        payload: id,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);
