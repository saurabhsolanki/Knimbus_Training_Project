import React, { useEffect, useState } from "react";
import { Card, Container, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct, updateProduct } from "../../Redux/Products/Product.action";
import { toast } from "react-toastify";

let init={
  name:"",
  price:"",
  title:"",
  brand:"",
}

const UpdateProduct = () => {
  const {singleProductData}=useSelector((store)=>store.product)
  const [formData, setFormData] = useState(init);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(updateProduct(id,formData)).then((res)=>{
      toast.success("Product Added Successfully",{autoClose: 500,})
    })
    navigate('/home')
  };

  useEffect(()=>{
    dispatch(getSingleProduct(id))
    .then((res)=>{
      console.log("res",res)
      setFormData({...formData,name:res.name,price:res.price,title:res.title,brand:res.brand})
    })
    
  },[id])

  // console.log("form data",singleProductData,"id params:-",id)
  return (
    <div>
      <Container style={{ width: "28rem" }} className=" mx-auto mt-5">
        <Card className="p-4">
          <h3> Update Product </h3>
          <h5>Product id- {singleProductData.id}</h5>
          <Form>
            <Stack gap={3}>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Enter Product Name"
                  onChange={(e)=>handleChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="price"
                  value={formData.price}
                  placeholder="Enter Product Price"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  placeholder="Enter Product Title"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="brand"
                  value={formData.brand}
                  placeholder="Enter Product Brand"
                  onChange={handleChange}
                />
              </Form.Group>

              <button className="btn btn-success" onClick={handleSubmit}>
                Update Product
              </button>
            </Stack>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default UpdateProduct;
