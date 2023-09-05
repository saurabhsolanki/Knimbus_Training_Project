import React, { useState } from "react";
import { Card, Container, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../Redux/Products/Product.action";
import {toast } from 'react-toastify';

const init={
    name:"",
    price:"",
    title:"",
    brand:"",
}

const AddProductPage = () => {
    const [form, setForm] = useState(init);
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addProduct(form,navigate))
        toast.success("Product Added Successfully",{autoClose: 500,})
    }
    
  return (
    <div>
      <Container style={{ width: "28rem"}} className=" mx-auto mt-5">
        <Card  className="p-4">
        <h3> Add Product</h3>
          <Form>
            <Stack gap={3}>
              <Form.Group>
                <Form.Control type="text" name='name' placeholder="Enter Product Name" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name='price' placeholder="Enter Product Price" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name='title' placeholder="Enter Product Title" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name='brand' placeholder="Enter Product Brand" onChange={handleChange}/>
              </Form.Group>

              <button className="btn btn-success" onClick={handleSubmit}>Add Product</button>
            </Stack>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default AddProductPage;
