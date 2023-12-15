
export const approveProduct = (productId) => ({
    type: 'APPROVE_PRODUCT',
    payload: { productId },
  });
  
  export const markProductMissing = (productId, urgent) => ({
    type: 'MARK_PRODUCT_MISSING',
    payload: { productId, urgent },
  });
  