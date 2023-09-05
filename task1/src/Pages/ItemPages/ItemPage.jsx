import React, { useState } from 'react'
import ItemCard from '../../Components/Data/ItemCard';
import AddItem from './AddItem';

const ItemPage = () => {
    const [name, setName] = useState('');
    const [images, setImages] = useState([]);
    const [newImage,setNewImage]=useState({})
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      const obj = { name, imageUrl };
      setNewImage(obj);
      // setImages([...images, newImage]);
    };

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("newimage",newImage)
      setImages([...images, newImage]);
    }
    
  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };


  return (
    <div>
      <div className="container">
        <AddItem name={name} handleNameChange={handleNameChange} handleImageChange={handleImageChange} handleSubmit={handleSubmit}/>
      </div>

      {images.length > 0 && (
        <div className="container">
          <h2>Selected Images:</h2>
          <div className="row">
          {
            images?.map((item,index)=>{
                return(
                    <div className="col-sm-6 col-md-4 col-lg-3 my-3">
                         <ItemCard {...item} handleDeleteImage={handleDeleteImage} index={index} />
                    </div>
                )
            })
          }

          </div>
        </div>
      )}
    </div>
  )
}

export default ItemPage
