declare module '@nuex-shopping-cart/store' {
  export const useShoppingCartStore: (pinia?: Pinia) => {
    addProduct: (product: Product) => void;
    products: Product[];
    removeProduct: (id: number) => void;
    totalSum: number;
  };
}

declare module '@nuex-shopping-cart/ShoppingCartComponent' {
  const ShoppingCardComponent: VueElement;
  export default ShoppingCardComponent;
}
