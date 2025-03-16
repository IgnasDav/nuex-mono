import { Category, ProductsRes } from '../types/product';
import axios, { AxiosError } from 'axios';
import { Result, tryCatch } from '../utils/try-catch';

export async function getProductsByCategory(
  category: Category
): Promise<Result<ProductsRes, AxiosError>> {
  const productsFetch = axios
    .get<ProductsRes>(`https://dummyjson.com/products/category/${category}`)
    .then(({ data }) => data);

  return tryCatch(productsFetch);
}
