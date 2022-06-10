// import React from "react";
// import styles from "./employee.module.css";
// const CartItem = ({ data, idx, itemRemoveHandler }) => {
//   return (
//     <tr>
//       <td>{idx + 1}</td>
//       <td>{data.name}</td>
//       <td>Rs. {data.price}</td>
//       <td>{data.qty}</td>
//       <td>Rs. {data.price * data.qty}</td>
//       <td>
//         <button
//           className={styles.removebtn}
//           onClick={() => itemRemoveHandler(data)}
//         >
//           Remove
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default CartItem;
import React from "react";
import styles from "./employee.module.css";
const CartItem = ({ data, idx, itemRemoveHandler, qtyChangeHandler }) => {
  const qtyHandler=(e)=>{
    if(e.target.value==0){
      itemRemoveHandler(data);
      return;
    }
    if(e.target.value>data.qty){
      qtyChangeHandler(data,true);
    }else{
      qtyChangeHandler(data,false);

    }
console.log(e.target.value);
  }
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{data.name}</td>
      <td>Rs. {data.price}</td>
      <td>
        <input
          type="number"
          min="0"
          value={data.qty}
          onChange={qtyHandler}
          className={styles.inputQty}
          />
      </td>
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
