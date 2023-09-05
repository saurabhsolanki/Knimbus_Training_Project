import React from "react";

const AddItem = ({ name, handleNameChange, handleImageChange,handleSubmit }) => {
  return (
    <div>
      <div className="container mx-auto mt-5" style={{ width: "28rem" }}>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control"  value={name} onChange={handleNameChange} placeholder="Enter Name..."/>
              </div>
              <div className="mb-3">
                <label for="image" className="form-label">Image:</label>
                <input type="file" id="image" className="form-control" onChange={handleImageChange} />
              </div>
              <div className="mb-3">
                <button className=" btn btn-primary" onClick={handleSubmit} > submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
