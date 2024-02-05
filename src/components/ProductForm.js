import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddProductService, EditProductService, GetProductService } from '../services';
import { fetchSelectedProducts, getProducts } from '../store/reducer/products';

const ProductForm = () => {

  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product);
  const [selected, setSelected] = useState([])
  const [productId, setProductId] = useState()
  
  const handleEdit = () => {
    const Id = productsData.selectedId;
    setProductId(Id);

    const EditingData = productsData.data.find((obj) => obj.id === Id);
    setSelected(EditingData);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelected({ ...selected, [name]: value });
  }


  const fetchProducts = async () => {
    const response = await GetProductService();
      dispatch(getProducts(response.data));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (productId) {
        const response = await EditProductService(productId, selected);
        setProductId(null);
        console.log(response)
      }
      else {
        await AddProductService(selected);
      }
  
      fetchProducts();
      setSelected(null);
      dispatch(fetchSelectedProducts(null));

      console.log(productsData)
    } catch (error) {
        console.error(error);
    }
  }

  useEffect(() => {
    handleEdit()
  }, [productsData])

  // useEffect(()=> {

  // }, [selected])
  return (
    <>
      <h5>You can Register  Products.</h5>
      <div>
        <form>
          <div>
            <input type="text" name='title' value={selected? selected.title: ''} placeholder='enter your product' onChange={handleChange}/>
          </div>
          <div>
            <input type="text" name='description' value={selected? selected.description: ''} placeholder='enter your description' onChange={handleChange}/>
          </div>
          <div>
            <input type="number" name='quantity' value={selected? selected.quantity: ''} placeholder='enter your quantity' onChange={handleChange}/>
          </div>
          <div>
            <input type="number" name='amount' value={selected? selected.amount: ''} placeholder='enter your price' onChange={handleChange}/>
          </div>
          <div>
            {
              selected? <button onClick={handleSubmit}>Submit</button> : <button disabled>Submit</button>
            }
          </div>
        </form>
      </div>
    </>
  )
}

export default ProductForm;