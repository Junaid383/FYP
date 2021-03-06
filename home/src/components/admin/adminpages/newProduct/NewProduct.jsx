import React, { useState } from 'react'
import styles from "./newProduct.module.css";
import { ToastContainer , toast } from 'react-toastify';

import { NavLink, useHistory } from 'react-router-dom';


export default function NewProduct() {

  const history = useHistory();
  // const [ photo, setPhoto] = useState('');
  const [user, setUser] = useState({
    image:"" , name: "", stock: "", price: ""
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })

  }

  const PostData = async (e) => {
    e.preventDefault();

    const { image, name, stock, price , cost , unit , category } = user;

    const res = await fetch("/admin/newProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",


      },
      body: JSON.stringify({

        image, name, stock, price , cost , unit , category

      })
    });
    console.log(res);

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
        console.log(data.image);
        toast.error("Filled All Field Correctly .", {
          position: "top-center",
          reverseOrder: false,
          autoClose: 1500,
        })

    } else {
      toast.success('Product Enter Successfully ', {
        position: "top-center",
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        history.push('/admin/products');
            }, 2000);

     
    }

  }







  return (

    <div className={styles.newProduct}>

      <h1 className={styles.addProductTitle}>New Product</h1>
      <form method='POST' className={styles.addProductForm}>
        <div className={styles.addProductItem}>
          <label>Image</label>
          <input name="image"
            autoComplete="off"
            value={user.image}
            onChange={handleInputs}
            type="file" id="file" />
        </div>
        <div className={styles.addProductItem}>
          <label>Name</label>
          <input name="name"
            autoComplete="off"
            value={user.name}
            onChange={handleInputs}
            type="text" placeholder="Product Name" />
        </div>

        <div className={styles.addProductItem}>
          <label>Price</label>
          <input name="price"
            autoComplete="off"
            value={user.price}
            onChange={handleInputs}
            type="number" placeholder="Price" />
        </div>

        <div className={styles.addProductItem}>
          <label>Orignal Price</label>
          <input name="cost"
            autoComplete="off"
            value={user.cost}
            onChange={handleInputs}
            type="number" placeholder="Orignal Cost" />
        </div> 

        <div className={styles.addProductItem}>
          <label>Stock</label>
          <input name="stock"
            autoComplete="off"
            value={user.stock}
            onChange={handleInputs}
            type="number" placeholder="Quantity" />
        </div>
       
        <div className={styles.addProductItem}>
          <label>Unit</label>
          <input name="unit"
            autoComplete="off"
            value={user.unit}
            onChange={handleInputs}
            type="text" placeholder="Unit" />
        </div>
        <div className={styles.addProductItem}>
          <label>Category</label>
          <input name="category"
            autoComplete="off"
            value={user.category}
            onChange={handleInputs}
            type="text" placeholder="Category" />
        </div>

        {/* <div className={styles.addProductItem}>
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button
          type='submit' name='signup' value="register"
          onClick={PostData}
          className={styles.addProductButton}>Create</button>
      </form>
    </div>
  );
}
