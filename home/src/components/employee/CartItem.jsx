import React from "react";
import styles from "./employee.module.css";
const CartItem = ({ data, idx, itemRemoveHandler }) => {
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{data.name}</td>
      <td>Rs. {data.price}</td>
      <td>{data.qty}</td>
      <td>Rs. {data.price * data.qty}</td>
      <td>
        <button
          className={styles.removebtn}
          onClick={() => itemRemoveHandler(data)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
