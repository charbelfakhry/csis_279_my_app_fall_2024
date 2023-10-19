import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { Button, TextField } from "@mui/material";

const ProductForm = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const location = useLocation();


    useEffect(() => {

        const product = location.state?.product;
        console.log(product);
        setName(product?.product_name);
        setDescription(product?.product_desc);

    },[]);

    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <>
            <h1>Product Form</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Product Name"
                    value={name}
                    // onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    label="Description"
                    value={description}
                    // onChange={(event) => setDescription(event.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </>
    )
}

export default ProductForm;