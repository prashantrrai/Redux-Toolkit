import axios from "axios"
import { API } from "../apiEndPoints"

export const GetProductService = async () => {
    return await axios.get(`${API.PRODUCTS}`)
}
export const AddProductService = async (productObj) => {
    return await axios.get(`${API.PRODUCTS}`, productObj)
}
export const EditProductService = async (productId, productObj) => {
    return await axios.put(`${API.PRODUCTS}/${productId}`, productObj)
}
export const DeleteProductService = async (productid) => {
    return await axios.delete(`${API.PRODUCTS}/${productid}`)
}