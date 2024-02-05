import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/reducer/products";
import { DeleteProductService, GetProductService } from "../services";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";


const Product = () => {
  const dispatch = useDispatch();


  const GetProductsData = async () => {
    try {
      const response = await GetProductService();
      dispatch(getProducts(response.data));
    } catch (error) {
      console.error(error);
    }
  }

  const DeleteProductsData = async (id) => {
    try {
      await DeleteProductService(id);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetProductsData()
  }, [])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ProductTable />
      </div>
      
      <ProductForm />
    </>

  )
}

export default Product