import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TO_CART, VIEW_DETAIL } from "./constant/shoeConstant";

class ItemShoe extends Component {
  render() {
    let { image, name } = this.props.item;
    return (
      <div className="card text-left col-2">
        <img className="card-img-top " src={image} alt />
        <div className="card-body p-0">
          <small className="card-title">{name}</small>
          <p className="card-text">
            <button
              onClick={() => { this.props.handleAddShoe(this.props.item)}}

              className="btn btn-primary mr-2"
            >
              Add
            </button>
            <button
              onClick={() => {
                this.props.handleDetail(this.props.item);
              }}
              className="btn btn-success"
            >
              View
            </button>
          </p>
        </div>
      </div>
    );
  }
}
// định nghĩa

let mapDispatchToProps = (dispatch) => {
  return {
    handleDetail: (shoe) => {
      let action = {
        type: VIEW_DETAIL,
        payload: shoe,
      };
      dispatch(action);
    },
    handleAddShoe: (shoe) => {
      let action = {
        type: ADD_TO_CART,
        payload: shoe,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemShoe);
