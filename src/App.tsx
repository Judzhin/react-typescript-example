import React, {useEffect, useState} from "react";
import {Product} from "./components/Product";
// import {products} from "./data/products";
// import axios, {AxiosError} from "axios";
// import {IProduct} from "./models";
import {useProducts} from "./hooks/products";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";

function App() {

    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState('')
    // const [products, setProducts] = useState<IProduct[]>([])

    const {isLoading, products, error} = useProducts();

    // async function getAllProducts() {
    //     // fetch('https://fakestoreapi.com/products')
    //     //     .then(res=>res.json())
    //     //     .then(json=>console.log(json))
    //     // const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
    //
    //     try {
    //         setIsLoading(true);
    //         const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
    //         setProducts(response.data);
    //         setIsLoading(false);
    //     } catch (e: unknown) {
    //         const error = e as AxiosError;
    //         setError(error.message);
    //         setIsLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     getAllProducts();
    // }, [])

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {/*<Product key={products[0].id} product={products[0]}/>*/}
            {/*<Product key={products[1].id} product={products[1]}/>*/}

            {/*{isLoading && <div className={'text-center'}>Loading...</div>}*/}
            {isLoading && <Loader/>}

            {products.map(product => <Product product={product} key={product.id}/>)}

            {/*{error && <div className='text-center text-red-600'>{error}</div>}*/}
            {error && <ErrorMessage error={error}/>}

            <Modal title={"Create new Product"}>
                <CreateProduct/>
            </Modal>
        </div>
    );
}

export default App;
