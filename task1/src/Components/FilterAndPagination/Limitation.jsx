import React from 'react'
import Form from "react-bootstrap/Form";

const Limitation = ({setLimit}) => {
  return (
    <div>
        <Form.Select aria-label="Default select example" onChange={(e)=>setLimit(e.target.value)}>
        <option value='8'>Select Product Per Page</option>
        <option value="4">4 - Products Per Page</option>
        <option value="6">6 - Products Per Page</option>
        <option value="12">12 - Products Per Page</option>
        <option value="16">16 - Products Per Page</option>
      </Form.Select>
    </div>
  )
}

export default Limitation
