import { productsApi } from './products-api';

describe('productsApi', () => {
  it('should work', () => {
    expect(productsApi()).toEqual('products-api');
  });
});
