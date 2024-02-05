import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectedProducts, getProducts } from '../store/reducer/products';
import { DeleteProductService, GetProductService } from '../services';

const ProductTable = () => {
    const productsData = useSelector((state) => state.product);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await GetProductService();
        dispatch(getProducts(response.data));
    }

    const handleDelete = async (id) => {
        await DeleteProductService(id);
        fetchProducts()
    }

    return (
        <>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            productsData.data?.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.title}</td>
                                        <td>{data.description}</td>
                                        <td>{data.quantity}</td>
                                        <td>{data.amount}</td>
                                        <td>
                                            <button onClick={() => { dispatch(fetchSelectedProducts(data.id)) }}>Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => {handleDelete(data.id)}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductTable;