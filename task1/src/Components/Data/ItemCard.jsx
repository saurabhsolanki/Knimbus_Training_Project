import React from "react";

const ItemCard = ({name,imageUrl,handleDeleteImage, index}) => {
    console.log(name,imageUrl)
  return (
    <div>
      <div class="card h-100" >
        <img src={imageUrl} class="card-img-top" alt="..." style={{height:"200px"}}/>
        <div class="card-body">
          <h5 class="card-title">Name:- {name}</h5>
          <button className="btn btn-danger" onClick={()=>handleDeleteImage(index)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
