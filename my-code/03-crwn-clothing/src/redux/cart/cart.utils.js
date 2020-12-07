export const addItemToCart = (cartItems, item) => {
  const existing = cartItems.find(i => i.id === item.id);

  if (existing) {
    return cartItems.map(i => 
      i.id === item.id 
        ? { ...i, quantity: i.quantity + 1 }
        : i
    );
  }

  return [...cartItems, { ...item, quantity: 1 } ];
};

export const removeItemFromCart = (cartItems, item) => {
  const newItems = cartItems.filter(i => i.id !== item.id);

  if (newItems.length !== cartItems.length) {
    return newItems;
  }

  return cartItems;
}

export const adjustItemCount = (cartItems, item, changeBy) => {
  const existing = cartItems.find(i => i.id === item.id);

  if(existing) {
    const newQuantity = Math.max(item.quantity + changeBy, 0);
    if (newQuantity < 1) {
      return removeItemFromCart(cartItems, item);
    } else {
      return cartItems.map(i =>
        i.id === item.id 
          ? { ...i, quantity: newQuantity}
          : i
      )
    }
  }
  return cartItems;
};