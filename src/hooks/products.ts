import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {IProduct} from "../models";

export function useProducts() {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState<IProduct[]>([])
    const [error, setError] = useState('')

    async function getAllProducts() {

        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))
        // const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');

        try {
            setIsLoading(true);
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
            setProducts(response.data);
            setIsLoading(false);
        } catch (e: unknown) {
            setIsLoading(false);
            const error = e as AxiosError;
            setError(error.message);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    return {isLoading, products, error }
}