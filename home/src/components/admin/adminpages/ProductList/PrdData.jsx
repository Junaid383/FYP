import "./prdData.css";

import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from '@mui/x-data-grid';





const PrdData = ({ productData }) => {
    const [data, setData] = useState(productData);

    console.log(productData);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
    
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {productData.row.name}
                    </div>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];
    










    return (
        <div>
            <h1 className="prdName">
                {productData.map((PRD , key ) =>{
                    <div>
                        {PRD.name}
                    </div>
                })}
                {/* <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                /> */}
            </h1>

        </div>




    )
}

export default PrdData