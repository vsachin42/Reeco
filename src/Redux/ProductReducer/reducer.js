const initialState = {
    products: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'APPROVE_PRODUCT':
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.productId
              ? { ...product, status: 'Approved' }
              : product
          ),
        };
  
      case 'MARK_PRODUCT_MISSING':
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.productId
              ? {
                  ...product,
                  status: action.payload.urgent ? 'Missing - Urgent' : 'Missing',
                }
              : product
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  