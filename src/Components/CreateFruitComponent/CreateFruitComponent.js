import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getShops } from "../../../Actions/ShopAction";
import { createBlog } from "../../Actions/BlogAction";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import './CreateFruitComponent.css'
const CreateShopComponent = () => {
	const [name,setName] = useState()
	const [parent,setParent] = useState()
	const [child,setChild] = useState()
	const [desc,setDesc] = useState()
	
  const [validation, setValidation] = useState(false);
  const dispatch = useDispatch()
  const [selectedFile, setSelectedFile] = useState()
  // const isLoading = useSelector(state => state.shopUi.isLoading)
  // const shops = useSelector(state => state.shop.shops)

  const parant = [
    'News',
    'Sports',
    'Technology'
    
  ]

	const childs = ['Cricket', 'Football', 'Chess', 'VollyBall', 'Carrom']

    useEffect(()=>{
      // dispatch(getShops())
      
    },[])
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const parentHandler = (e) => {
      setParent(e.target.value)

    }
    const childHandler = (e) => {
      setChild(e.target.value)

    }

    const descHandler = (e) => {
      setDesc(e.target.value)

    }
 
    const formSubmitHandler = async (e) => {
        e.preventDefault()
       console.log(name);
       console.log(desc);
       console.log(child);
       console.log(parent);
      let image
      const formData = new FormData()
      formData.append('file', selectedFile)
          formData.append('fileName', selectedFile.name);
      formData.append('upload_preset', 'homedelivery')
        
      try {
        await axios
          .post(
            'https://api.cloudinary.com/v1_1/homedelivery/image/upload',
            formData
          )
          .then(res => {
                
            image = res.data.secure_url
          })
      } catch (error) {
        alert(error)
      }

        dispatch(createBlog({title:name,parent:parent,child:child,desc:desc,image:image,userId:"123456"}))
       
    }

    const catchFileDataHandler = e => {
	
			setSelectedFile(e)

	}

  

  return <div className="CreateFruitComponent">
        <div className="CreateFruitComponent-form-container">
            <form onSubmit={formSubmitHandler} className="CreateFruitComponent-form" >
                <div className="CreateFruitComponent-form-group">
                    <label>Title</label>
                    <input type='text' defaultValue={name} onChange={nameHandler}  placeholder="Enter Title"></input>
                </div>

                <div className="CreateFruitComponent-form-group">
                    <label>Parent</label>
                    <select onChange={parentHandler}>
                      {
                        parant.map(shop => <option key={shop} value={shop} >{shop}</option>)
                      }
                    </select>
                    {/* <input defaultValue={category} placeholder="Enter Fruit Category"  onChange={categoryHandler}></input> */}
                </div>

                <div className="CreateFruitComponent-form-group">
                    <label>Child</label>
                    <select onChange={childHandler}>
                      {
                        childs.map(shop => <option key={shop} value={shop} >{shop}</option>)
                      }
                    </select>
                    {/* <input defaultValue={category} placeholder="Enter Fruit Category"  onChange={categoryHandler}></input> */}
                </div>

                <div className="CreateFruitComponent-form-group">
                    <label>Description</label>
                    <textarea onChange={descHandler}>
                      {
                        // shops.map(shop => <option key={shop._id} value={shop._id ? shop._id : shop.name}>{shop.name}</option>)
                      }
                    </textarea>
                    {/* <input type='text' defaultValue={shop} onChange={shopHandler} placeholder="Enter Shop Name"></input> */}
                </div>

              

                <div className="CreateFruitComponent-form-group">
                    <label>Upload Image</label>
                    <ImageUploader onInput={catchFileDataHandler} />
                </div>

                   
                <div className="CreateFruitComponent-form-btn">
                    <button type='submit'className="submit-btn notLoading-btn" >Submit</button>
                </div>
            </form>
        </div>
  </div>;
};

export default CreateShopComponent;
