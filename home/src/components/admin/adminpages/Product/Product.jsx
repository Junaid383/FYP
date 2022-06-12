import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./product.css";
// import Chart from "../../../chart/Chart";
import Chart from "../../../emp/chart/Chart";
import { productData } from "../../dummyData";
// import { productData } from "../emp/dummyData"
import { Publish } from "@material-ui/icons";
import User from "../user/User";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function Product() {
  const history = useHistory();
  const [data, setData] = useState([]);

  const location = useLocation();
  const prodID = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1,
    location.pathname.length
  );

  // ========================Data sending and fetching
  const FetchData = async (e) => {
    const res = await fetch("/admin/product/:prodID", {
      ///newEMP route
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prodID,
      }),
    });
    const data1 = await res.json(); //getting data from backend newEMP line 245
    // console.log(data1);
    setData(data1);
  };

  useEffect(() => {
    FetchData();
  }, []);

  const [user, setUser] = useState({
    name: "",
    price: "",
    quantity: "",
    cost:"",
    unit:"",
    category: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async () => {
    // e.preventDefault();

    const { name, price, quantity, cost , unit, category } = user;
    const res = await fetch("/admin/product/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prodID,
        name,
        price,
        cost,
        unit,
        category,
        quantity,
      }),
    });
    console.log(res);
    const updata = await res.json();
    console.log(updata);

    if (res.status === 422 || !updata) {
      toast.error("Product did'nt Update.", {
        position: "top-center",
        reverseOrder: false,
        autoClose: 1500,
      });
    } else {
      toast.success("Product Update Successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

      history.push("/admin/products");
    }
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Edit Product</h1>
        <Link to="/admin/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            {/* <img
              src="https://static9.depositphotos.com/1642482/1149/i/600/depositphotos_11490801-stock-photo-oranges-fruit.jpg"
              alt=""
              className="productInfoImg"
            /> */}
            <span className="productName">{data.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Price</span>
              <span className="productInfoValue">{data.price}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Orignal Cost:</span>
              <span className="productInfoValue">{data.cost}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Quantity:</span>
              <span className="productInfoValue">{data.stock}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Unit:</span>
              <span className="productInfoValue">{data.unit}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Category:</span>
              <span className="productInfoValue">{data.category}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">Yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleInputs}
              value={user.name}
              placeholder="Name"
            />

            <label>Product Price</label>
            <input
              type="number"
              name="price"
              autoComplete="off"
              onChange={handleInputs}
              value={user.price}
              placeholder="Price"
            />

            <label>Orignal Cost</label>
            <input
              type="number"
              name="cost"
              autoComplete="off"
              onChange={handleInputs}
              value={user.cost}
              placeholder="Price"
            />

            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              autoComplete="off"
              onChange={handleInputs}
              value={user.quantity}
              placeholder="Quantity"
            />

            <label>Unit</label>
            <input
              type="text"
              name="unit"
              autoComplete="off"
              onChange={handleInputs}
              value={user.unit}
              placeholder="Quantity"
            />

            <label>Category</label>
            <input
              type="text"
              name="category"
              autoComplete="off"
              onChange={handleInputs}
              value={user.category}
              placeholder="Quantity"
            />

            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              {/* <img
                src="https://static9.depositphotos.com/1642482/1149/i/600/depositphotos_11490801-stock-photo-oranges-fruit.jpg"
                alt=""
                className="productUploadImg"
              /> */}
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button
              value="register"
              className="productButton"
              onClick={PostData}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
